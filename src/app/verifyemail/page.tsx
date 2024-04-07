"use client";

import React, { Suspense, useState } from "react";

import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  console.log({ token });

  const verifyEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", {
        token,
      });
      if (response.status === 200) {
        setVerified(true);
        setError("");
      } else {
        setError(response.statusText);
      }
    } catch (error: any) {
      setError(error.response.data.message);
      console.log(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center space-y-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Verify Email
        </h1>

        {error && (
          <div className="text-red-600 bg-red-100 border border-red-400 p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          onClick={verifyEmail}
          disabled={verified}
          className={`w-full px-4 py-2 font-medium text-white rounded-lg ${
            verified ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          Click here to verify
        </button>

        {verified && (
          <div className="text-green-600 bg-green-100 border border-green-400 p-3 rounded-lg">
            <h2 className="font-medium">Verified Successfully!</h2>
            <Link href="/login" className="text-blue-500 hover:underline">
              Proceed to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<p className="flex justify-center items-center min-h-screen">Loading...</p>}>
      <VerifyEmail />
    </Suspense>
  );
}
