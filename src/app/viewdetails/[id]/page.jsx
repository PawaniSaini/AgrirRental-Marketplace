'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const EquipmentDetail = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  console.log(id);
  
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/equipment/getbyid/${id}`)
        .then((response) => {
          console.log(response.data);
          
          setEquipment(response.data);
        }).catch((err) => {
          console.log(err);
          toast.error('Failed to load equipment details');
        });
    }
  }, [id]);

  if (!equipment) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto max-w-5xl py-8 px-4">
      <h1 className="text-4xl font-bold text-green-700">{equipment.name}</h1>
      <div className="my-6">
        <img src={equipment.image} alt={equipment.name} className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-xl text-gray-800">{equipment.description}</p>
      <p className="text-xl font-semibold text-yellow-500">{equipment.priceperday} per day</p>
      <p className="text-sm text-gray-500">
        Rental Duration: {new Date(equipment.rentalduration).toDateString()}
      </p>
      {/* Add more details as needed */}
    </div>
  );
};

export default EquipmentDetail;
