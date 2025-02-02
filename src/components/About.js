import React from "react";

const aboutItems = [
  {
    label: "Years of experience",
    number: 3,
  },
  {
    label: "Degrees Done",
    number: 2,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb- md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Deeksha Sareen, a Full Stack Developer with a
            passion for building scalable, high-performance web applications.
            With expertise in Angular, RxJS, NestJS, and MongoDB, I craft
            seamless user experiences and robust backend systems. I thrive on
            solving complex problems, optimizing performance, and continuously
            learning new technologies to drive innovation. Let’s build something
            amazing together!
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400"> {label}</p>
              </div>
            ))}
            <img
              src="./images/logo.jpg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
