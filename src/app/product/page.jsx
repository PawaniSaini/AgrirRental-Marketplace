'use client'
import axios from 'axios';


import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Product = () => {

  const router = useRouter();
  const [equipmentData, setEquipmentData] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:5000/equipment/getall')
      .then((response) => {
        console.log(response.data);
        setEquipmentData(response.data);
        toast.success('Added Product successfully');

      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  

// Inside the displayEquipments function
const displayEquipments = () => {
  return equipmentData.map(equipment => (
    <article className="relative" key={equipment._id}>
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={equipment.image}
          alt={equipment.equipmentname}
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a 
              href={`/equipment/${equipment._id}`} 
              title={equipment.equipmentname}
            >
              {equipment.equipmentname}
            </a>
          </h3>
          <div className="mt-2">
            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
              {equipment.description}
            </span>
            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
              {equipment.priceperday} per day
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500 dark:text-neutral-500">
            {new Date(equipment.rentalduration).toDateString()}
          </span>
        </div>
      </div>
    </article>
  ));
};

  return (

      <div className="mx-auto  ">
      <div
        className="relative h-80 mx-auto max-w-5xl rounded-b-lg bg-cover   bg-no-repeat shadow-lg"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_640.jpg')" }}
      >
        <div className="px-4 pt-8 pb-10">
          <div className="">
            
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="/images/n2yIu0Buhpft9wZ6tROzn.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="relative h-screen w-full  rounded-b-lg bg-cover bg-center  bg-no-repeat shadow-lg"
        style={{ backgroundImage: "url()" }}
      >

      <div className=" flex flex-col items-start justify-center   sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
        <div className="max-w-[100%]  text-center">
          <h1 className="text-4xl  font-bold text-green-700">"Discover Top Agricultural Equipment for Rent"</h1>
          <p className=" text-xl text-yellow-500 ">
            Elevate your farming efficiency with our Heavy-Duty Tractor. Designed for robust performance and ease of use, this tractor is perfect for tackling large-scale tasks. Rent it now and experience top-tier farming productivity at competitive rates.


          </p>
        </div>
        <div className="">
       


        </div>
      </div>
      {/* card 1 */}

      <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
        {displayEquipments()}
      
      </main> 
      </div>
      </div>
   


  )
}

export default Product