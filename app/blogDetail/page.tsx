import PageHeader from "@/app/components/PageHeader";
import Image from "next/image";
import Sidebar from "../components/sidebar/Sidebar";

export default function BlogDetails() {
  return (
    <div className="w-full bg-white">
      <PageHeader title='Blog Details' currentPage='Blog Details' />

      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Main Blog Image */}
            <div className="relative aspect-video w-full mb-6">
              <Image 
                src="/blog1.png" 
                alt="Blog Header" 
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Image 
                  src="/blog1.png" 
                  alt="Date" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-gray-600 text-sm">March 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Image 
                  src="/Admin.png" 
                  alt="Author" 
                  width={267} 
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
            </div>

            {/* Blog Content */}
            <article className="prose max-w-none">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                10 Reasons To Do A Digital Detox Challenge
              </h1>

              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Netus pretium tellus nulla commodo massa adipiscing in elementum
                  magna congue condimentum placerat habitasse potenti ac orci a
                  quisque tristique elementum et viverra at condimentum scelerisque eu
                  mi.
                </p>

                <p className="leading-relaxed">
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
                  varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
                  per a aptent interdum purus feugiat.
                </p>

                {/* Quote Block */}
                <blockquote className="bg-[#FF9F0D] p-6 lg:p-8 rounded-lg my-8">
                  <div className="flex gap-4 items-start">
                    <Image 
                      src="/blogdetails3.png" 
                      alt="Quote" 
                      width={48} 
                      height={48}
                      className="w-12 h-12 flex-shrink-0"
                    />
                    <p className="text-white text-lg font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </blockquote>

                {/* Two Column Content */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 my-8">
                  <div className="text-gray-600">
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.
                    </p>
                  </div>
                  <div className="relative aspect-video">
                    <Image 
                      src="/blogdetails2.png" 
                      alt="Blog Content" 
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="relative w-full h-[60px] mt-8">
                  <Image 
                    src="/blogdetails4.png" 
                    alt="Tags" 
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Comments Section */}
                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Comments - 03</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="flex gap-4 p-4 border rounded-lg">
                        <Image 
                          src={`/comment${index}.png`} 
                          alt={`Comment ${index}`} 
                          width={60} 
                          height={60}
                          className="rounded-full w-12 h-12 lg:w-16 lg:h-16"
                        />
                        <div>
                          <h3 className="font-bold">John Doe</h3>
                          <p className="text-gray-600">Great article! Thanks for sharing.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Comment Form */}
                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Post a Comment</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none"
                      />
                    </div>
                    <textarea
                      placeholder="Write a Comment"
                      rows={6}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none"
                    />
                    <button className="bg-[#FF9F0D] text-white px-8 py-3 rounded-lg hover:bg-[#e88d00] transition-colors">
                      Post Comment
                    </button>
                  </form>
                </section>
              </div>
            </article>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Search Bar */}
            <div className="flex">
              <input
                type="text"
                placeholder="Search Your Keyword"
                className="flex-1 p-3 bg-gray-100 rounded-l-lg focus:outline-none"
              />
              <button className="bg-[#FF9F0D] px-6 py-3 rounded-r-lg hover:bg-[#e88d00] transition-colors">
                <Image 
                  src="/searchicon.png" 
                  alt="Search" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* Chef Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src="/chef.png" 
                alt="Chef" 
                fill
                className="object-cover rounded-lg"
              />

            </div>
            <div className="flex">
              <Sidebar />
            </div>

            {/* Recent Posts */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
