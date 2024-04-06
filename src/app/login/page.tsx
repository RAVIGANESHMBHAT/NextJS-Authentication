"use client";

import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isValidData, setIsValidData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/login", user);
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-4">{loading ? "Processing..." : "Login"}</h1>
      <hr />

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
      <div className="relative flex item-center">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="password"
          className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 text-black"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          <span className="text-black mb-4">
            {showPassword ? "Hide" : "Show"}
          </span>
        </button>
      </div>

      <button
        disabled={!isValidData}
        onClick={onLogin}
        className={`p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600 ${
          isValidData ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        }`}
      >
        Log In
      </button>

      <Link href="/signup">Visit Sign Up Page</Link>
      <Toaster />
    </div>
  );
};

export default Login;
