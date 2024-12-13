import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Étudiant en Intelligence Artificielle Fullstack",
    location: "EPSI Paris",
    description:
      "J'ai étudié divers domaines, notamment le développement logiciel orienté objet, l'intelligence artificielle et les technologies web avancées.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Développeur Full Stack (Stage)",
    location: "Préfecture Agadir",
    description:
      "Développement d'une application de gestion des plaintes en temps réel avec une interface intuitive et des fonctionnalités avancées de suivi.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Développeur Full Stack (Freelance)",
    location: "Remote",
    description:
      "Création de solutions web avec des technologies comme React, Django et Spring Boot, en intégrant des fonctionnalités avancées d'IA et de gestion de données.",
    icon: React.createElement(FaReact),
    date: "2023 - présent",
  },
] as const;

export const projectsData = [
  {
    title: "Application de Gestion des Plaintes",
    description:
      "Développée pour la Préfecture d'Agadir, cette application permet de gérer les plaintes en temps réel avec une interface utilisateur intuitive et des API intégrées.",
    tags: ["React", "Laravel", "API"],
    imageUrl: "/Mockup-Ticketing.png", 
  },
  {
    title: "Chatbot Intelligent",
    description:
      "Conçu avec Flutter et Dart, ce chatbot utilise des algorithmes d'IA pour fournir des réponses contextuelles et améliorer l'interaction utilisateur.",
    tags: ["Flutter", "Dart", "IA"],
    imageUrl: "/phone.jpg", 
  },
  {
    title: "Application de Gestion d'Albums Musicaux",
    description:
      "Une application Full Stack combinant Django pour le backend et React pour une interface utilisateur intuitive.",
    tags: ["Django", "React", "Full Stack"],
    imageUrl: "/hello.jpeg", 
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Django",
  "Spring Boot",
  "Laravel",
  "Python",
  "Java",
  "Flutter",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "NoSQL",
  "Firebase",
  "AWS",
  "Figma",
  "Adobe Creative Cloud",
  "Redux",
  "SCSS",
  "Bootstrap",
] as const;
