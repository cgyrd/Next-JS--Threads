"use client";

import Button from "@/components/Button/Button";
import { createUser } from "@/actions/create-user";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkEmail } from "@/utils/check-emailsyntax";
import { useRouter } from "next/navigation";

export default function Signup() {
  // variable router
  const router = useRouter();

  //function

  const prepareCreateUser = async (formData) => {
    const username = formData.get("username");
    const pseudo = formData.get("pseudo");
    const email = formData.get("email");
    const password = formData.get("password");

    // if a field is empty
    if (!username || !pseudo || !email || !password) {
      // Notification avec Toaster
      toast.error("Aucun champ ne doit être vide");
      return; // Prevent form submission if there are empty fields
    }

    // check if email is valid
    if (!checkEmail(email)) {
      return toast.error("L'email n'est pas valide!");
    }

    try {
      await createUser(username, pseudo, email, password);
    } catch (error) {
      return toast.error("error.message");
    }

    // en cas de succès

    toast.success("Inscription réussie ! Vous pouvez vous connecter !");
    // Redirection vers la page de connexion
    router.push("/login/signin");
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
        Inscrivez-vous
      </h1>

      {/* Form */}
      <form action={prepareCreateUser}>
        {/* Nom d'utilisateur */}
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          className=" bg-threads-gray block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light"
          required
        />
        {/* Pseudo */}
        <input
          type="text"
          name="pseudo"
          placeholder="Pseudo"
          className=" bg-threads-gray block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light"
          required
        />
        {/* email */}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className=" bg-threads-gray block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light"
          required
        />{" "}
        {/* MDP */}
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className=" bg-threads-gray block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light"
          required
        />
        <Button formButton>S'inscrire</Button>
      </form>

      <div className="flex justify-center items-center mt-4">
        <div className="border-t border-threads-gray-dark w-1/4"></div>
        <div className="text-threads-gray-light mx-4">ou </div>
        <div className="border-t border-threads-gray-dark w-1/4"></div>
      </div>
      {/* Bouton Se connecter  */}
      <Link href="/login/signin">
        <Button>Se connecter</Button>
      </Link>
      <ToastContainer />
    </div>
  );
}
