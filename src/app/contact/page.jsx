
'use client';


import React from 'react';
import toast from 'react-hot-toast';


const ContactPage = () => {

  
  return (
    <div className='bg-cover   ' style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUMUDq5Wjlirxy7dFwjsmczSggyNKWq8wfg&s')` }}>
    <div className="font-sans text-base text-gray-900 sm:px-10">
      <div className="text-base  text-gray-900">
        <div className="relative mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          
          <div className="absolute inset-0  bg-cover overflow-hidden">
           
          </div>
          <div className="relative z-10 mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 className="mb-4 text-3xl font-black text-black sm:text-5xl xl:text-6xl">
              Contact Us
            </h1>
            <div className="text-lg sm:text-xl xl:text-xl">
              <div className="text-black">
                <p className="mb-4">
                  We’re here to assist you with all your agricultural equipment needs. Get in touch with us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Details Section */}
      <div className="relative mx-auto  flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg bg-white bg-opacity-90">
        <form className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="email">
              Your e-mail:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-green-500 focus:ring"
              id="email"
              type="email"
              required=""
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="subject">
              Subject:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-green-500 focus:ring"
              id="subject"
              type="subject"
              required=""
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="message">
              Message:
            </label>
            <textarea
              className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-green-500 focus:ring"
              id="message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="flex items-center">
            <div className="flex-1" />
            <button
              className="rounded-xl bg-green-600 px-4 py-3 text-center font-bold text-white hover:bg-green-700"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-10 bg-yellow-500 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div className="">
            <p className="mb-4 font-medium border-b pb-2">CONTACT US</p>
            <p className="mb-4">Name:Pawani Saini</p>
          
            <p className="mb-4">
              Email:
              <a href="mailto:support@farmrenthub.com" className="font-semibold underline">
                pawanisaini19@gmail.com
              </a>
            </p>
            <p className="mb-4">
              Phone:
              <a href="tel:+460103232322" className="font-semibold underline">
                +91 7317569019
              </a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
            <div className="mt-6">
            <p className="mb-4 font-medium border-b pb-2">Follow Us</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/farmrenthub" target="_blank" rel="noopener noreferrer">
                <img
                  src=" https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png"
                  alt="Facebook"
                  width={46}
                  height={46}
                  className="hover:opacity-75"
                />
              </a>
              <a href="https://twitter.com/farmrenthub" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_640.png"
                  alt="Twitter"
                  width={46}
                  height={46}
                  className="hover:opacity-75"
                />
              </a>
              <a href="https://instagram.com/farmrenthub" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"
                  alt="Instagram"
                  width={46}
                  height={46}
                  className="hover:opacity-75"
                />
              </a>
              <a href="https://linkedin.com/company/farmrenthub" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7BQSQmxYeUaUq4W56K4TJtWzNLCdV11weQ&s"
                  alt="LinkedIn"
                  width={46}
                  height={46}
                  className="hover:opacity-75"
                />
              </a>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-8">
            
            
          </div>
        </div>
      </div>

          </div>
        </div>
        </div>
        
      
  );
};

export default ContactPage;

    