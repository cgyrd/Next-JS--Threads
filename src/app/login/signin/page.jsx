"use client";

import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { checkEmail } from "@/utils/check-emailsyntax";

export default function Signin() {
  const router = useRouter();

  const prepareLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);

    // Si un champ est vide
    if (!email || !password) {
      return toast.error("Aucun champ ne doit être vide !");
    }

    // check if the email is valid
    if (!checkEmail(email)) {
      return toast.error("Veuillez entrer un email valide !");
    }

    // Sign in the user
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.error) {
        return toast.error(response.error);
      }

      // Succès
      toast.success("Vous êtes connecté(e) !");
      router.replace("/");
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <div className="w-[440px] mx-auto">
      {/* Title */}
      <h1 className="title flex items-center gap-1 ">
        <Link href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M220 128a4 4 0 0 1-4 4H49.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 0 1 5.66 5.66L49.66 124H216a4 4 0 0 1 4 4"
            ></path>
          </svg>
        </Link>
        Connectez-vous
      </h1>

      {/* Form */}
      <form action={prepareLogin}>
        {/* email */}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className=" bg-threads-gray block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light"
          required
        />
        {/* MDP */}
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className=" bg-threads-gray block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light"
          required
        />
        <Button formButton>Se connecter</Button>
      </form>

      <div className="flex justify-center items-center mt-4">
        <div className="border-t border-threads-gray-dark w-1/4"></div>
        <div className="text-threads-gray-light mx-4">ou </div>
        <div className="border-t border-threads-gray-dark w-1/4"></div>
      </div>

      {/* Bouton Se connecter  */}
      <Link href="/login/signup">
        <Button>Créer un compte</Button>
      </Link>
    </div>
  );
}
