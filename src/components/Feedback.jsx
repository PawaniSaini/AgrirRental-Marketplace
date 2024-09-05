'use client';

import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = { name, email, message };

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });

      if (response.ok) {
        setStatus('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="mx-auto max-w-lg p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="name">Name:</label>
          <input
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-green-500"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">Email:</label>
          <input
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-green-500"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="message">Message:</label>
          <textarea
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-green-500"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
        {status && <p className="mt-4 text-center text-sm text-red-600">{status}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
