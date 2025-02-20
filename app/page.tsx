import Navbar from "../components/navbar";
import { Button } from "@/components/ui/button";
import { FocusCards } from "../components/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero_bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-7xl font-extrabold leading-tight uppercase">Gartneri Lau Konge</h1>
          <p className="mt-4 text-xl max-w-xl mx-auto">Blomster i Konge Kvalitet</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="/kort">
              <Button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 text-lg shadow-lg rounded-full">
                Find vej
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button className="bg-white text-green-700 hover:bg-gray-200 px-6 py-3 text-lg shadow-lg rounded-full">
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <FocusCards />
      </section>
    </div>
  );
}
