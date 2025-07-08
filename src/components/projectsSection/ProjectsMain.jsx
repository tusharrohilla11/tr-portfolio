import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Ai Course Generator",
    year: "Mar2025",
    align: "right",
    image: "../../public/images/ai-course.png",
    link: "https://ai-course-generator-beta.vercel.app/",
  },
  {
    name: "portfolio",
    year: "Jan2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "e-commerce",
    year: "Dec2024",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Flappy Bird Game",
    year: "May2024",
    align: "left",
    image: "../../public/images/flappy-bird.png",
    link: "https://flappy-bird-game-orpin.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;