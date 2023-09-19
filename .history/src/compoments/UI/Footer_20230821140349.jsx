import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-900 mt-5 w-full">
        <Link className=" ">
          Become A Partner
        </Link>
        <Link className="border-accent border-2 p-3 rounded-3xl">
          Contact Us
        </Link>
        <InstagramIcon />
    </footer>
  );
};

export default Footer;
