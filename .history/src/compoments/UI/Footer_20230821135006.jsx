import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-neutral-900 mt-5">
      <div className="flex justify-around mt-3">
        <Lin k>Become A Partner</Link>
        <Link className="border-accent border-2 p-3 rounded-3xl">Contact Us</Link >
      </div>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
