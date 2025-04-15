"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative">
      {/* Background image with proper sizing */}
      <div className="relative w-full flex-1 max-w-lg aspect-square">
        <Image
          src="/assets/404.png"
          fill
          alt="404 Error Illustration"
          loading="lazy"
          className="object-contain"
        />
      </div>

      {/* Error message */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 text-center max-w-md px-4">
          The page you're looking for doesn't seem to exist or has been moved.
        </p>

        {/* Home button with improved styling */}
        <Link href="/">
          <Button className="text-white font-bold bg-primary hover:bg-primary/90 flex items-center gap-2 text-base py-6 px-6 rounded-lg shadow-md transition-all hover:shadow-lg">
            <span>Return to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
