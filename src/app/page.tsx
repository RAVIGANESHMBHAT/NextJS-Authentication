import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center my-4 flex-col gap-4">
      <h1 className="text-2xl font-bold">NextJS Authentication</h1>
      <p>
        The landing page for the application that implements the authentication
        system.
      </p>

      <Image src="/auth.jpeg" alt="auth-image" width={500} height={500} />
    </div>
  );
}
