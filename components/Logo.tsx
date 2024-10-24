// Create Logo component placeholder
//       </div>
import React from "react";
import Image from "next/image";
// import logo from "../public/logo.png"; // Adjust the path as necessary
const logo = "";
const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src={logo} alt="Logo" width={150} height={150} />
    </div>
  );
};

export default Logo;
