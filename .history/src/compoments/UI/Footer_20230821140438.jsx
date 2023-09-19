import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-900 mt-5 w-full gap-6">
        <Link className=" ">
          Become A Partner
        </Link>
        <Link className="">
          Contact Us
        </Link>
        <InstagramIcon />
    </footer>
  );
};

export default Footer;
