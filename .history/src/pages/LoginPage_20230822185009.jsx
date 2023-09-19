import { useState } from "react";

// const LoginPage = () => {
//   const [seeLogin, setSeeLogin] = useState(true);
//   const submitHandler = (event) => {
//     event.prevedDefault();
//     console.log("here");
//   };
//   const changeFormHandler = () => {
//     setSeeLogin((state) => setSeeLogin(!state));
//   };
//   let displayedData = (
//     <div>
//       <h1>Log in Form</h1>
//       <form onSubmit={submitHandler}>
//         <label htmlFor="email">E-mail</label>
//         <input className="bg-white" type="text" name="email" id="email" />
//         <label htmlFor="password">Password</label>
//         <input
//           className="bg-white"
//           type="text"
//           name="password"
//           id="password"
//           minLength="7"
//         />
//         <button type="submit">Log In</button>
//       </form>
//       <button onClick={changeFormHandler}>Sign Up</button>
//     </div>
//   );

//   if (!seeLogin) {
//     displayedData = (
//       <div className="flex justify-center">
//         <div className="bg-primary w-[80%] ">
//           <h1>Sign up Form</h1>
//           <form onSubmit={submitHandler}>
//             <label className="block text-start" htmlFor="first-name">
//               First Name
//             </label>
//             <input
//               className="bg-white"
//               type="text"
//               name="first-name"
//               id="first-name"
//             />
//             <label htmlFor="last-name">Last Name</label>
//             <input
//               className="bg-white"
//               type="text"
//               name="last-name"
//               id="last-name"
//             />
//             <label htmlFor="email">E-mail</label>
//             <input className="bg-white" type="text" name="email" id="email" />
//             <label htmlFor="password">Password</label>
//             <input
//               className="bg-white"
//               type="text"
//               name="password"
//               id="password"
//               minLength="7"
//             />
//             <button type="submit">Sign Up</button>
//           </form>
//           <button onClick={changeFormHandler}>Log In</button>
//         </div>
//       </div>
//     );
//   }

//   return displayedData;
// };

import React from "react";
import YourSVGComponent from "../assets/Reactlogo";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <section className="container h-full p-10 flex justify-center">
      <div className="block rounded-lg shadow-lg bg-secondary md:w-6/12 ">
        <div className="px-4 md:px-0 ">
          <div className="md:mx-6 ">
            {/* <!--Logo--> */}
            <div className="flex justify-center pt-3 ">
              <YourSVGComponent />
            </div>
            <form>
              <p className="mb-4">Please login to your account</p>
              {/* <!--Username input--> */}
              <div className="flex flex-col items-center ">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email address"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                ></input>
                {/* <!--Password input--> */}
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="mb-4 px-3 py-1 rounded-lg lg:w-8/12"
                ></input>
              </div>
              {/* <!--Submit button--> */}
              <div className=" pb-1 pt-1 text-center">
                <div className="w-full">
                  <button
                    className=" bg-gradient-to-r from-primary to-accent lg:w-8/12  text-transparent mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="button"
                  >
                    Log in
                  </button>
                </div>{" "}
                {/* <!--Forgot password link--> */}
              </div>
              {/* <!--Register button--> */}
            </form>
            <div className="mb-12">
              <Link href="#!">Forgot password?</Link>
            </div>

            <div className="flex items-center justify-around pb-6">
              <p className="mb-0 mr-2">Don't have an account?</p>
              <Link
                to="/signUp"
                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginPage;
