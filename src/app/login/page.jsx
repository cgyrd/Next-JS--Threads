import Link from "next/link";

function Login() {
  return (
    <>
      <div>
        {/*Title*/}

        <h1 className="title">
          Comment souhaitez-vous utiliser Threads ?
        </h1>

        <div className="mt-5 w-[500px] mx-auto flex flex-col gap-4">
          {/*Sign Up  and Sign In*/}
          <Link href="/login/signup">
            <div className="auth-method">
              <h2 className="font-bold text-white ">
                S'inscrire ou se connecter avec une adresse e-mail
              </h2>
              <div className="text-threads-gray-light mt-4">
                <p>
                  {" "}
                  Connectez-vous ou créez un profil Threads avec une adresse
                  e-mail.Cela vous permettra de publier du contenu et
                  d'intéragir sur Threads{" "}
                </p>
              </div>
            </div>
          </Link>

          {/*Invited Mode */}
          <Link href="/login/signup">
            <div className="auth-method">
              <h2 className="font-bold text-white ">
               Utiliser sans profil
              </h2>
              <div className="text-threads-gray-light mt-4">
                <p>
                  Vous pouvez naviguer dans Threads sans profil, mais vous ne pourrez pas intéragir avec du contenu, ni en publier.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
