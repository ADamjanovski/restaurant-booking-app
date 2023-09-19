const SignUpForm = () => {
    const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const ctx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    ctx.login(usernameInput, passwordInput);
  };
  const usernameHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const passwordHandler = (event) => {
    setPasswordInput(event.target.value);
  };
  return (
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
  );
};

export default SignUpForm;
