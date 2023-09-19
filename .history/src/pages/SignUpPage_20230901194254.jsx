import React from "react";
import YourSVGComponent from "../assets/Reactlogo";
import { Link } from "react-router-dom";
import SignUpForm from "../compoments/SignUpForm";

function SignUpPage() {
  return (
    <section className="container h-full p-10 flex justify-center mx-auto">
      <div className="block rounded-lg shadow-lg bg-secondary md:w-6/12 ">
          <div className="md:mx-6 px-4 md:px-0">
            <div className="flex justify-center pt-3 ">
              <YourSVGComponent />
            </div>
            <SignUpForm />
            <div className="flex items-center justify-between pb-6 md:justify-around">
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
    </section>
  );
}
export default SignUpPage;
