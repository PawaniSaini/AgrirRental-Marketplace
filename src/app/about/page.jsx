'use client'

import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const About = () => {
  return (
<>
<Navbar/>
<div className="relative bg-yellow-500 overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="relative text-center">
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
        About Us
      </h1>
      <p className="mt-4 text-xl text-blue-200">
        Discover who we are, what drives us, and how we’re transforming the world of agriculture.
      </p>
    </div>
    <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
      <svg
        className="relative -translate-x-1/2 -translate-y-1/2 rotate-[30deg] -z-10 max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[30deg]"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#b6a7a72b-4079-4d3b-a3e4-6d7475dddf0e)"
          fillOpacity=".3"
          d="M317.71 423.24L159.66 294.5l-66.95-18.68L84.6 92.97 215.3 0 510.82 82.43l146.9 223.61L317.71 423.24z"
        />
        <defs>
          <linearGradient
            id="b6a7a72b-4079-4d3b-a3e4-6d7475dddf0e"
            x1="0"
            x2="1"
            y1="1"
            y2="0"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>

    
    <div className="max-w-6xl mx-auto p-6 font-sans">
     

      <div className="flex flex-col md:flex-row py-12 items-center mb-12">
        <img 
          src="https://i.pinimg.com/564x/b5/96/b1/b596b14da67b46c10a6058dbf6a41934.jpg  " 
          alt="Our Mission" 
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6" 
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
          At FarmRent Hub, our mission is to revolutionize the way farmers access and utilize agricultural equipment. We are committed to making high-quality farming tools and machinery more accessible and affordable for everyone, regardless of the size of their operation. By fostering a community-driven platform, we empower farmers to overcome the challenges of modern agriculture through collaboration and resource-sharing.

We believe that innovation, sustainability, and community are the cornerstones of a thriving agricultural sector. Our mission is to support farmers in their journey toward more efficient, productive, and sustainable farming practices. Whether you're a small-scale farmer or manage a large agricultural enterprise, we are here to help you grow and succeed.          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <img 
          src="https://i.pinimg.com/564x/1c/e8/ad/1ce8ad66be07190a1bdc3d6e82e11699.jpg" 
          alt="What We Offer" 
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6" 
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-lg">
            <li><strong>Extensive Selection:</strong> A wide range of equipment suited for various farming activities.</li>
            <li><strong>Quality and Reliability:</strong> All our products and services meet the highest standards.</li>
            <li><strong>Customer Support:</strong> Our team is always ready to assist with any inquiries or issues.</li>
          </ul>
        </div>
      </div>


    </div>
    <Footer/>
    </>
    
  )
};
 
export default About;
