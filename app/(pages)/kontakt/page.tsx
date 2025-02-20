import Image from "next/image";
import { ContactForm } from "@/components/form";

export default function Kontakt() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 gap-6 max-w-screen-lg mx-auto">
      {/* Left side - Contact Info */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-md">
        <h2 className="text-3xl font-bold mb-3">Kontakt os</h2>
        <p className="text-gray-600 mb-4">
          Har du spørgsmål eller brug for hjælp? Udfyld formularen, så vender vi tilbage hurtigst muligt!
        </p>
        <Image
          src="/bod_vinter.png"
          alt="Kontakt os"
          width={400}
          height={250}
          className="rounded-lg shadow-md mx-auto md:mx-0"
        />
      </div>

      {/* Right side - Contact Form */}
      <div className="w-full md:w-1/2 max-w-md">
        <ContactForm />
      </div>
    </div>
  );
}
