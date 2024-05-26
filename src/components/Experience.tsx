import React from "react";
import ExperienceBlock from "./ExperienceBlock";

const Experience = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl">PROFESSIONAL EXPERIENCE</h1>
      <div className="flex flex-col gap-6">
        <ExperienceBlock
          title={"Computer vision Engineer, DigitalStates. (2022-Present)"}
          description={`
        Design and implement machine learning models to analyze large datasets
        and drive business decisions. Collaborate with cross-functional teams
        to develop and launch new products and features. Provide technical
        guidance and mentorship to junior data scientists. Conduct regular
        presentations to stakeholders on the findings and insights generated
        from data analysis.
        `}
          spanClass={"green-400"}
        />
        {/* <ExperienceBlock
          title={"Data Scientist, Acme Inc. (2021-Present)"}
          description={`
        Design and implement machine learning models to analyze large datasets
        and drive business decisions. Collaborate with cross-functional teams
        to develop and launch new products and features. Provide technical
        guidance and mentorship to junior data scientists. Conduct regular
        presentations to stakeholders on the findings and insights generated
        from data analysis.
        `}
          spanClass={"gray-200"}
        /> */}
        {/* <ExperienceBlock
          title={"Data Scientist, Acme Inc. (2021-Present)"}
          description={`
        Design and implement machine learning models to analyze large datasets
        and drive business decisions. Collaborate with cross-functional teams
        to develop and launch new products and features. Provide technical
        guidance and mentorship to junior data scientists. Conduct regular
        presentations to stakeholders on the findings and insights generated
        from data analysis.
        `}
          spanClass={"gray-200"}
        /> */}
      </div>
    </div>
  );
};

export default Experience;
