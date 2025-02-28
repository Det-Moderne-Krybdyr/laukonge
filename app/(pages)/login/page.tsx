import { LoginForm } from "@/components/form";

export default function Kontakt() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 gap-6 max-w-screen-lg mx-auto">
      {/* Right side - Contact Form */}
      <div className="w-full md:w-1/2 max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
