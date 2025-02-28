import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default async function Blomsterbod() {
  const res = await fetch(
    "https://strapi.laukonge.dk/api/historiens?populate=image",
    {
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // Disable caching to get fresh data
    }
  );

  const { data } = await res.json();

  // Transform Strapi data to fit StickyScroll component with multiple images
  const content = data.map((item: any) => ({
    title: item.title,
    description: item.body
      .map((block: any) =>
        block.children.map((child: any) => child.text).join(" ")
      )
      .join(" "),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {item.image?.url ? (
          <Image
            src={`https://strapi.laukonge.dk${item.image.url}`}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt={item.title}
          />
        ) : null}
      </div>
    ),
  }));

  return (
    <div className="relative w-full bg-[#f3f4f6]">

      {/* Background Image Section with Gradient Fade */}
      <div className="relative w-full min-h-[450px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/violer.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 w-full h-[120px] bg-gradient-to-b from-transparent to-[#f3f4f6]"></div>

        <h1 className="relative z-10 text-5xl font-bold text-center">
          Historien om Laukonge's Gartneri
        </h1>
      </div>

      <div className="h-[20px] bg-[#f3f4f6]"></div>
      <div className="relative -mt-15 max-w-screen-lg mx-auto px-4 md:px-8 lg:px-12">
        <StickyScroll content={content} />
      </div>

      {/* Bottom Spacer with Matching Background */}
      <div className="h-[80px] bg-[#f3f4f6]"></div>
    </div>
  );
}
