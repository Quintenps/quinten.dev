import Image from "next/image";
import { headers } from "next/headers";

export const runtime = 'edge';

export default async function Home() {
  const headersList = await headers();
  const cfCountry = headersList.get("cf-ipcountry") || "Unknown";

  const clients = [
    {
      name: "ASML",
      year: "2024-Present",
      logo: "/clients/asml.jpeg"
    },
    {
      name: "OnlyOnce",
      year: "2024-2025",
      logo: "/clients/onlyonce.png"
    },
    {
      name: "BKR",
      year: "2022-2023",
      logo: "/clients/bkr.webp"
    },
    {
      name: "Conclusion",
      year: "2020-2022",
      logo: "/clients/conclusion.jpg"
    },
    {
      name: "Itonomy",
      year: "2019-2020",
      logo: "/clients/itonomy.jpeg"
    },
  ];

  const certifications = [
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

  const tools = [
    { category: "Cloud", items: ["CloudFlare", "AWS", "Azure", "DigitalOcean"] },
    { category: "Serverless", items: ["AWS Lambda", "Azure Functions", "Cloudflare Workers"] },
    { category: "CI/CD", items: ["Bamboo", "GitHub Actions", "Bitbucket", "GitLab CI", "Azure DevOps"] },
    { category: "Containers", items: ["Docker", "Kubernetes", "Traefik"] },
    { category: "IaC", items: ["Terraform", "CloudFormation", "GitOps"] },
    { category: "Languages", items: ["Python", "Bash", ".NET", "Java", "Go", "TypeScript"] },
    { category: "Frameworks", items: ["React", "Angular", "Next.js"] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Hero Section */}
        <section className="py-12 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800">
              <Image
                src="/quinten.jpg"
                alt="Quinten Peels"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-1 text-2xl font-bold leading-tight uppercase tracking-tight font-mono">
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Quinten Peels
                </span>
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                DevOps Engineer specializing in building scalable cloud infrastructure,
                automating deployments, and optimizing CI/CD pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-slate-200 dark:border-slate-800 py-12 animate-fade-in-up animation-delay-100">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 font-mono">
            About
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            I&apos;m a DevOps Engineer with {new Date().getFullYear() - 2019}+ years of experience, bringing a unique full-stack development background that bridges the gap between software engineering and operations. My expertise spans .NET, React, and AWS, with a current focus on GitOps (IaC), Kubernetes, CI/CD pipelines, and Python automation.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            My development background means I actually understand what devs need from their infrastructure. I build automation and deployment workflows that make teams&apos; lives easier, not harder.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Outside of work, I&apos;m usually checking out new tech on Hacker News, cooking, powerlifting, or enjoy driving (or cleaning!) my Seat Leon.
          </p>
        </section>

        {/* Clients Section */}
        <section id="work" className="border-t border-slate-200 dark:border-slate-800 py-12 animate-fade-in-up animation-delay-200">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 font-mono">
            Experience
          </h2>
          <div className="space-y-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 border-l-2 border-slate-300 dark:border-slate-800 pl-3 transition-all hover:border-blue-500 dark:hover:border-indigo-500 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{client.name}</h3>
                    <span className="text-xs text-slate-500 ml-3 shrink-0 font-mono">{client.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="border-t border-slate-200 dark:border-slate-800 py-12 animate-fade-in-up animation-delay-600">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 font-mono">
            Certifications
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${700 + index * 50}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-1">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-mono mt-0.5">
                    {cert.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="border-t border-slate-200 dark:border-slate-800 py-12 animate-fade-in-up animation-delay-800">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 font-mono">
            Tools & Technologies
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${900 + index * 50}ms` }}
              >
                <h3 className="mb-2 text-xs font-semibold text-slate-900 dark:text-slate-100 font-mono">{tool.category}</h3>
                <ul className="space-y-0.5">
                  {tool.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 py-6 animate-fade-in animation-delay-1200">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-xs text-slate-500 font-mono">
                © {new Date().getFullYear()} Quinten Peels.
              </p>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Served from Cloudflare Pages ({cfCountry})
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/quintenpeels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-indigo-400 font-mono"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/quintenps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-indigo-400 font-mono"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
