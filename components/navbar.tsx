"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const hiddenPaths = ["/login"];

  if (hiddenPaths.includes(pathname)) {
    return null; // Hide the navbar
  }

  const linkColor = "text-white";

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50 py-4">
      <div className="max-w-screen-lg mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8 uppercase text-lg font-semibold">
          <Link href="/" className={`${linkColor} hover:text-green-400`}>
            Hjem
          </Link>
          <Link
            href="/blomsterbod"
            className={`${linkColor} hover:text-green-400`}
          >
            Blomsterbod
          </Link>
          <Link
            href="/historien"
            className={`${linkColor} hover:text-green-400`}
          >
            Historien
          </Link>
          <Link href="/kontakt" className={`${linkColor} hover:text-green-400`}>
            Kontakt
          </Link>
          <Link href="/login" className={`${linkColor} hover:text-green-400`}>
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 text-center">
          <div className="flex flex-col space-y-4 uppercase text-lg font-semibold">
            <Link
              href="/"
              className="text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Hjem
            </Link>
            <Link
              href="/blomsterbod"
              className="text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Blomsterbod
            </Link>
            <Link
              href="/historien"
              className="text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Historien
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              href="/login"
              className="text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
