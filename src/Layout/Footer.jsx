import React from "react";
import { CONTACT } from "../utils/index.utils";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className=" py-16">
      {/* <h1 className="my-6 text-center text-4xl">Get in Touch </h1> */}
      <div className="text-center tracking-tighter">
        {/* <p className="my-4 ">{CONTACT.address}</p>
        <p className="my-4 ">{CONTACT.phoneNo}</p> */}
      

        {/* <span>
          <div style={{ fontSize: "13px" }}>
            Designed & Developed by: &nbsp;
            <a style={{ color: "#4770b3" }} href="https://bikram-rai.com.np">
              Bikram Rai
            </a>
          </div>
        </span> */}

        <div
          className="m-5 flex items-center justify-center gap-5 text-2xl pr-30
      "
        >
          <a href="https://www.linkedin.com/in/raibikraminfo/">
            <FaLinkedin />
          </a>

          <a href="https://github.com/ItsBikramRai">
            <FaSquareGithub />
          </a>
          <a href="https://x.com/RaiBkram">
            <FaSquareXTwitter />
          </a>
        </div>
        <p className="mb-2">
          {CONTACT.email}
        </p>
        <p className=" font-semibold">
          &copy;2024, <a href="https://bikram-rai.com.np">Bikram Rai</a>
        </p>
      </div>
    </div>
  );
}