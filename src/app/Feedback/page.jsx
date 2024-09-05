'use client';

import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';

const Feedback=()=>{
    const FeedbackForm = useFormik({
        initialValues: {
            name: '',
            email:'',
            message: '',
        },
        onSubmit: (values) => {
            console.log(values);

            axios.post('http://localhost:5000/user/authenticate', values)
                .then((response) => {
                    toast.success('Feeback submitted successfully');
                    console.log(response.data);;

                    
                    

                }).catch((err) => {
                    console.log(err);
                    toast.error(err.response.data.message);
                });
        }
    
  });

  return (
    <div className="mx-auto max-w-lg p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Feedback</h2>
      <form onSubmit={FeedbackForm.handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="name">Name:</label>
          <input
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-green-500"
            id="name"
            type="text"
           
            onChange={(e) => name(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">Email:</label>
          <input
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-green-500"
            id="email"
            type="email"
           
            onChange={(e) => email(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="message">Message:</label>
          <textarea
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-green-500"
            id="message"
         
            onChange={(e) => message(e.target.value)}
            required
            rows="4"
          />
        </div>
        <button
          className="w-full rounded-xl bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700"
          type="submit"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
};

// Toast container component to be used at the root of your application
export default Feedback;
