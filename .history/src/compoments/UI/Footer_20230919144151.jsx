import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon";
import React, { useState, useEffect } from "react";

const Footer = ({ scrollbar }) => {
  return (
    <footer
      className={`flex p-6 flex-col items-center justify-center bg-neutral-900  w-full gap-3 shadow-secondary shadow-lg`}
    >
      <Link className="" to="/becomePartner">
        Become A Partner
      </Link>
      <Link className="">Contact Us</Link>
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
