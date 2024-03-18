"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Developed a dynamic personal portfolio website to showcase skills and projects, offering a modern and interactive web-based resume",
    image: "/portfolio.png",
    tag: ["All", "NextJs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Car Hub",
    description:
      "Developed an online platform for buying used cars with advanced filtering options for a seamless browsing experience",
    image: "/carshub.png",
    tag: ["All", "NextJs"],

    gitUrl: "https://github.com/pallavigoyal2099/car-showcase",
    previewUrl: "https://car-showcase-iota-five.vercel.app/ ",
  },
  {
    id: 3,
    title: "Crypto viewer",
    description:
      "Developed a comprehensive website for tracking and visualizing cryptocurrency/exchanges details, featuring multiple filters and interactive charts for user-friendly exploration",
    image: "/crypto.png",
    tag: ["All", "ReactJs"],
    gitUrl:
      "https://github.com/pallavigoyal2099/crypto-viewer?tab=readme-ov-file",
    previewUrl:
      "https://react-crypto-356i7q663-pallavigoyal2099s-projects.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description:
      "Developed an intuitive e-commerce website for seamless online shopping experiences",
    image: "/ecom.png",
    tag: ["All", "AngularJs"],
    gitUrl: "https://github.com/pallavigoyal2099/ecommerce-with-angular",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    description:
      "Designed and implemented a Progressive Web App (PWA) for a classic Tic-Tac-Toe game, ensuring an engaging and accessible experience across devices",
    image: "/tictac.png",
    tag: ["All", "AngularJs"],
    gitUrl: "https://github.com/pallavigoyal2099/tic-tac-toe-using-nebular",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Photo Wall",
    description:
      "Experience endless visual inspiration with our dynamic photo wall app & built-in search functionality. Save your favorites with wishlist feature and find them later with ease.",
    image: "/photowall.png",
    tag: ["All", "ReactJs"],
    gitUrl: "https://github.com/pallavigoyal2099/photo-gallery",
    previewUrl: "https://photo-gallery-nu-ruddy.vercel.app/",
  },
  {
    id: 7,
    title: "Tasl Tracker",
    description:
      "Efficiently manage tasks and deadlines with our intuitive task tracker app, designed to streamline your productivity and keep you organized on the go",
    image: "/tasktracker.png",
    tag: ["All", "ReactJs"],
    gitUrl: "https://github.com/pallavigoyal2099/taskrtracker",
    previewUrl: "",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ReactJs"
          isSelected={tag === "ReactJs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AngularJs"
          isSelected={tag === "AngularJs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJs"
          isSelected={tag === "NextJs"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
