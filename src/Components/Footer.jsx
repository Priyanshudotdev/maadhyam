import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section crosses className="!px-0 !py-10 text-white ">
      <div className="container flex md:justify-between justify-center items-center gap-8 max-sm:flex-col  ">
        <p className="caption text-zinc-400 lg:block ml-4 ">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <div className=" border border-zinc-800 px-3 py-2 rounded ">
          <h2 className="font-code md:text-[0.72rem] lg:text-[1rem]   ">
            Build With 💖 by{" "}
            <span className=" tracking-wide font-bold ">PRIYASNHU</span>
          </h2>
        </div>

        <ul className="flex gap-5 flex-wrap ">
          <a
            href="https://x.com/Priyanshu_twi"
            className="flex items-center justify-center w-10  h-10 bg-zinc-900 rounded-full transition-colors hover:bg-zinc-800 cursor-pointer "
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://in.linkedin.com/in/priyanshu-li"
            className="flex items-center justify-center w-10  h-10 bg-zinc-900 rounded-full transition-colors hover:bg-zinc-800 cursor-pointer "
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Priyanshudotdev"
            className="flex items-center justify-center w-10  h-10 bg-zinc-900 rounded-full transition-colors hover:bg-zinc-800 cursor-pointer "
            target="_blank"
          >
            <FaGithub />
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
