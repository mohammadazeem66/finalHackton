'use client'
import React, { useState } from 'react';
import '@fontsource/montserrat'
import Swal from 'sweetalert2'

const LoginSection = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function signIn() {
        if (email == "admin@gmail.com" && password == "admin789") {
            Swal.fire({
                title: 'Admin!',
                text: 'Admin Logged in Successfully Done',
                icon: 'success',
                confirmButtonText: 'Next'
            }).then(() => {
                window.location.href = "Dashboard"
            })
        }
        else{
            Swal.fire({
                title: 'Error',
                text: 'Enter correct email or password',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }
    }
    return (
        <section className="text-gray-800 bg-blue-400 body-font h-screen bg-gradient-to-r from-indigo-100 via-blue-500 to-blue-800">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-3xl text-gray-900">
              Welcome To Attendance App
            </h1>
            <p className="leading-relaxed mt-4 font-semibold">Attend today, and achieve tomorrow.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-500 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            {/* Add gradient background classes above */}
            <h2 className="text-white text-lg font-medium title-font mb-5"> Admin Log In</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-transparent border-2 border-white py-2 px-8 focus:outline-none hover:bg-white hover:text-indigo-600 rounded text-lg" onClick={signIn}>
              Log In
            </button>
          </div>
        </div>
      </section>
    );
};

export default LoginSection;
