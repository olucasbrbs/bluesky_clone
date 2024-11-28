import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  color: "blue" | "gray";
  href: string
  fullWidth?: boolean
  customClass?: string
}

const Button = ({ title, color, href, fullWidth, customClass}: ButtonProps) => {
  return (
    <button
      className={`${customClass} font-bold rounded-lg transition flex items-center justify-center text-[15px] h-[43px] 
      ${color === "blue" ? "text-white bg-[#208bfe] hover:bg-[#208bfeb3]" : " text-[#aebbc9] bg-[#1e2936] hover:bg-[#1e2936b2]"} ${fullWidth && 'w-[280px] max-[400px]:w-[240px]'}`}
    >
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default Button;
