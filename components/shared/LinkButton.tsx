import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  color: "blue" | "gray";
  href: string
  fullWidth?: boolean
  customClass?: string
}

const LinkButton = ({ title, color, href, fullWidth, customClass}: ButtonProps) => {
  return (
    <button
      className={`${customClass} font-bold rounded-lg transition flex items-center justify-center text-[15px] h-[43px] 
      ${color === "blue" ? "text-white bg-lightBlue hover:bg-lightBlue/70" : " text-lightGray bg-mediumGrayishBlue hover:bg-mediumGrayishBlue/70"} ${fullWidth && 'w-[280px] max-[400px]:w-[240px]'}`}
    >
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default LinkButton;
