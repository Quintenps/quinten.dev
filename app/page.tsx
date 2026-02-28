import Image from "next/image";

export default async function Home() {

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
      name: "RoyalFloraHolland",
      year: "2020-2022",
      logo: "/clients/royalfloraholland.jpeg"
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
                <span className="bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
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
          <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            I&apos;m a DevOps Engineer with {new Date().getFullYear() - 2019}+ years of experience, bringing a unique full-stack development background that bridges the gap between software engineering and operations. My expertise spans .NET, React, and AWS, with a current focus on GitOps (IaC), Kubernetes, CI/CD pipelines, and Python automation.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            My development background means I actually understand what devs need from their infrastructure. I build automation and deployment workflows that make teams&apos; lives easier, not harder.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Outside of work, I&apos;m usually checking out new tech on Hacker News, Gaming, Cooking (Eating), Powerlifting, or enjoy driving (or cleaning!) my Seat Leon.
          </p>
        </section>

        {/* Clients Section */}
        <section id="work" className="border-t border-slate-200 dark:border-slate-800 py-12 animate-fade-in-up animation-delay-200">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 font-mono">
            Experience
          </h2>
          <div className="space-y-4">
            {clients.map((client, index) => {
              const isActive = client.year.includes("Present");
              return (
                <div
                  key={index}
                  className={`group flex items-center gap-3 border-l-2 pl-3 transition-all duration-200 animate-fade-in-up rounded-r-md
                    ${isActive
                      ? "border-emerald-500 dark:border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30"
                      : "border-slate-300 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                    }`}
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white dark:bg-slate-900 shadow-sm transition-all duration-200
                    ${isActive
                      ? "border-emerald-200 dark:border-emerald-800 shadow-emerald-100 dark:shadow-emerald-950"
                      : "border-slate-200 dark:border-slate-800 group-hover:shadow-md"
                    }`}>
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
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{client.name}</h3>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                            current
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 ml-3 shrink-0 font-mono">{client.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
                className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:border-slate-300 dark:hover:border-slate-700 animate-fade-in-up"
                style={{ animationDelay: `${350 + index * 30}ms` }}
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
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:border-slate-300 dark:hover:border-slate-700 animate-fade-in-up"
                style={{ animationDelay: `${450 + index * 30}ms` }}
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
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/quintenpeels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 dark:text-slate-400 transition-all duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 font-mono"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/quintenps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 dark:text-slate-400 transition-all duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 font-mono"
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
