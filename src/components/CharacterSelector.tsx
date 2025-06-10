import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaClock, FaProjectDiagram, FaTools } from "react-icons/fa";

interface Character {
  name: string;
  role: string;
  languages: string[];
  experience: string;
  specializations: string[];
  keySkills: string[];
  notableProject?: string;
  equipment: string;
  image: string;
}

const characters: Character[] = [
  {
    name: "Technical Solutions",
    role: "Bridge between technical and non-technical experts.",
    languages: ["English", "French", "German", "Dutch"],
    experience: "2 Years",
    specializations: [
      "API creation & debugging",
      "Strategic Technical Advisory",
      "Sales Consultation",
    ],
    keySkills: ["ELK Stack", "SQL-Based Analytics", "Python, JS, Node.js"],
    notableProject: "AddTech @Criteo",
    equipment: "Grit, Tenacious, Technical Jargon",
    image: "/images/ts.png",
  },
  {
    name: "Translator",
    role: "Enable you, your team and your customer to break the language barrier.",
    languages: ["English", "French", "German", "Dutch"],
    experience: "5 Years",
    specializations: ["Legal", "Technical", "Literary"],
    keySkills: [
      "Research & Terminology Management",
      "Cultural Adaptation",
      "Tight Deadlines",
      "Event Accompaniment",
    ],
    notableProject: "SCC (Berlin Marathon)",
    equipment:
      "Versatile Knowledge, Cultural Understanding, Human-Centric Approach",
    image: "/images/translator.png",
  },
  {
    name: "Web Developer",
    role: "Build into reality what you see in your dreams.",
    languages: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
      "Git",
      "HTML",
      "CSS",
      "Python",
    ],
    experience: "3 Years",
    specializations: ["Websites", "Web Applications"],
    keySkills: ["Technical Design", "User Research", "RESTful APIs"],
    equipment: "Driven, Creative, Passionate",
    image: "/images/webdev.png",
  },
  {
    name: "Customer Experience",
    role: "Enable your customers to make their experience uniquely good.",
    languages: ["English", "French", "German", "Dutch"],
    experience: "5 Years",
    specializations: [
      "Customer Journey",
      "Complaint Management",
      "Feedback Gathering",
      "Team Lead",
    ],
    keySkills: ["Shopify", "Jira", "Zendesk"],
    notableProject: "Taxfix",
    equipment: "Diplomacy, Patience, Empathy",
    image: "/images/cx.png",
  },
];

const CharacterSelector: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const count = characters.length;
  const char = characters[index];
  const rotateAngle = (i: number) => (360 / count) * i;

  const openModal = (idx: number) => {
    setIndex(idx);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl relative">
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 focus:outline-none"
          onClick={() => setIndex((idx) => (idx - 1 + count) % count)}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 focus:outline-none"
          onClick={() => setIndex((idx) => (idx + 1) % count)}
        >
          <FiChevronRight size={24} />
        </button>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-12 text-center">
          PICK YOUR PLAYER
        </h1>

        <div className="flex flex-col items-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] perspective pointer-events-none">
            <motion.div
              animate={{ rotateY: rotateAngle(-index) }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full h-full transform-style-preserve-3d pointer-events-none"
            >
              {characters.map((c, i) => (
                <div
                  key={c.name}
                  className="absolute inset-0 flex flex-col items-center justify-center backface-hidden"
                  style={{
                    transform: `rotateY(${rotateAngle(
                      i
                    )}deg) translateZ(300px)`,
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-48 lg:h-48 object-contain cursor-pointer pointer-events-auto"
                    onClick={() => openModal(i)}
                  />
                  <span className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                    {c.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Modal Dialog */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-2xl w-full max-w-screen-md lg:max-w-screen-lg grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8 items-start lg:items-center">
              {/* Image Section */}
              <div className="flex justify-center items-center">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-full lg:h-auto object-contain"
                />
              </div>

              {/* Details Section */}
              <div className="space-y-6 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b border-gray-600 pb-2">
                  {char.name}
                </h2>
                <div>
                  <h3 className="uppercase text-sm text-gray-400">Role</h3>
                  <p className="text-base">{char.role}</p>
                </div>
                <div>
                  <h3 className="uppercase text-sm text-gray-400">Languages</h3>
                  <p className="text-base">{char.languages.join(", ")}</p>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2 text-gray-400" />
                  <span>{char.experience}</span>
                </div>
                <div>
                  <h3 className="uppercase text-sm text-gray-400">
                    Specializations
                  </h3>
                  <p className="text-base">{char.specializations.join(", ")}</p>
                </div>
                <div>
                  <h3 className="uppercase text-sm text-gray-400">
                    Key Skills
                  </h3>
                  <ul className="list-disc list-inside text-base">
                    {char.keySkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                {char.notableProject && (
                  <div className="flex items-center">
                    <FaProjectDiagram className="mr-2 text-gray-400" />
                    <span>{char.notableProject}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <FaTools className="mr-2 text-gray-400" />
                  <span>{char.equipment}</span>
                </div>
                <button
                  className="mt-6 w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-base sm:text-lg"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterSelector;
