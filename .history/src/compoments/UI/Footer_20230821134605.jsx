import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-accent mt-5">
      <div className="flex ">
        <Link>Become A Partner</Link>
        <Link className="">Contact Us</Link >
      </div>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
