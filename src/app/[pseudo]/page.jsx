"use client";

import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Profile() {
  // Variable
  const params = useParams();
  const pseudo = params.pseudo.slice(3);
  const posts = [
    {
      _id: "1",
      content: "Bienvenue sur mon profil Threads !",
      pseudo: "JohnDoe",
      image: "/picture.png",
    },
    {
      _id: "2",
      content: "Bienvenue sur mon profil Threads !",
      pseudo: "JohnDoe",
      image: "/picture.png",
    },
    {
      _id: "3",
      content: "Bienvenue sur mon profil Threads !",
      pseudo: "JohnDoe",
      image: "/picture.png",
    },
    {
      _id: "4",
      content: "Bienvenue sur mon profil Threads !",
      pseudo: "JohnDoe",
      image: "/picture.png",
    },
    {
      _id: "5",
      content: "Bienvenue sur mon profil Threads !",
      pseudo: "JohnDoe",
      image: "/picture.png",
    },
  ];

  return (
    <ConnectedLayout>
      <div className="mt-10 md:w-[700px] mx-auto text-white">
        {/*  Info */}
        <div className="flex justify-between gap-4">
          {/* Data */}
          <div>
            <h1 className="text-3xl font-semibold">John Doe</h1>

            <div className="text-threads-gray-light mt-2">@{pseudo}</div>

            <div className="mt-5 whitespace-pre-line">- </div>
            <div className="mt-5 text-blue-500 hover:text-blue-400 duration-150 inline-block"></div>
            <a href="https://www.instagram.com/">https://www.instagram.com/ </a>
          </div>

          {/* Picture */}

          <div>
            <img
              src="/picture.png"
              alt="User"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-10">
          {/* Threads */}

          <div className="flex-1 border-b border-white pb-4 px-4 text-center hover:text-white hover:border-white duration-150 cursor-pointer">
            Threads
          </div>

          {/* Response */}

          <div className="flex-1 border-b border-threads-gray-light pb-4 px-4 text-center text-threads-gray-light hover:text-white hover:border-white duration-150 cursor-pointer">
            Réponses
          </div>

          {/* Reposts */}

          <div className="flex-1 border-b border-threads-gray-light pb-4 px-4 text-center text-threads-gray-light hover:text-white hover:border-white duration-150 cursor-pointer">
            Republications
          </div>
        </div>

        {/* Posts */}

        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </ConnectedLayout>
  );
}
