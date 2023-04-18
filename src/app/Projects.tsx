import React from "react";
import { FaStar } from "react-icons/fa";
import Card from "../ui/Card";
import autom from "../assets/autom.png";
import horizon from "../assets/horizon-banner.png";
import miniBnB from "../assets/minibnb.vercel.app_.webp";
import hoobank from "../assets/hoobank.png";

const projects = [
  {
    id: 1,
    title: "MiniBnB",
    imgUrl: miniBnB,
    details: "MiniBnb ia a minimalistic clone of the popular Airbnb website ",
    live: "https://minibnb.vercel.app/",
    github: "https://github.com/codekennML/MiniBnb",
    tech: [
      {
        id: 1,
        name: "NextJS",
        background: "gray-100",
        text: "gray-700",
      },
      {
        id: 2,
        name: "Zustand",
        background: "purple-100",
        text: "purple-600",
      },
      {
        id: 3,
        name: "Typescript",
        background: "blue-100",
        text: "blue-700",
      },

      {
        id: 4,
        name: "MongoDB",
        background: "green-100",
        text: "green-600",
      },
    ],
  },

  {
    id: 2,
    title: "Autom",
    imgUrl: autom,
    details:
      "Autom is a responsive landing page for a work automation platform. Built with  HTML, CSS3 & Javascript",
    github: "https://github.com/codekennML/autom",
    live: "https://codekennml.github.io/autom/",
    tech: [
      {
        id: 1,
        name: "HTML",
        background: "blue-100",
        text: "blue-900",
      },
      {
        id: 2,
        name: "CSS3",
        background: "blue-200",
        text: "blue-600",
      },
      {
        id: 3,
        name: "GSAP",
        background: "blue-200",
        text: "blue-600",
      },
    ],
  },

  {
    id: 3,
    title: "NextGenPay",
    imgUrl: hoobank,
    details:
      "Landing page for a Next Generation Payment platform built with Tailwindcss & ReactJS",
    live: "https://next-gen-pay.vercel.app/",
    github: "https://github.com/codekennML/NextGenPay",
    tech: [
      {
        id: 1,
        name: "ReactJS",
        background: "blue-200",
        text: "blue-600",
      },
      {
        id: 2,
        name: "TailwindCSS",
        background: "blue-200",
        text: "blue-600",
      },
    ],
  },

  {
    id: 4,
    title: "Hotel Horizon",
    imgUrl: horizon,
    details:
      "Website for  Horizon apartments, a fictional  apartment rental outfit. Built with ReactJS and TailwindCSS ",
    live: "https://horizon-tawny.vercel.app/",
    github: "https://github.com/codekennML/horizon",
    tech: [
      {
        id: 1,
        name: "ReactJS",
        background: "blue-100",
        text: "blue-700",
      },
      {
        id: 1,
        name: "TailwindCSS",
        background: "blue-100",
        text: "blue-700",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className=" " id="projects">
      <div className="flex ">
        <h2 className="font-bold text-primary text-[1.2rem] tracking-wide ">
          All Creative works
        </h2>
        <p className="text-amber-300 filter grayscale-[85%] brightness-100">
          <FaStar size={10} />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 mt-6">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              details={project.details}
              tech={project.tech}
              live={project.live}
              github={project.github}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
