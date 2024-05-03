import { Client } from "@/app/types";

export const clients: Client[] = [
  {
    companyName: "mstack",
    companyLogo: "/clients/mstack.png",
    current: true,
    role: "IT Consultant",
    description:
      "Working as a consultant at various companies. mstack is a company that focusses on the Microsoft stack.",
  },
  {
    companyName: "OnlyOnce",
    companyLogo: "/clients/onlyonce.png",
    current: true,
    role: "Lead Software engineer",
    description:
      "Helping my dad with a SaaS startup. I mostly try to focus on the software development but often also try to give advice or my opinion on functionality or design.",
  },
  {
    companyName: "Cohesion",
    companyLogo: "/clients/cohesion.jpg",
    current: false,
    role: "IT Consultant",
    description:
      "Working as a consultant at various companies. Cohesion has various consultants such as infra, Java and .NET.",
  },
  {
    companyName: "Conclusion",
    companyLogo: "/clients/conclusion.jpg",
    current: false,
    role: "Software engineer",
    description:
      "My first job after graduation. I mainly developed AWS .NET Lambda, AWS CDK and wrote front-end React applications.",
  },
  {
    companyName: "Itonomy",
    companyLogo: "/clients/itonomy.jpeg",
    current: false,
    role: "Graduation internship",
    description:
      "For Itonomy, as my graduation internship, I created a feature based deployment system using Kubernetes and Magento2.",
  },
  {
    companyName: "CargoSnap",
    companyLogo: "/clients/cargosnap.png",
    current: false,
    role: "Software engineer",
    description:
      "My sidejob during my study. I helped with backend software written in PHP (Laravel).",
  },
  {
    companyName: "Experius",
    companyLogo: "/clients/experius.png",
    current: false,
    role: "Internship",
    description:
      "During my internship at Experius I was responsible for creating a Magento 2 module that tracked visitors shopping experience and behaviour. This module stored anonimized metadata in ElasticSearch.",
  },
];
