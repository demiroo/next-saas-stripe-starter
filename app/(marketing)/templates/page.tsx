import { Metadata } from "next";
import { BlogHeaderLayout } from "@/components/content/blog-header-layout";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata: Metadata = {
  title: "Templates – SitePilot",
  description: "Durchsuchen Sie unsere Vorlagen für verschiedene Anwendungen.",
};

export default function TemplatesPage() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="container mx-auto py-6 md:pt-10">
          <h1 className="text-4xl font-bold">Templates</h1>
          <p className="mt-4">Hier finden Sie eine Auswahl an Vorlagen für verschiedene Anwendungen.</p>
          {/* Füge hier weitere Inhalte oder Komponenten hinzu */}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
