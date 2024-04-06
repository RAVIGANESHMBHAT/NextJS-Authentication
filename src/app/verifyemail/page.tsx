"use client";

import React, { useState } from "react";

import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const verifyEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", {
        token: searchParams.get("token"),
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">Verify Email</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <button
        onClick={verifyEmail}
        disabled={verified}
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
      >
        Click here
      </button>

      {verified && (
        <div>
          <h2>Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
