"use client";

import Link from "next/link";
import Footer from "../footer/Footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "../Button/Button";
import { signOut, useSession } from "next-auth/react";

export default function ConnectedLayout({ children }) {
  //variable
  const pathname = usePathname();
  const { data: session } = useSession();
  console.log(session);

  return (
    <section className="flex flex-col min-h-screen px-5">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        {/* Nav */}
        <nav className="absolute left-0 top-0 right-0 flex justify-center py-7 gap-7 z-0">
          {/* Index */}
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-10 h-10 ${
                pathname == "/" ? "text-white" : "text-threads-gray-light"
              }`}
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-88 0h-48v-48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"
              />
            </svg>
          </Link>

          {/* Search */}
          <Link href="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-10 h-10 hover:bg-threads-gray-dark duration-150 p-1 rounded-xl ${
                pathname == "/search" ? "text-white" : "text-threads-gray-light"
              }`}
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
              ></path>
            </svg>
          </Link>
        </nav>

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Threads"
          width={40}
          height={40}
          className="w-10 h-10"
        />

        {/* Button */}
        <div className="z-10">
          {session?.user?.email ? (
                        <Button withoutMarginTop onClick={() => signOut ()}>Se déconnecter</Button> ) : (
          <Link href="/login">
            <Button withoutMarginTop>Se connecter</Button>
          </Link>
        )}
        </div>
      </header>

      {/* Content */}
      <div className="flex-1">{children}</div>
      {/* Footer */}
      <Footer />
    </section>
  );
}
