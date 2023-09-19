import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex ">
        <Link>Become A Partner</Link>
        <button>Contact Us</button>
      </div>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
