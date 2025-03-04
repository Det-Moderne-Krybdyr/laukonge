import Image from "next/image";
import { ContactForm } from "@/components/form";

export default function Kontakt() {
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
      <div className="h-[20px] bg-[#f3f4f6]"></div>;
      {/* Right side - Contact Form */}
      <div className="">
        <ContactForm />
      </div>
      ;<div className="h-[80px] bg-[#f3f4f6]"></div>
    </div>
  );
}
