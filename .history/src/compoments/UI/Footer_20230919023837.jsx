import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";
import React, { useState, useEffect } from "react";
function isDocumentScrollable() {
  const body = document.body;
  const documentElement = document.documentElement;

  // Check if the scroll height of either the body or documentElement is greater than the client height
  return (
    body.scrollHeight > documentElement.clientHeight ||
    documentElement.scrollHeight > documentElement.clientHeight
  );
}
const Footer = () => {
  const hasScrollbar = document.body.scrollHeight > window.innerHeight;
  const [isScrollable, setIsScrollable] = useState(hasScrollbar);
  useEffect(() => {
    const hasScrollbar = document.body.scrollHeight > window.innerHeight;
    setIsScrollable(hasScrollbar);
  }, []);
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
