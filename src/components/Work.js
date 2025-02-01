import React from "react";
import WordCard from "./WordCard";

const works = [
  {
    imgSrc: "/images/secret_santa_app.jpg",
    title: "Secret Santa App",
    tags: ["SCSS", "Typescript", "HTML", "Angular", "SQL", "NestJS"],
    projectLink: "https://github.com/DeekshaSareen-code/secret-santa-app",
  },
  {
    imgSrc: "/images/olympic_dashboard_1.png",
    title: "Olympic Analytics Dashboard",
    tags: ["Python", "Matplotlib", "Numpy", "Pandas", "Dash"],
    projectLink: "https://github.com/DeekshaSareen-code/Olympic-Data-Analysis",
  },
  {
    imgSrc: "/images/food_ordering.png",
    title: "Food ordering app",
    tags: ["Javascript", "React", "eCommerce", "Redux"],
    projectLink: "https://github.com/DeekshaSareen-code/my_react",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <WordCard
              key={index}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
