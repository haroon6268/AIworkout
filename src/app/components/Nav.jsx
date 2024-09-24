import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar p-[1rem] bg-base-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="27px"
        viewBox="0 -960 960 960"
        width="27px"
        className="fill-primary"
      >
        <path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" />
      </svg>
      <div className="max-w-[1700px] w-full">
        <Link href={"/"} className="btn btn-ghost text-xl primary-content">
          WorkoutWiz
        </Link>
      </div>
    </div>
  );
};

export default Nav;
