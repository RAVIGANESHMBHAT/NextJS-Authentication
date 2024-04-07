import Link from "next/link"; // Import the Link component
import React from "react";

const ProfileDetails = ({ params }: { params: any }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Profile Page</h1>

        <div className="flex justify-center">
          <hr className="w-full border-t border-gray-300" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Profile ID</h2>
          <p className="p-3 mt-2 bg-green-500 rounded-lg text-white font-medium">
            {params.id}
          </p>
        </div>

        {/* Back to Profile Page Button */}
        <Link
          href="/profile"
          className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          Back to Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
