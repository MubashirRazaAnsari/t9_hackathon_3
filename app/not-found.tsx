'use client';

import Link from "next/link";
import Image from "next/image";
import PageHeader from './components/PageHeader';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">

      {/* Error Content Section */}
      <section className="p-10 relative bg-white pt-20 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center px-4">
          <h3 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Page cannot be found! We'll have it figured out in no time.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/" className="inline-block">
            <button className="bg-[#FF9F0D] text-white text-lg font-bold px-8 py-3 rounded hover:bg-[#e8890b] transition-colors duration-300 shadow-md hover:shadow-lg">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
} 