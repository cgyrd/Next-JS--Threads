import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          // connection au MongoDB cluster
          const client = await MongoClient.connect(process.env.MONGODB_CLIENT);
          // se connecter à la base de données
          const db = client.db(process.env.MONGODB_DATABASE);

          //  1 Get user for this email  en selectionnant users collection
          let user = await db
            .collection("users")
            .find({ email })
            .limit(1)
            .toArray();
          //  si l'email n'est oas utilisé
          if (user.length === 0) {
            await client.close();
            throw new Error("L'utilisateur n'existe pas !");
          }

          // 2 : Vérification du mot de passe
          const isPasswordValid = await bcrypt.compare(
            password,
            user[0].password
          );
          // Si le MDP n'est pas valide
          if (!isPasswordValid) {
            await client.close();
            throw new Error("Mot de passe est incorrect !");
          }

          // 3  Notre utilisateur est authentifié donc format"user" et ne pas ajouter des données sensibles comme le mot de passe
          user = user.map((user) => ({
            id: user._id.toString(),
            username: user.username,
            pseudo: user.pseudo,
            email: user.email,
            profile: user.profile,
          }))[0];

          // On ferme la connexion à la base de données
          await client.close();

          return user;
        } catch (e) {
          throw new Error(e.message);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },

    async session({ session, user , token }) {
      session.user = token.user;
      return session;
    },
  },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };