import { Metadata } from "next";
import { BlogHeaderLayout } from "@/components/content/blog-header-layout";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata: Metadata = {
  title: "Tools – SitePilot",
  description: "Entdecken Sie nützliche Tools für Ihr Projekt.",
};

export default function ToolsPage() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="container mx-auto py-6">
          <h1 className="text-4xl font-bold">Tools</h1>
          <p className="mt-4">Hier finden Sie eine Sammlung nützlicher Tools für Ihr Projekt.</p>
          {/* Füge hier weitere Inhalte oder Komponenten hinzu */}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
