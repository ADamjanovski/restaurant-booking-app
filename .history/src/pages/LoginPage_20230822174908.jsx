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
    <section className="h-full flex">
      <div className="items-center container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg shadow-lg bg-secondary">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}

                    {/* <!--Logo--> */}
                    <div className="flex justify-center pt-3 ">
                      <YourSVGComponent />
                    </div>
                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}

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
                            Log in
                          </button>
                        </div>{" "}
                        {/* <!--Forgot password link--> */}
                        <Link href="#!">Forgot password?</Link>
                      </div>
                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginPage;
