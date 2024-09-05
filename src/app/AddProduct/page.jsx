'use client';

import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {



  const addProductForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: null,
      priceperday: '',
      startdDate:'',
      endDate:''
    },


    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      axios.post('http://localhost:5000/equipment/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('User Registered Successfully');


        }).catch((err) => {
          console.log(err);
          setSubmitting(false);

        });
    }
  });


  const uploadToCloud = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'uploadfile');
    fd.append('cloud_name', 'djhvt0wsu');
    axios.post('https://api.cloudinary.com/v1_1/djhvt0wsu/image/upload',
      fd,
      {
        headers: { 'Content-type': 'multipart/form-data' }
      })
      .then((response) => {
        const { url } = response.data;
        // console.log(response.data);
        toast.success('Image Uploaded successfully');
        addProductForm.setFieldValue('image', url);

      }).catch((err) => {
        console.log(err);


      });

  }

  return (
    <div
      className="bg-cover bg-center  py-10 px-4"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/873795690/photo/rice-field-in-countryside-thailand-landscape-of-rice-paddy-background-in-the-morning.jpg?s=612x612&w=0&k=20&c=9SN1Q9faYhF2uQLfzKO_JfYsoExDUfLIwtceeGEqLDk=')", // Replace with your actual background image path
      }}
    >

      <div className="container  mx-auto flex justify-end">
        <div className="max-w-lg bg-transparent rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-black mb-6">Add Product</h1>
          <form onSubmit={addProductForm.handleSubmit}>
            {/* Equipment Name */}
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="equipmentName"
              >
                 Name
              </label>
              <input
                type="text"
                id="name"
               
                value={addProductForm.values.name}
                onChange={addProductForm.handleChange}
                className="w-full px-4 py-2 border rounded-lg   focus:outline-none focus:border-green-600"
                placeholder="Enter equipment name"
                required
              />
            </div>


            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-black font-semibold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={addProductForm.values.description}
                onChange={addProductForm.handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                placeholder="Enter equipment description"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label
                className="block text-black font-semibold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={uploadToCloud}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                required
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label
                className="block text-black font-semibold mb-2"
                htmlFor="price"
              >
                Price per Day
              </label>
              <input
                type="number/text"
                id="priceperday"

                value={addProductForm.values.priceperday}
                onChange={addProductForm.handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                placeholder="Enter rental price per day"
                required='Rs'
              />
            </div>

            {/* Rental Duration */}
            <div className="mb-4">
              <label
                className="block text-black font-semibold mb-2"
                htmlFor="startDate"
              >
                Rental Duration
              </label>
              <div className="flex space-x-4">
                <input
                  type="date"
                  id="startDate"
              
                  value={addProductForm.values.startDate}
                  onChange={addProductForm.handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                  required
                />
                <input
                  type="date"
                  id="endDate"
                  
                  value={addProductForm.values.endDate}
                  onChange={addProductForm.handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                  required
                />
              </div>
            </div>


            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
                href="http://localhost:3000/product"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddProduct;
