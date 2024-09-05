'use client';

import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {


  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/user/authenticate', values)
        .then((response) => {
          toast.success('Login success');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));

          const { role } = response.data;

          if (role === 'admin') {

            router.push('/AddProduct');
          } else {
            router.push('/')
          }

        }).catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
    },
    validationSchema: LoginSchema
  }
  );

  return (
    <div className=''>
      <div className="mx-auto ml-96 flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">

        <div className="text-green-500 mx-4 flex justify-center flex-col">
          <h2 className="mb-2 text-3xl text-center font-bold">Log In</h2>
          <Link href="/signup" className="mb-4 block font-bold text-gray-500 text-center">
            Don't have an account? Sign up
          </Link>
          <form onSubmit={loginForm.handleSubmit}
            className="mb-4  flex flex-col">
            <p className="mb-1 font-medium text-green-500">Email</p>
            <div className="focus-within:border-green-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="email"
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            {
              loginForm.touched.email && (

                <p className="text-xs text-red-600 mt-2" id="email-error">
                  {loginForm.errors.email}
                </p>
              )}

            <div className="mb-4 flex flex-col">
              <p className="mb-1 font-medium text-green-500">Password</p>
              <div className="focus-within:border-green-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                <input
                  type="password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="******"
                />
              </div>
              {
                loginForm.touched.password && (

                  <p className="text-xs text-red-600 mt-2" id="email-error">
                    {loginForm.errors.password}
                  </p>
                )}
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="remember-me" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

            </div>
            <button
              type="submit"
              className="hover:shadow-green-600/40 rounded-xl bg-gradient-to-r from-yellow-700 to-green-600 px-7 py-2 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
              Log In
            </button>
          </form>
        </div>

        <div className="max-w-md  rounded-3xl bg-gradient-to-t from-yellow-700 via-green-600 to-yellow-500 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
          <p className="mb-20 text-3xl font-bold tracking-wider">FarmRent Hub</p>
          <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
            Welcome back to <br />
            FarmRent Hub
          </p>
          <p className="mb-28 leading-relaxed text-gray-200">
            Log in to manage your agricultural equipment or find the tools you need to boost your farming productivity.
          </p>
          <div className="bg-green-600/80 rounded-2xl px-4 py-8">
            <p className="mb-3 text-gray-200">
              Manage your rentals and grow your farming business with ease.
            </p>
            <div className="">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Lv18nUd1Myt2QlGpD1vNDojIiG2QyrAH1g&s"
                  alt="Sachin Kale"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium">Dnyaneshwar Bodke</strong>
                  <span className="text-xs text-gray-200">
                    Experienced Organic Farmer
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;
