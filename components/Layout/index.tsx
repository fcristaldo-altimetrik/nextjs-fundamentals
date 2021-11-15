import { NavBar } from "components/NavBar";
import React from "react";

interface LayoutProps {
  children: React.ReactElement;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
