import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-accent mt-5">
      <div className="flex justify-around mt-3">
        <Link>Become A Partner</Link>
        <Link className="border-solid border-2 p-3 border">Contact Us</Link >
      </div>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
