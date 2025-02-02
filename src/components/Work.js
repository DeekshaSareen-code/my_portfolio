import React from "react";
import WordCard from "./WordCard";

const works = [
  {
    imgSrc: "./images/secret_santa_app.jpg",
    title: "Secret Santa App",
    tags: ["SCSS", "Typescript", "HTML", "Angular", "SQL", "NestJS"],
    projectLink: "https://github.com/DeekshaSareen-code/secret-santa-app",
  },
  {
    imgSrc: "./images/olympic_dashboard_1.png",
    title: "Olympic Analytics Dashboard",
    tags: ["Python", "Matplotlib", "Numpy", "Pandas", "Dash"],
    projectLink: "https://github.com/DeekshaSareen-code/Olympic-Data-Analysis",
  },
  {
    imgSrc: "./images/food_ordering.png",
    title: "Food ordering app",
    tags: ["Javascript", "React", "eCommerce", "Redux"],
    projectLink: "https://github.com/DeekshaSareen-code/my_react",
  },
  {
    imgSrc: "./images/cnn_convolution.jpg",
    title: "Fish Data Analysis",
    tags: [
      "Neural Networks",
      "Deep learning",
      "Python",
      "Jupyter Notebook",
      "Tensorflow",
      "Numpy",
    ],
    projectLink: "https://github.com/DeekshaSareen-code/FishDataAnalysis",
  },
  {
    imgSrc: "./images/old_portfolio.png",
    title: "Personal Portfolio (2022)",
    tags: ["Web-design", "Development", "React", "Javascript", "CSS", "Node"],
    projectLink: "https://github.com/DeekshaSareen-code/mydidactictrial",
  },
  {
    imgSrc: "./images/contact_tracer.jpg",
    title: "Covid Contact Tracer",
    tags: ["Java", "Development", "Junit", "SQL"],
    projectLink: "https://github.com/DeekshaSareen-code/covid-contact-tracer",
  },
  {
    imgSrc: "./images/new_portfolio.png",
    title: "Portfolio Website(2025)",
    tags: ["Development", "React", "CSS", "JavaScript"],
    projectLink: "https://github.com/DeekshaSareen-code/my_portfolio",
  },
];
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
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
