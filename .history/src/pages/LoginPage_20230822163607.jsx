const LoginPage = () => {
  const [seeLogin, setSeeLogin] = useState(true);

  let displayedData = (
    <form>
      <label htmlFor="email">E-mail</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password" minLength="7" />
    </form>
  );

  if (!seeLogin) {
    displayedData = (
      <div>
        <h2></h2>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" />
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" minLength="7" />
        </form>
      </div>
    );
  }
};
