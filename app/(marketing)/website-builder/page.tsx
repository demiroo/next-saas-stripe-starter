import { Metadata } from "next";
import { BlogHeaderLayout } from "@/components/content/blog-header-layout";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata: Metadata = {
  title: "Website-Builder – SitePilot",
  description: "Erstellen Sie Ihre eigene Website mit unserem Website-Builder.",
};

export default function WebsiteBuilderPage() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="container mx-auto py-6">
          <h1 className="text-4xl font-bold">Website-Builder</h1>
          <p className="mt-4">Nutzen Sie unseren Website-Builder, um Ihre eigene Website zu erstellen.</p>
          {/* Füge hier weitere Inhalte oder Komponenten hinzu */}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
