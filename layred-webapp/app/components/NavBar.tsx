"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animate-fadeInUp", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="font-sans">

      <header className="bg-red-200 text-center text-black py-2 text-sm">
        We're Offering 20% OFF - Today Only!
      </header>


      <section className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center p-4 mx-4 md:mx-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Layred<span className="text-blue-600 text-2xl">.</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-black text-lg font-medium">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
          </nav>

           <div>
            <select className=" rounded-md p-2 text-gray-600 relative left-50">
              <option value="" >
                English
              </option>
              <option value="">China</option>
                </select>
           </div>

          <div className="flex items-center gap-4 text-gray-600 text-xl">
            <AiOutlineSearch />
            <FaUser />
            <FaRegHeart />
            <FaShoppingCart />
          </div>
        </div>


        <div className="absolute top-2/12 -left-6.5 z-10 space-y-6 text-sm text-black [writing-mode:vertical-rl] rotate-180">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>YouTube</span>
        </div>

        <div className="absolute top-2/6 -right-6.5 -translate-y-1/2 z-10 text-sm text-black [writing-mode:vertical-rl]">
          Scroll Down
        </div>


        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src="/img4.webp"
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 z-20 max-w-md text-black">
            <div className="mb-8 text-right space-y-2 text-sm">
              <div className="font-semibold">
                WOMAN <span className="inline-block w-10 h-px bg-black ml-2" />
              </div>
              <div className="text-gray-400">
                SALE <span className="inline-block w-10 h-px bg-gray-300 ml-2" />
              </div>
              <div className="text-gray-300">
                OFFER <span className="inline-block w-10 h-px bg-gray-200 ml-2" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6 fade-in opacity-0">
              Discover And <br /> Dress Up Your <br /> Style
            </h1>

            <button className="px-6 py-3 bg-black text-white text-base font-medium transition hover:bg-gray-800 fade-in opacity-0">
              Shop Collection
            </button>
          </div>
        </section>


        <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10 py-16 relative">

          <div className="w-full md:w-1/2 fade-in opacity-0">
            <Image
              src="/img6.webp"
              alt="Model"
              width={600}
              height={700}
              className="rounded-md hover:scale-105 transition-transform duration-500"
            />
          </div>


          <div className="w-full md:w-1/2 space-y-6 fade-in opacity-0 text-center md:text-left">
            <h2 className="text-6xl font-bold text-black relative bottom-20">Discover Latest Collection</h2>
            <p className="text-black relative bottom-20">
              Explore Our Latest Collection, Where Style Meets Innovation. Shop
              Trendy Fashion, Premium Cosmetics, And Cutting-Edge Electronics Today!
            </p>
            <button className="px-6 py-3 bg-black text-white text-base font-medium hover:bg-gray-800 transition relative bottom-10">
              Shop Collection
            </button>

          <div className="absolute top-64 left-84 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[20%] fade-in opacity-0">
            <div className="relative w-30 h-30 top-6 right-90">
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="black" fontSize="30" fontFamily="bone">
                    <textPath href="#circlePath" startOffset="0%">
                      EXPLORE MORE COLLECTIONS • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/star.png"
                  alt="Star"
                  fill
                  className="object-contain"
                  
                />
              </div>
            </div>
          </div>
          </div>

       
          <div className="absolute bottom-19 right-30 md:right-10 fade-in opacity-0">
            <Image
              src="/img6.webp"
              alt="Small model"
              width={180}
              height={100}
              className="rounded-md hover:scale-105 transition duration-300"
            />
          </div>
        </section>
      </section>


      <style jsx>{`
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0px) !important;
          transition: all 1s ease-out;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
