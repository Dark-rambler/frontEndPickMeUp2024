'use client';
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

interface AppMuiProps {
  children: React.ReactNode;
  changeMode?: () => void;
}
const AppNextUI = ({ children }: Readonly<AppMuiProps>) => {
  return <NextUIProvider>
    {children}
    </NextUIProvider>;
};

export default AppNextUI;
