import { Tool } from "@/app/types";

export const tools: Tool[] = [
  {
    name: ".NET Core",
    image: "/tools/dotnet.png",
    usage: "My personal choice when writing backend software",
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
    usage: "CDN, DNS, WAF and Pages, been using them since 2014",
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
  { name: "Windows", image: null, usage: "Desktop" },
  { name: 'Macbook Pro 16" (2021)', image: null, usage: "Laptop" },
  { name: "Pixel 5", image: null, usage: "Phone" },
  { name: "Optiplex 3050 Micro", image: null, usage: "Homeserver" },
  { name: "Hetzner VPS", image: null, usage: "Datacenter (KVM) server" },
];

export const certifications: Tool[] = [
  {
    name: "AWS Cloud Practitioner",
    image: "/certifications/aws-certified-cloud-practitioner.png",
    usage: "https://aw.certmetrics.com/amazon/public/verification.aspx (Code YMSR0XN19JE11G9R)",
  },
  {
    name: "Junior Angular Developer",
    image: "/certifications/angular.png",
    usage: "https://interstate21.com/certificate/?code=4I172UG"
  },
  {
    name: "Angular Certified Developer",
    image: "/certifications/angular.png",
    usage: "https://interstate21.com/certificate/?code=4J1051E"
  }
];
