import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-5">
      <aside>
        <p className="flex items-center">
          Made with ❤️ by <span className="font-bold">&nbsp;Haroon</span>{" "}
          <img src="/me.png" className="h-8 w-8 rounded-[50%] ml-1"></img>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
