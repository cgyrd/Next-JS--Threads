"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Button from "../Button/Button";

export default function NewPostForm() {
  // variable
  const { data: session } = useSession();

  // State
  const [textarea, setTextarea] = useState("");

  return (
    <form>
      <div className="flex gap-3 w-full">
        {/* Image */}
        <div>
          <Image
            src={session?.user.profile}
            alt="User"
            width={50}
            height={50}
            className="rounded-full mt-5"
          />
        </div>
        {/* ChampcContent */}
        <div className="flex-1">
          <textarea
            name="content"
            placeholder="Commencez un Thread ..."
            className="bg-threads-gray-light block w-full mt-3 text-white rounded-xl p-5 placeholder:text-threads-gray-light;"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end">
        <div>
          <Button formButton disabled={textarea.length <1}>Publier </Button>
        </div>
      </div>
    </form>
  );
}
