"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

export const ButtonAElementWithChevronRight = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className="flex items-center gap-2 sm:gap-[50px] btn px-2 bg-purple-600 hover:bg-purple-700 "
    >
      <span className="text-white">{props.children}</span> <FaChevronRight className=" right-2" />
    </a>
  );
});
