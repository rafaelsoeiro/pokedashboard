import React from "react";

interface iBaseTitleProps {
  children: React.ReactNode;
  className?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeigth: 400 | 700;
  fontSize: "lg" | "md" | "sm";
}

const BaseTitle = ({ children, className, tag }: iBaseTitleProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h1 className={className}>{children}</h1>}
      {tag === "h3" && <h1 className={className}>{children}</h1>}
      {tag === "h4" && <h1 className={className}>{children}</h1>}
      {tag === "h5" && <h1 className={className}>{children}</h1>}
      {tag === "h6" && <h1 className={className}>{children}</h1>}
    </>
  );
};

export default BaseTitle;
