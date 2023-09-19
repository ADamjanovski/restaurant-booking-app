import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    // Check if the document has a scrollbar
    const hasScrollbar = document.body.scrollHeight <>> window.innerHeight;
    setIsScrollable(hasScrollbar);
  }, []);
  console.log(isScrollable);
  return (
    <footer
      className={`flex p-6 flex-col items-center justify-center bg-neutral-900  w-full gap-3 ${
        isScrollable ? "" : "absolute bottom-0"
      }`}
    >
      <Link className=" ">Become A Partner</Link>
      <Link className="">Contact Us</Link>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
