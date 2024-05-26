import Image from "next/image";
import React from "react";
import saad from "@/assets/saad.jpg";
import ContactMe from "./ContactMe";

function LeftSideBar() {
  return (
    <div className="lg:w-1/3 sm:w-full h-screen sticky lg:top-0 bg-[#191A19] text-white flex flex-col items-center p-10 ml-auto">
      <Image
        src={saad}
        alt="saad"
        width={300}
        height={300}
        className="rounded-full mb-6 max-w-max"
      ></Image>
      <h1 className="text-[#FFF734] sm:text-2xl lg:text-[70px] mb-2">
        Saad Alamgir
      </h1>
      <h2 className="mb-8 sm:text-sm lg:text-3xl text-white">
        Software Enginner
      </h2>
      <p className="mb-2">
        Bachelor of Science in Computer Science, PMAS-AAUR(2016-2020)
      </p>
      <p className="mb-2">
        Prime Minister kamayab Nojawan Program, AI and Data Science (2022)
      </p>
      <ContactMe />
    </div>
  );
}

export default LeftSideBar;
