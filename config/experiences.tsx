import { Experience } from "@/app/types";

export const experiences: Experience[] = [
  {
    companyName: "ASML",
    companyLogo: "/clients/asml.jpeg",
    current: true,
    role: "IT Consultant",
    description: "Part of a systems integration team responsible for integrating software from multiple development teams into ASML's analytics platform. Integration processes are largely automated using Bamboo pipelines, developed via Bamboo's Java SDK (Infrastructure as Code). Additional scripting is handled using Python and Bash",
    start_date: "2024",
    end_date: "",
    tech_tags: ["Java", "Python", "Bash", "DevOps", "CI/CD", "IaC", "Agile/SAFe", "Automated testing", "Jira", "Confluence", "Bamboo"]
  },
  {
    companyName: "OnlyOnce",
    companyLogo: "/clients/onlyonce.png",
    current: true,
    role: "Lead Software Engineer",
    description: "Co-founder of a SaaS startup, where I lead development. The platform runs on .NET APIs hosted in Docker containers on AWS EC2, managed with Traefik. I also maintain the CI/CD pipelines using GitHub Actions and monitor system health via CloudWatch and custom alerting mechanisms.",
    start_date: "",
    end_date: "",
    tech_tags: ["dotnet", "React", "Postgres", "Docker", "Github", "DevOps", "AWS"]
  },
  {
    companyName: "BKR",
    companyLogo: "/clients/bkr.webp",
    current: false,
    role: "IT Consultant",
    description: "Contributed to the KYC project at BKR, which was heavily delayed. By refactoring critical parts of the codebase and completing outstanding features, I successfully helped bring the application to production. The system consists of .NET APIs and MVC applications.",
    start_date: "2022",
    end_date: "2023",
    tech_tags: ["dotnet", "Azure DevOps", "Agile/Scrum", "MSSQL"]
  },
  {
    companyName: "Conclusion",
    companyLogo: "/clients/conclusion.jpg",
    current: false,
    role: "Software Engineer",
    description: "Started my career at Conclusion, where I was part of a team delivering software for Royal FloraHolland's logistics processes. We developed serverless .NET APIs on AWS Lambda and React frontends. Our responsibilities included the full development lifecycle: building, deploying, and monitoring our services.",
    start_date: "2020",
    end_date: "2022",
    tech_tags: ["dotnet", "AWS", "IaC", "AWS CDK", "Lambda", "Agile/Scrum", "Jira", "Azure DevOps", "React"]
  },
  {
    companyName: "Itonomy",
    companyLogo: "/clients/itonomy.jpeg",
    current: false,
    role: "Graduation internship",
    description: "Developed a feature-based deployment system using Kubernetes and Magento 2 as part of my graduation project. The goal was to create isolated environments to prevent conflicts between Magento modules and improve quality assurance during testing.",
    start_date: "2019",
    end_date: "2020",
    tech_tags: ["Kubernetes", "Magento2", "BitBucket", "Agile/Scrum", "Jira", "Percona", "Nginx"]
  },
  {
    companyName: "CargoSnap",
    companyLogo: "/clients/cargosnap.png",
    current: false,
    role: "Sidejob",
    description: "Contributed to feature development for the CargoSnap startup, working on a Laravel MVC application as a part-time developer.",
    start_date: "2018",
    end_date: "2018",
    tech_tags: ["Laravel", "MySQL", "Kanban", "MVC"]
  },
  {
    companyName: "Experius",
    companyLogo: "/clients/experius.png",
    current: false,
    role: "Internship",
    description: "During my internship, I developed a Magento 2 module designed to track user behavior and shopping activity. The module collected anonymized metadata and stored it in Elasticsearch for analysis.",
    start_date: "2017",
    end_date: "2018",
    tech_tags: ["Magento2", "Jira", "Agile/Scrum", "ElasticSearch"]
  },
];
