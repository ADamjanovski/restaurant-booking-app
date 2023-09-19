import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-neutral-900 mt-5">
      <div className="flex justify-around items-center">
        <Link className=" border-accent border-2 p-3 rounded-3xl">Become A Partner</Link>
        <Link className="border-accent border-2 p-3 rounded-3xl">Contact Us</Link >
      </div>
    <div>
      <InstagramIcon /></div>F
    </footer>
  );
};

export default Footer;
