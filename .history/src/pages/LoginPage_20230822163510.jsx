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
      <form>
        <label htmlFor="email">Name</label>
        <input type="text" name="first-name" id="email" />
        <label htmlFor="email">Surname</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" minLength="7" />
      </form>
    );
  }
};
