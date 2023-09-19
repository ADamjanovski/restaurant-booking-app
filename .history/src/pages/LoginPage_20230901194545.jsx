import YourSVGComponent from "../assets/Reactlogo";
import { Link } from "react-router-dom";
import LoginForm from "../compoments/LogInForm";

function LoginPage() {

  return (
    <section className="container h-full p-10 flex justify-center mx-auto">
      <div className="block rounded-lg shadow-lg bg-secondary md:w-6/12 ">
          <div className="md:mx-6 px-4 md:px-0 ">
            {/* <!--Logo--> */}
            <div className="flex justify-center pt-3 ">
              <YourSVGComponent />
            </div>
            <LoginForm />
            <div className="mb-12">
              <Link href="#!">Forgot password?</Link>
            </div>
            <div className="flex items-center justify-between md:justify-around pb-6">
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
    </section>
  );
}
export default LoginPage;
