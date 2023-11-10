import React from 'react';


const logo = "https://pngfre.com/wp-content/uploads/trollface-png-from-pngfre-3.png";

function Navbar() {
  return (
    <>
    <nav className="nav  flex flex-wrap items-center justify-between bg-gray-800">
      <div className="logo flex items-center justify-between w-20">
        <img src={logo} alt="" />
        <li className="text-zinc-200 list-none	">Meme Generator</li>
      </div>
      
      <li className="mr-10 text-zinc-200 list-none	" >First react project xd</li>
    </nav>
   
</>
  );
}

export default Navbar;
