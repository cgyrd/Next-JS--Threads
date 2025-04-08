"use client";

import Button from "@/components/Button/Button";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Pass() {
  // Variable
  const router = useRouter();

  // Function to handle the continue button click
  const onContinue = () => {
    // Generate a new cookie
    setCookie("guest", "true");

    // Redirect

    router.push("/");
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
        Continuer en mode invité
      </h1>

      {/* Text */}

      <p className="text-threads-gray-light mt-4">
        Vous pouvez naviguer dans Threads sans profil, mais vous ne pourrez pas
        intéragir avec du contenu ni en publier"
      </p>
      {/* Button to Go On Invited */}
      <Button onClick={onContinue}>Continuer </Button>
    </div>
  );
}

export default Pass;
