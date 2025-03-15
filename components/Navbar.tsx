import React from "react";
import Link from "next/link";
const Navbar =()=>{
    return (
        <nav>
            <div className="flex flew-wrap items-center  justify-between mx-auto p-8 ">
                <Link href={"/"} className=" text-4xl text-white  font-semibold">LOGO</Link>
                <div className="menu hidden md:block md:m-auto" id="navbar">
                       <ul>
                           <li><Link href={"#about"} 
                                 className="block py-2 pl-3 pr-4 hover:text-purple-500 transition text-white">
                                  about
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
            
        </nav>
    );
}
export default Navbar ;