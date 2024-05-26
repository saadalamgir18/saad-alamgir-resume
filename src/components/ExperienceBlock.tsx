import React from "react";

type PropType = {
  title: string;
  description: string;
  spanClass: string;
};
function ExperienceBlock({ title, description, spanClass }: PropType) {
  return (
    <div className="flex flex-col rounded-lg">
      <span className={`h-2 bg-${spanClass}`}></span>
      <div className="bg-gray-100 p-6 shadow-md">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceBlock;
