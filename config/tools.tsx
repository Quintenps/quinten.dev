import { Computer, Tool } from "@/app/types";

export const tools: Tool[] = [
  {
    name: "Languages",
    usage: ".NET, Typescript, Python, Java, Bash",
  },
  {
    name: "Frameworks & Libraries",
    usage: "React (NextJS), Angular, ASP.NET, Moq, xUnit, MassTransit, Redis, Swagger, Automapper",
  },
  {
    name: "Cloud",
    usage: "AWS, Azure, DigitalOcean, Hetzner",
  },
  {
    name: "DevOps",
    usage:
      "Bicep, AWS CDK, Bash, Docker, Kubernetes, Github Actions, Azure DevOps",
  },
  {
    name: "Principles, architecture and patterns",
    usage: "SOLID Principles, Clean architecture, Design patterns, microservices, automated testing (unit, regression), CQRS, Agile/Scrum"
  },
  {
    name: "Software",
    usage: "Rider, PyCharm, Intellij, VSCode, Vim, Tableplus, Postman, SonarCloud"
  }
];

export const computers: Computer[] = [
  { name: "Windows", description: "Gaming desktop", image: "/computers/hera.png" },
  { name: "MacBook Pro", description: "Laptop", image: "/computers/poseidon.png" },
  { name: "iPhone 15 Pro", description: "Phone" },
  { name: "Optiplex 3050 Micro", description: "Homeserver", image: "/computers/apollo.png"  },
  { name: "Hetzner VPS", description: "Datacenter (KVM) server", image: "/computers/artemis.png"  },
];

export const certifications: Tool[] = [
  {
    name: "Professional Scrum Master I",
    image: "/certifications/psm1.png",
    usage: "Id: 1084535",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    image: "/certifications/microsoft-certified-associate-badge.svg",
    usage: "Id: A5A5CF7F70FFD263",
  },
  {
    name: "AWS Cloud Practitioner",
    image: "/certifications/aws-certified-cloud-practitioner.png",
    usage: "Id: YMSR0XN19JE11G9R",
  },
  {
    name: "Angular Certified Developer",
    image: "/certifications/angular.png",
    usage: "Id: 4J1051E",
  },
  {
    name: "Github Foundations",
    image: "/certifications/github-foundation.png",
    usage: "Credly id: 6f00bb83-2ea6-4025-bbb3-ea561fb87921",
  },
];
