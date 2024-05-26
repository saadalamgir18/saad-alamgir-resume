import React from "react";
import SkillsSections from "./SkillsSections";
import Experience from "./Experience";

function RightSidebar() {
  return (
    <div className="lg:w-2/3 sm:w-full text-black p-8 lg:m-12">
      <h1 className="mb-8 text-3xl">ABOUT ME</h1>
      <p className="mb-6">
        As a highly motivated and driven individual with a passion \for making a
        positive impact, I have a unique blend of technical and interpersonal
        skills, thanks to my background in computer science. I am able to tackle
        complex problems with ease, and I never lose sight of my ultimate goal,
        even when facing challenges.
      </p>
      <p className="mb-6">
        When Im not working, I love hiking, reading, and spending time with my
        friends and family. I believe that my determination, can-do attitude,
        and hard work make me a true asset to any team.
      </p>
      <SkillsSections />
      <Experience />
    </div>
  );
}

export default RightSidebar;
