import React from "react";
import SkillCard from "./SkillCard";
import { ButtonOutline } from "./Button";

const skillItem = [
  {
    imgSrc: "my_portfolio/images/react.svg",
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: "my_portfolio/images/redux.svg",
    label: "Redux",
    desc: "State Management",
  },
  {
    imgSrc: "my_portfolio/images/nextjs.svg",
    label: "NextJS",
    desc: "Framework",
  },
  {
    imgSrc: "my_portfolio/images/angular.svg",
    label: "Angular",
    desc: "Framework",
  },
  {
    imgSrc: "my_portfolio/images/nestjs.svg",
    label: "NestJS",
    desc: "Framework",
  },

  {
    imgSrc: "my_portfolio/images/ngrx.svg",
    label: "NGRX",
    desc: "State Management",
  },

  {
    imgSrc: "my_portfolio/images/javascript.svg",
    label: "JavaScript",
    desc: "Language",
  },
  {
    imgSrc: "my_portfolio/images/typescript.svg",
    label: "Typesript",
    desc: "Language",
  },
  {
    imgSrc: "my_portfolio/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "my_portfolio/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "my_portfolio/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "my_portfolio/images/sql.svg",
    label: "SQL",
    desc: "Database",
  },
  {
    imgSrc: "my_portfolio/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "my_portfolio/images/git.svg",
    label: "GIT",
    desc: "Version Control",
  },
  {
    imgSrc: "my_portfolio/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "my_portfolio/images/python.svg",
    label: "Python",
    desc: "Language",
  },
  {
    imgSrc: "my_portfolio/images/java.svg",
    label: "Java",
    desc: "Language",
  },
  {
    imgSrc: "my_portfolio/images/jest.svg",
    label: "Jest",
    desc: "Testing Framework",
  },
];
const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discouver the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
              key={key}
            />
          ))}
          <div className="flex flex-col items-center mt-5">
            <ButtonOutline
              href="my_portfolio/assets/Deeksha_Resume.pdf"
              label="AND MORE"
              icon="read_more"
              target="_blank"
              classes={"text-sky-400"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

//Skill.propTypes = {};

export default Skill;
