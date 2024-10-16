import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurFade from "../ui/blur-fade";

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // Daten werden jede Stunde neu validiert
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
   <BlurFade>
   <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <Link
          href="https://twitter.com/miickasmt/status/1810465801649938857"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span>
          
          <span className="hidden md:flex">Entdecken Sie&nbsp;</span> unser
          Website-Builder-Tool auf <Icons.twitter className="ml-2 size-3.5" />
        </Link>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Wir entwickeln Ihre Traum-Website mit{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            SitePilot
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Nutzen Sie unsere leistungsstarken Tools, um Ihre eigene Website
          schnell und einfach zu erstellen. Egal, ob Sie ein Unternehmen starten
          oder Ihre Online-Präsenz verbessern möchten, wir haben die Lösungen
          für Sie.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link href="/pricing" prefetch={true}>
            <RainbowButton className="w-full gap-2">
              <span>Preise ansehen</span>
              <Icons.arrowRight className="size-4" />
            </RainbowButton>
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <RainbowButton className="w-full gap-2">
              <Icons.gitHub className="mr-2 size-4" />
              <p>
                <span className="hidden sm:inline-block">Star auf</span> GitHub{" "}
                <span className="font-semibold">{nFormatter(stars)}</span>
              </p>
            </RainbowButton>
          </Link>
        </div>
      </div>
    </section>
    </BlurFade>
  );
}
