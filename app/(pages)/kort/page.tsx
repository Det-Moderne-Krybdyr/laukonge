import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FindVej() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 gap-6 max-w-screen-lg mx-auto">
      {/* Left side - Contact Info */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-md">
        <h2 className="text-3xl font-bold mb-3">Find vej</h2>
        <p className="text-gray-600 mb-4">
          Se vores placering og planlæg din rute.
        </p>
        <Image
          src="/bod_vinter.png"
          alt="Kontakt os"
          width={400}
          height={250}
          className="rounded-lg shadow-md mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.7807262055144!2d12.049829094133324!3d55.409724948647245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652ed95bf37f883%3A0x6e806fbca987a167!2sKonge%20Lau!5e1!3m2!1sda!2sdk!4v1740077691857!5m2!1sda!2sdk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
}
