import React, { ReactNode } from "react";

const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <div>
      <button
        className={`uppercase text-sm bg-gradient-color text-white  w-28 h-10 relative after:absolute after:h-[100%] after:w-[100%] after:bg-gradient-to-r after:from-blue-500 after:to-green-400 after:top-0 after:left-0 transform overflow-hidden after:-translate-x-[100%] hover:after:translate-x-0 after:duration-500 after:text-white z-10 after:z-[-1] after:rounded-full ${className}`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
