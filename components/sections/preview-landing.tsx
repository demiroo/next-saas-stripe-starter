import Image from "next/image";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import ShineBorder from "../ui/shine-border";
import BlurFade from "../ui/blur-fade";

export default function PreviewLanding() {
  return (
   <BlurFade> <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <ShineBorder  className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
             <Image
              className="size-full object-cover object-center dark:opacity-85 dark:invert"
              src="/_static/blog/blog-post-3.jpg"
              alt="preview landing"
              width={2000}
              height={1000}
              priority={true}
            />
         
        </ShineBorder>
      </MaxWidthWrapper>
    </div>
    </BlurFade>
  );
}
