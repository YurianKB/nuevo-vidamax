import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GreenButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`green-button ${className ? className : "text-small"}`}
    >
      {children}
    </button>
  );
};