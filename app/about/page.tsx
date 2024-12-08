'use client';

import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import PageHeader from '../components/PageHeader';

// Import images



export default function About() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="About Us"
        currentPage="About" 
      />


      {/* Second Section: Content and Buttons */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center justify-between">
          {/* Left Text */}
          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-sm mb-4 font-medium text-[#FF9F0D] italic flex items-center gap-2">
              About us <span className="w-12 h-[1px] bg-[#FF9F0D] inline-block"></span>
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="inline-flex text-white bg-[#FF9F0D] border-0 py-3 px-6 focus:outline-none hover:bg-[#f59000] rounded text-lg transition-colors">
                Show More
              </button>
              <button className="inline-flex items-center text-white bg-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg transition-colors">
                <IoPlayOutline className="mr-2 text-2xl" />
                Watch video
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="w-full md:w-[35%] flex flex-col space-y-6 mt-10 md:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={'/lemon.png'}
                alt="Lemon dish"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex gap-6">
              <div className="relative w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={'/yougurt.png'}
                  alt="Yogurt dish"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={'/pasta.png'}
                  alt="Pasta dish"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font bg-gray-50">
        <div className="container mx-auto px-5 py-24">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src={'/thirdSection.png'}
              alt="Why Choose Us"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </section>

      {/* Fourth Section: Features */}
      <section className="text-black body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image
                    src={'/Student.png'}
                    alt="Best Chef"
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-center mb-4">BEST CHEF</h2>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image
                    src={'/Coffee.png'}
                    alt="120 Item Food"
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-center mb-4">120 Item Food</h2>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image
                    src={'/Person.png'}
                    alt="Clean Environment"
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-center mb-4">Clean Environment</h2>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 