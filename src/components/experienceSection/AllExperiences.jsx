import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";



const experiences = [
  {
    job: "Technical Intern",
    company: "DMRC",
    date: "Dec 2023 - Jan 2024",
    image: "/images/dmrc.jpeg",
    responsibilities: [
      // "Implementing reusable components.",
      "Worked with SCADA systems and optical fiber communication networks.",
      "Learned about core networking layers and real-time monitoring systems.",
      "Studied automation and fault-tolerant communication for safe metro operations.",
    ],
  },
  {
    job: "SDE Intern",
    company: "Bonami Software",
    date: "Jun 2025 - Present",
    image: "/images/bonami-software.jpeg",
    responsibilities: [
      "Built and enhanced web applications using frontend and backend technologies.",
      "Developed responsive interfaces and integrated APIs.",
      // "Managed databases and collaborated with cross-functional teams.",
      "Contributed to full-stack development and performance optimization.",
    ],
  },
];
const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

// export default AllExperiences;
// const experiences = [
//   {
//     job: "Technical Intern",
//     company: "DMRC",
//     date: "Dec 2023 - Jan 2024",
//     image: "/images/dmrc.jpeg",
//     responsibilities: [
//       ""Implementing reusable components.",
//       "Worked with SCADA systems and optical fiber communication networks.",
//       "Learned about core networking layers and real-time monitoring systems.",
//       "Studied automation and fault-tolerant communication for safe metro operations.",
//     ],
//   },
//   {
//     job: "SDE Intern",
//     company: "Bonami Software",
//     date: "Jun 2025 - Present",
//     image: "/images/bonami-software.jpeg",
//     responsibilities: [
//       "Built and enhanced web applications using frontend and backend technologies.",
//       "Developed responsive interfaces and integrated APIs.",
//       "Managed databases and collaborated with cross-functional teams.",
//       "Contributed to full-stack development and performance optimization.",
//     ],
//   },
// ];
