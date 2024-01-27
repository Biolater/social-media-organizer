import React from "react";

const Footer = () => {
  return (
    <footer id="contact-us" className="py-10">
      <div className="container">
        <div className="footer__wrapper bg-footer shadow-footer rounded-footer flex-col lg:flex-row  flex items-center justify-between p-4">
          <div className="logo mb-4 lg:m-0 md:text-2xl font-bold cursor-pointer">SMO</div>
          <div className="copy-right font-bold text-center text-sm md:text-base">
            &copy; 2024 Murad Yusubov. All rights reserved. <br/> Image from <a href="https://www.freepik.com" target="_blank">Freepik</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
