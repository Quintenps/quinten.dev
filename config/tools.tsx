import { Tool } from "@/app/types";

export const tools: Tool[] = [
  {
    name: ".NET Core",
    image: "/tools/dotnet.png",
    usage: "My primary language for backend development",
  },
  {
    name: "React",
    image: "/tools/react.png",
    usage:
      "Combined with NextJS with Typescript is my usual frontend choice",
  },
  {
    name: "Docker",
    image: "/tools/docker.png",
    usage: "Easiest way to deploy software, containerized software ftw",
  },
  {
    name: "CloudFlare",
    image: "/tools/cloudflare.png",
    usage: "CDN, DNS, WAF and Pages, using them since 2014",
  },
  {
    name: "Github",
    image: "/tools/github.png",
    usage: "Version control & Github Actions",
  },
  {
    name: "AWS",
    image: "/tools/aws.png",
    usage: "My preferred Cloud platform for enterprise software",
  },
];

export const computers: Tool[] = [
  { name: "Windows", image: null, usage: "Gaming desktop" },
  { name: 'MacBook Pro (16-inch, Nov 2023, Three T)', image: null, usage: "Laptop" },
  { name: "iPhone 15 pro", image: null, usage: "Phone" },
  { name: "Optiplex 3050 Micro", image: null, usage: "Homeserver" },
  { name: "Hetzner VPS", image: null, usage: "Datacenter (KVM) server" },
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
    usage: "Id: 4J1051E"
  },
  {
    name: "Github Foundations",
    image: "/certifications/github-foundation.png",
    usage: "Credly id: 6f00bb83-2ea6-4025-bbb3-ea561fb87921"
  }
];
