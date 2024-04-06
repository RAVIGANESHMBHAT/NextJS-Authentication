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
    <div className="flex justify-center my-4 flex-col gap-4">
      <h1 className="text-2xl font-bold">NextJS Authentication</h1>
      <p>
        The landing page for the application that implements the authentication
        system.
      </p>

      <button
        onClick={handleLogout}
        className="bg-blue-500 w-15 rounded text-center"
      >
        Logout
      </button>

      <Image src="/auth.jpeg" alt="auth-image" width={500} height={500} />

      <Toaster />
    </div>
  );
}
