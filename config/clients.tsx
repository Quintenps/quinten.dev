import { Client } from "@/app/types";

export const clients: Client[] = [
  {
    companyName: "mstack",
    companyLogo: "/clients/mstack.png",
    current: true,
    role: "IT Consultant",
    description: "Working as a consultant at various companies. mstack is a company that focusses on the Microsoft stack.",
    start_date: "",
    end_date: "",
    tech_tags: ["dotnet", "devops", "Azure", "Angular", "Kubernetes"]
  },
  {
    companyName: "OnlyOnce",
    companyLogo: "/clients/onlyonce.png",
    current: true,
    role: "Lead Software engineer",
    description: "Helping my dad with a SaaS startup. I mostly try to focus on the software development but often also try to give advice or my opinion on functionality or design.",
    start_date: "",
    end_date: "",
    tech_tags: ["dotnet", "react", "postgres", "Github", "AWS"]
  },
  {
    companyName: "Cohesion",
    companyLogo: "/clients/cohesion.jpg",
    current: false,
    role: "IT Consultant",
    description: "Working as a consultant at various companies. Cohesion has various consultants such as infra, Java and .NET.",
    start_date: "2022",
    end_date: "2024",
    tech_tags: ["dotnet", "Azure DevOps", "MSSQL"]
  },
  {
    companyName: "Conclusion",
    companyLogo: "/clients/conclusion.jpg",
    current: false,
    role: "Software engineer",
    description: "My first job after graduation. I mainly developed AWS .NET Lambda, AWS CDK and wrote front-end React applications.",
    start_date: "2020",
    end_date: "2022",
    tech_tags: ["dotnet", "AWS", "Lambda", "IaC", "react"]
  },
  {
    companyName: "Itonomy",
    companyLogo: "/clients/itonomy.jpeg",
    current: false,
    role: "Graduation internship",
    description: "For Itonomy, as my graduation internship, I created a feature based deployment system using Kubernetes and Magento2.",
    start_date: "2019",
    end_date: "2020",
    tech_tags: ["Kubernetes", "Magento2", "Percona", "Nginx"]
  },
  {
    companyName: "CargoSnap",
    companyLogo: "/clients/cargosnap.png",
    current: false,
    role: "Software engineer",
    description: "My sidejob during my study. I helped with backend software written in PHP (Laravel).",
    start_date: "2018",
    end_date: "2018",
    tech_tags: ["Laravel", "MySQL", "MVC"]
  },
  {
    companyName: "Experius",
    companyLogo: "/clients/experius.png",
    current: false,
    role: "Internship",
    description: "During my internship at Experius I was responsible for creating a Magento 2 module that tracked visitors shopping experience and behaviour. This module stored anonimized metadata in ElasticSearch.",
    start_date: "2017",
    end_date: "2018",
    tech_tags: [""]
  },
];
