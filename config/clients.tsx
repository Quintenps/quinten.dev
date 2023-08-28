import { Client } from "@/app/types";

export const clients: Client[] = [
  {
    companyName: "Cohesion",
    companyLogo: "/clients/cohesion.jpg",
    current: true,
    role: "IT Consultant",
    description:
      "Working at various companies as a consultant. Mainly focussed on .NET, React and AWS.",
  },
  {
    companyName: "OnlyOnce",
    companyLogo: "/clients/onlyonce.png",
    current: true,
    role: "Lead software engineer",
    description:
      "Helping my dad with a SaaS startup. I mostly try to focus on the software development but often also try to give advice on functionality or design",
  },
  {
    companyName: "Conclusion",
    companyLogo: "/clients/conclusion.jpg",
    current: false,
    role: "Software engineer",
    description:
      "My first job after graduation. I mainly developed .NET Lambda API's, wrote front-end React applications and deploy them on AWS.",
  },
  {
    companyName: "Itonomy",
    companyLogo: "/clients/itonomy.jpeg",
    current: false,
    role: "Graduation internship",
    description:
      "For Itonomy, as my graduation internship, I created a feature based deployment system using Kubernetes and Magento2. The company struggled with QA because of the heavy technical dependencies modules have in the Magento 2 system.",
  },
  {
    companyName: "CargoSnap",
    companyLogo: "/clients/cargosnap.png",
    current: false,
    role: "Developer",
    description:
      "My sidejob during my study. Cargosnap is a digital solution that enables you to perform visual cargo inspections and work collaboratively in real-time in one single place. I helped with backend programming (PHP, Laravel) and frontend",
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
