"use client";

import React, { useState } from "react";

import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState();

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/me");
      setData(response.data.data._id);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    await axios.get("/api/users/logout");
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>

      <hr />

      <h2>
        {data ? <Link href={`/profile/${data}`}>View Profile - {data}</Link> : "No data"}
      </h2>

      <hr />

      <button
        onClick={getUserDetails}
        className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Get user details
      </button>

      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
