import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";
import React, { useState, useEffect } from "react";
const isScrollable = function (ele) {
  // Compare the height to see if the element has scrollable content
  const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

  // It's not enough because the element's `overflow-y` style can be set as
  // * `hidden`
  // * `hidden !important`
  // In those cases, the scrollbar isn't shown
  const overflowYStyle = window.getComputedStyle(ele).overflowY;
  const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

  return hasScrollableContent && !isOverflowHidden;
};
const Footer = () => {
  const hasScrollbar = document.body.clientHeight > window.innerHeight;
  const [isScrollable, setIsScrollable] = useState(hasScrollbar);
  return (
    <footer
      className={`flex p-6 flex-col items-center justify-center bg-neutral-900  w-full gap-3 ${
        hasScrollbar ? "" : "absolute bottom-0"
      }`}
    >
      <Link className=" ">Become A Partner</Link>
      <Link className="">Contact Us</Link>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
