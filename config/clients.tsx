import { Client } from "@/app/types";

export const clients: Client[] = [
  {
    companyName: "ASML",
    companyLogo: "/clients/asml.jpeg",
    current: true,
    role: "IT Consultant",
    description: "TBC",
    start_date: "",
    end_date: "",
    tech_tags: ["java", "devops", "Azure", "Kubernetes"]
  },
  {
    companyName: "OnlyOnce",
    companyLogo: "/clients/onlyonce.png",
    current: true,
    role: "Lead Software Engineer",
    description: "A SaaS startup I'm running with my dad. I'm responsible for developing the backend software, which are dotnet API's running in containers on a EC2 instance with Docker and Traefik. Also setting up CI/CD pipelines with Github actions and monitoring the software with CloudWatch and custom alerts.",
    start_date: "",
    end_date: "",
    tech_tags: ["dotnet", "react", "postgres", "Docker", "Github", "DevOps", "AWS"]
  },
  {
    companyName: "BKR",
    companyLogo: "/clients/bkr.webp",
    current: false,
    role: "IT Consultant",
    description: "I had the opportunity to help BKR with one of their projects called KYC. The project was way behind deadline. After refactoring a lot of code and finishing the expected functionality, I succesfully managed to guide the service to production. All of the services were dotnet API's or dotnet MVC apps.",
    start_date: "2022",
    end_date: "2023",
    tech_tags: ["dotnet", "Azure DevOps", "Agile/Scrum", "MSSQL"]
  },
  {
    companyName: "Conclusion",
    companyLogo: "/clients/conclusion.jpg",
    current: false,
    role: "Software Engineer",
    description: "My first job after graduation. I worked for RoyalForaHolland (RFH) via Conclusion where I worked in a team writing software for RFH's logistics. Most of the software that I developed were AWS .NET API Lambda and sometimes React applications. Our team developed, deployed and monitored the software ourself.",
    start_date: "2020",
    end_date: "2022",
    tech_tags: ["dotnet", "AWS", "IaC", "AWS CDK", "Lambda", "Agile/Scrum", "Jira", "Azure DevOps", "react"]
  },
  {
    companyName: "Itonomy",
    companyLogo: "/clients/itonomy.jpeg",
    current: false,
    role: "Graduation internship",
    description: "For my graduation internship, I created an isolated feature based deployment system using Kubernetes and Magento2. Often Magento 2 modules would conflict with other functionality. Having an isolated environment would enhance QA when testing new written features.",
    start_date: "2019",
    end_date: "2020",
    tech_tags: ["Kubernetes", "Magento2", "BitBucket", "Agile/Scrum", "Jira", "Percona", "Nginx"]
  },
  {
    companyName: "CargoSnap",
    companyLogo: "/clients/cargosnap.png",
    current: false,
    role: "Sidejob",
    description: "As a sidejob I helped building features for the starup CargoSnap, which was a Laravel MCV application.",
    start_date: "2018",
    end_date: "2018",
    tech_tags: ["Laravel", "MySQL", "Trello", "MVC"]
  },
  {
    companyName: "Experius",
    companyLogo: "/clients/experius.png",
    current: false,
    role: "Internship",
    description: "During my internship at Experius I was responsible for creating a Magento 2 module that tracked visitors shopping experience and behaviour. This module stored anonimized metadata in ElasticSearch.",
    start_date: "2017",
    end_date: "2018",
    tech_tags: ["Magento2", "Jira", "Agile/Scrum", "ElasticSearch"]
  },
];
