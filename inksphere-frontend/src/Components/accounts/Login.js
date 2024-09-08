import React from 'react';
import Container from '../common/Container';
import { logo ,loginImage } from '../../utils/image'; // Adjust the path as needed

const Login = () => {
  return (
    <Container>
      <div className="flex min-h-screen ">
        {/* Left hand side */}
        <div className="w-full md:w-1/2 flex sm:flex-col items-center justify-center bg-gray-100">
        <img src={logo} alt="logo" className="h-[7rem] object-contain mb-10" />
          <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
            </p>
          </div>
        </div>

        {/* Right hand side */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100">
          <img src={loginImage} alt="logo" className=" h-full w-full object-contain mt-20" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
