import React from "react";
import { Header } from "../header/Index";
import { Footer } from "../footer/Index";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return (
    <div className="px-14 h-screen">
      <div className="bg-secondary h-full rounded-md ">
        <Header />
        <div className="h-5/6">
        {children}
        </div>
        <Footer />  
      </div>
      
    </div>
  );
};
