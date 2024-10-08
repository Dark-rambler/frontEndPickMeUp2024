import React from "react";
export const Backgrounds =()=> {
  return (
    <div className="bg-secondary absolute w-full  h-full rounded-md ">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#FFFFFF" />
            <stop offset="1" stop-color="#FFFFFF" />
          </linearGradient>
        </defs>
        <pattern id="b" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle fill="#FFECF0" cx="12" cy="12" r="12" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#a)" />
        <rect width="100%" height="100%" fill="url(#b)" fill-opacity="0.5" />
      </svg>
    </div>
  );
}
