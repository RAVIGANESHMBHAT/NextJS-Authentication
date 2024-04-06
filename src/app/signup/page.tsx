"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isValidData, setIsValidData] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Sign Up successful", response.data);

      router.push("/login");
    } catch (error: any) {
      console.log("Sign up failed");
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, username: e.target.value }))
        }
        placeholder="username"
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 text-black"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
        placeholder="email"
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 text-black"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
        placeholder="password"
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 text-black"
      />

      <button
        disabled={!isValidData}
        onClick={onSignUp}
        className={`p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 ${
          isValidData ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        }`}
      >
        Sign Up
      </button>

      <Link href="/login">Visit Login Page</Link>
    </div>
  );
};

export default SignUp;
