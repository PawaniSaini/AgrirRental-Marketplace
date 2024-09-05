'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Product = () => {
  const router = useRouter();
  const [equipmentData, setEquipmentData] = useState([]);

  // Fetch data from backend
  const fetchData = () => {
    axios.get('http://localhost:5000/equipment/getall')
      .then((response) => {
        console.log(response.data);
        setEquipmentData(response.data);
        toast.success('Products loaded successfully');
      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || 'Failed to load products');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to display equipment cards
  const displayEquipments = () => {
    return equipmentData.map(equipment => (
      <div key={equipment._id} className="border rounded-lg shadow-lg p-4 bg-white dark:bg-neutral-800">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src={equipment.image}
            alt=''/>

        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-200">
            {equipment.name}
          </h3>
          {/* <p className="mt-2 text-sm text-gray-700 dark:text-neutral-400">
            {equipment.description}
          </p> */}
          <p className="mt-2 text-sm text-gray-700 dark:text-neutral-400">
            Price: <span className="font-bold text-green-600 dark:text-green-400">{equipment.priceperday} per day</span>
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-neutral-400">
            Rental Duration: 
            <span className="font-bold">{new Date(equipment.startDate).toDateString()}</span>
            <span className="font-bold">{new Date(equipment.enddDate).toDateString()}</span>
          </p>
          <button 
            onClick={() => router.push(`/viewdetails/${equipment._id}`)}
            className="mt-4 inline-block px-4 py-2 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
            href='productdetail'
          >
            View Details
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="mx-auto">
      <div
        className="relative h-80 mx-auto max-w-5xl rounded-b-lg bg-cover bg-no-repeat shadow-lg"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_640.jpg')" }}
      >
        <div className="px-4 pt-8 pb-10">
          <div>
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="/images/n2yIu0Buhpft9wZ6tROzn.png"
              alt="Company Logo"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full bg-cover bg-center bg-no-repeat shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700">
            "Discover Top Agricultural Equipment for Rent"
          </h1>
          <p className="text-xl text-yellow-500">
            Elevate your farming efficiency with our Heavy-Duty Tractor. Designed for robust performance and ease of use, this tractor is perfect for tackling large-scale tasks. Rent it now and experience top-tier farming productivity at competitive rates.
          </p>
        </div>
        {/* Equipment Cards Section */}
        <main className="grid grid-cols-1 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-0">
          {displayEquipments()}
        </main>
      </div>
    </div>
  );
};

export default Product;
