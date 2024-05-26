"use client";
import React, { useState } from "react";

const softSkills: string[] = [
  "👂🏼 Active Listening",
  "💬 Effective Communication",
  "👥 Collaboration",
  "⽓ Teamwork",
  "💡 Creative Problem Solving",
  "⌛️ Time management",
];
const hardSkills: string[] = [
  "Python",
  "TypeScript",
  "NextJS",
  "Express",
  "FastAPI",
  "Postgress",
  "MongoDB",
  "Prisma",
  "TailwindCSS",
  "Git & Github",
  "Docker",
];

function SkillsSections() {
  const [skill, setSkill] = useState("hard");
  return (
    <div className="mb-10">
      <div className="flex">
        <button
          onClick={() => setSkill("soft")}
          className={`${
            skill === "soft" ? "bg-yellow-300" : "bg-gray-200"
          } lg:text-2xl w-1/2 h-12 text-left pl-4 hover:bg-[#191A19] hover:text-yellow-300`}
        >
          SOFT SKILLS
        </button>
        <button
          onClick={() => setSkill("hard")}
          className={`${
            skill === "hard" ? "bg-yellow-300" : "bg-gray-200"
          } lg:text-2xl w-1/2 h-12  pr-4 text-right hover:bg-[#191A19] hover:text-yellow-300`}
        >
          HARD SKILLS
        </button>
      </div>
      <div>
        <ul
          className={`flex flex-row flex-wrap items-start py-4 gap-2 justify-start text-xl ${
            skill == "hard" && "justify-end"
          }`}
        >
          {skill === "soft"
            ? softSkills.map((sf, index) => (
                <li className="bg-[#D2EFF1] px-4 py-2 rounded-lg" key={index}>
                  {sf}
                </li>
              ))
            : hardSkills.map((hrd, index) => (
                <li className="bg-[#D2EFF1] px-4 py-2 rounded-lg" key={index}>
                  {hrd}
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsSections;
