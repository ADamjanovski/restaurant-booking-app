const LoginPage = () => {
  const [seeLogin, setSeeLogin] = useState(true);
    const submitHandler = (event)=>{
        event.prevedDefault();
    }
  let displayedData = (
    <div>
      <h1>Log in Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" minLength="7" />
        <button type="submit">Log In</button>
      </form>
      <button>Sign Up</button>
    </div>
  );

  if (!seeLogin) {
    displayedData = (
      <div>
        <h1>Sign up Form</h1>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" />
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" minLength="7" />
          <button type="submit">Sign Up</button>
        </form>
        <button>Sign Up</button>
      </div>
    );
  }
};
