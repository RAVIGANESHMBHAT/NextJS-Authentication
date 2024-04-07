import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-semibold text-gray-600">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          The page you&apos;re looking for doesn&apos;t seem to exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
