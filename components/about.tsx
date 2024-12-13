"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 bg-[#1e2a47] text-white p-10 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading className="text-indigo-400">À propos de moi</SectionHeading>
      
      <motion.p
        className="mb-6 text-lg sm:text-xl font-light text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        Diplômé en{" "}
        <span className="font-medium text-gray-200">développement logiciel</span>, j'ai choisi de me spécialiser dans la création d'applications modernes et efficaces. Mon parcours comprend divers projets{" "}
        <span className="font-medium text-gray-200">full-stack</span>, qui m'ont permis de perfectionner mes compétences dans des technologies de pointe.
      </motion.p>

      <motion.p
        className="text-lg sm:text-xl font-light text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Mon stack principal inclut{" "}
        <span className="font-medium text-gray-200">React, Vue.js, Laravel, Spring Boot, et MongoDB</span>. Je suis également compétent dans{" "}
        <span className="font-medium text-gray-200">TypeScript, SCSS, et Docker</span>. Passionné par l'apprentissage continu, je suis toujours en quête de nouvelles compétences et technologies. Actuellement, je suis à la recherche d'une{" "}
        <span className="font-medium text-gray-200">alternance</span> en tant que développeur logiciel.
      </motion.p>

      <motion.div
        className="mt-8 p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <span className="italic text-gray-400">En dehors du code</span>, j'aime explorer de nouveaux domaines tels que{" "}
        <span className="font-medium text-indigo-300">l'histoire, la philosophie</span> et d'autres disciplines enrichissantes. Actuellement, je prends plaisir à apprendre à jouer de la guitare.
      </motion.div>
    </motion.section>
  );
}
