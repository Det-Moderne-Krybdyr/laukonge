import BlomsterbodGrid from "@/components/grid";


export default async function Blomsterbod() {
  const res = await fetch("https://strapi.laukonge.dk/api/blomsterbods", {
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // Disable caching to get fresh data
  });

  const { data } = await res.json();

  // Ensure there's at least one entry
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>No data found</h1>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-[#f3f4f6]">
      {/* Background Image Section with Gradient Fade */}
      <div className="relative w-full min-h-[450px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bod_vinter.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 w-full h-[120px] bg-gradient-to-b from-transparent to-[#f3f4f6]"></div>

        <h1 className="relative z-10 text-5xl font-bold text-center">
          Nuværende udvalg
        </h1>
      </div>

      <div className="h-[20px] bg-[#f3f4f6]"></div>

      <BlomsterbodGrid />

      {/* Bottom Spacer with Matching Background */}
      <div className="h-[80px] bg-[#f3f4f6]"></div>
    </div>
  );
}
