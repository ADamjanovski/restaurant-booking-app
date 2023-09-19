import { useState } from "react";

const LoginPage = () => {
  const [seeLogin, setSeeLogin] = useState(true);
  const submitHandler = (event) => {
    event.prevedDefault();
    console.log("here");
  };
  const changeFormHandler = () => {
    setSeeLogin((state) => setSeeLogin(!state));
  };
  let displayedData = (
    <div>
      <h1>Log in Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">E-mail</label>
        <input className="bg-white" type="text" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input className="bg-white" type="text" name="password" id="password" minLength="7" />
        <button type="submit">Log In</button>
      </form>
      <button onClick={changeFormHandler}>Sign Up</button>
    </div>
  );

  if (!seeLogin) {
    displayedData = (
      <div>
        <h1>Sign up Form</h1>
        <form onSubmit={submitHandler}>
          <label className="block test-start" htmlFor="first-name">First Name</label>
          <input className="bg-white" type="text" name="first-name" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input className="bg-white" type="text" name="last-name" id="last-name" />
          <label htmlFor="email">E-mail</label>
          <input className="bg-white" type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input className="bg-white"type="text" name="password" id="password" minLength="7" />
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={changeFormHandler}>Log In</button>
      </div>
    );
  }
  return displayedData;
};

export default LoginPage;
