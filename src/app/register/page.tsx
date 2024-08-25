"use client";

import React from "react";
import { RegisterForm } from "./registerForm";
import { ToastContainer } from "react-toastify";

export default function Register() {
  return (
    <div className="flex h-screen">
      <RegisterForm />
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://a.storyblok.com/f/267449/4271x2851/a180e87ab1/yeh-xintong-go3dt3ppiw4-unsplash-1.jpg')",
        }}
      ></div>
    </div>
  );
}
