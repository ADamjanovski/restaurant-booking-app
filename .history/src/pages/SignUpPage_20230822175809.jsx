import React from "react";
import YourSVGComponent from "../assets/Reactlogo";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <section className="h-full flex">
      <div className="items-center container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg shadow-lg bg-secondary">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="flex justify-center pt-3 ">
                      <YourSVGComponent />
                    </div>
                    <form>
                      <p className="mb-4">Please Sign Up</p>
                      {/* <!--Username input--> */}
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="First Name"
                        className="mb-4 px-3 py-1 rounded-lg"
                      ></input>{" "}
                      <input
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Last Name"
                        className="mb-4 px-3 py-1 rounded-lg"
                      ></input>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email address"
                        className="mb-4 px-3 py-1 rounded-lg"
                      ></input>
                      {/* <!--Password input--> */}
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="mb-4 px-3 py-1 rounded-lg"
                      ></input>
                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div className="w-full">
                          <button
                            className=" bg-gradient-to-r from-primary to-accent  text-transparent mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                          >
                            Sign Up
                          </button>
                        </div>{" "}
                      </div>
                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <div>
                          <Link
                            to="/login"
                            className="inline-block w-24 rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Log In
                          </Link>
                        </div>{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignUpPage;
