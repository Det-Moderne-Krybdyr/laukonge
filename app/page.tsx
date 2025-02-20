import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FocusCardsDemo } from "./components/card";
import { Navbar } from "./components/menubar";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-green-700 text-white shadow-md">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Gartner Lau Konge</h1>
        </div>
        <Navbar></Navbar>
      </header>

      {/* Cards Section with Hover Effect */}
      <section className="py-20">
        <FocusCardsDemo />
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-green-100 text-center">
        <h3 className="text-3xl font-bold text-green-700">Kontakt</h3>
        <p className="mt-4">Har du spørgsmål? Kontakt os her.</p>
        <Button className="mt-4 bg-green-700 hover:bg-green-600 shadow-lg">Kontakt os</Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-green-700 text-white shadow-md">
        <p>&copy; {new Date().getFullYear()} Gartner Lau Konge. Alle rettigheder forbeholdes.</p>
      </footer>
    </div>
  );
}
