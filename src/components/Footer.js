import React from "react";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/DeekshaSareen-code",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deeksha-sareen-00a47b199/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/deeks25",
  },
  {
    label: "Medium",
    href: "https://medium.com/@deekshasareen97",
  },
];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            {/* <ButtonPrimary
              href="mailto:deekshasareen97@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes={undefined}
            /> */}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              src="./images/logo.jpg"
              width={40}
              height={40}
              alt="logo"
            ></img>
          </a>
          <p className="text-sm text-zinc-500 reveal-up">
            &copy;2025 | Made with
            {/* // <span className="text-zinc-200"> Deeksha Sareen</span> */}
            <span className="material-symbols-rounded mt-3 pl-2 text-[12px]">
              {"favorite"}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
