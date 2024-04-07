"use client";

import toast, { Toaster } from "react-hot-toast";

import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      if (response.status === 200) {
        toast.success("Logged out successfully.");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Toaster />

      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-800">
          NextJS Authentication
        </h1>
        <p className="max-w-md mb-8 text-gray-600">
          The landing page for the application that implements the
          authentication system.
        </p>

        <button
          onClick={handleLogout}
          className="px-6 py-2 mb-8 text-sm font-medium leading-6 text-white uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          Logout
        </button>

        <div className="relative w-full max-w-lg h-auto overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/auth.jpeg"
            alt="Auth Image"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
