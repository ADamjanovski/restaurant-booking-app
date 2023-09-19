import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex ">
        <Link>Become A Partner</Link>
        <Link className="">Contact Us</Link className="">
      </div>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
