import React from "react";
import YourSVGComponent from "../assets/Reactlogo";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <section className="container h-full p-10 flex justify-center">
      <div className="block rounded-lg shadow-lg bg-secondary md:w-6/12 ">
        <div className="px-4 md:px-0  ">
          <div className="md:mx-6 ">
            <div className="flex justify-center pt-3 ">
              <YourSVGComponent />
            </div>
            <form>
              <p className="mb-4 text-2xl">Please Sign Up</p>
              <div className="flex flex-col items-center ">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                  required
                ></input>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                  required
                ></input>{" "}
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Last Name"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                  required
                ></input>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email address"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                  required
                ></input>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                  required
                ></input>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                  required
                ></input>
              </div>

              <div className="w-full mb-12 pb-1 pt-1 text-center">
                <button
                  className=" bg-gradient-to-r from-primary to-accent lg:w-8/12 text-transparent mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out  focus:outline-none focus:ring-0 "
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Already have an account?</p>
              <div>
                <Link
                  to="/login"
                  className="inline-block w-24 rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignUpPage;
