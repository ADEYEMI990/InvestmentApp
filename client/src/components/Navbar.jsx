import React from "react";
import { assets } from "../assets/assets";
// import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className= "fixed top-0 hidden left-0 right-0 z-50 h-[75px] w-full bg-white shadow-md items-center bg-auto bg-center bg-no-repeat transition lg:flex" aria-label= "Top">
          <div className= "mx-auto max-w-[1171px] h-full w-full flex items-center justify-between">
            <div className="ml-6 w-full xl:ml-0">
              <a aria-current="page" href="/" className="router-link-active router-link-exact-active flex items-center gap-x-3 text-2xl font-bold" >
                <img
                  src={assets.NASA}
                  alt="logo"
                  className= "h-[41px] w-[41px]"
                />
                  SPACE X
              </a>
            </div>
            <div className= "min-w-fit w-full flex space-x-10">
              <a aria-current= "page" href="/" className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]">
                <div className= "absolute h-2 w-full rounded-b-[8px] bg-[#0098ea] transition -top-[26px]" style={{ boxShadow: 'rgb(0, 152, 234) 0px 4px 25px 0px' }}
                >
                </div>{" "}
                Home Coming
              </a>
              <a
                aria-current="page"
                href="#/#advantages"
                className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
              >
                Advantages
              </a>
              <a
                aria-current="page"
                href="#/#how-to-start"
                className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
              >
                How to Start Earning MORE
              </a>
              <a
                aria-current="page"
                href="#/#plans"
                className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
              >
                Planing Ahead with Us
              </a>
              <span className= "van-popover__wrapper">
                <div className= "group relative flex cursor-pointer justify-center font-medium transition hover:text-[#00a6ff]">
                  <span>More to see in it to confirm</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-1 mt-0.5 h-5 w-5 text-[#04060B] group-hover:text-[#00a6ff]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </div>
            <div className= "mr-6 w-full flex items-center justify-end xl:mr-0">
              <div className= "base-lang-wrap">
                <div className= "cursor-pointer">
                  <div className= "i-ic:sharp-language mr-10px h-30px w-30px cursor-pointer transition hover:text-[#00a6ff]"></div>
                </div>
              </div>
              <a
                href="#/dashboard"
                className= "shadow-button h-[45px] w-[156px] flex items-center justify-center rounded-[8px] bg-[#0098ea] text-white hover:bg-[#00a6ff]"
              >
                Stake Now or Never and Then Enjoy!!!
              </a>
            </div>
          </div>
        </nav>
    )

    // <div>
    //   <div>
    //     <nav
    //       className= "top-0 hidden h-[75px] w-full items-center bg-auto bg-center bg-no-repeat transition lg:flex"
    //       aria-label= "Top"
    //     >
    //       <div className="mx-auto max-w-[1171px] w-full flex items-center justify-between">
    //         <div className="ml-6 w-full xl:ml-0">
    //           <a
    //             aria-current="page"
    //             // href="#/"
    //             className="router-link-active router-link-exact-active flex items-center gap-x-3 text-2xl font-bold"
    //           >
    //             <img
    //               src={assets.NASA}
    //               alt="logo"
    //               className="h-[41px] w-[41px]"
    //             />
    //             Galaxy
    //           </a>
    //         </div>
    //         <div className="min-w-fit w-full flex space-x-10">
    //           <a
    //             aria-current="page"
    //             // href="#/"
    //             className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
    //           >
    //             <div
    //               className="absolute h-2 w-full rounded-b-[8px] bg-[#0098ea] transition -top-[26px]"
    //               style={{ boxShadow: 'rgb(0, 152, 234) 0px 4px 25px 0px' }}
    //             ></div>{" "}
    //             Home
    //           </a>
    //           <a
    //             aria-current="page"
    //             // href="#/#advantages"
    //             className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
    //           >
    //             Advantages
    //           </a>
    //           <a
    //             aria-current="page"
    //             href="#/#how-to-start"
    //             className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
    //           >
    //             How to Start
    //           </a>
    //           <a
    //             aria-current="page"
    //             // href="#/#plans"
    //             className="router-link-active router-link-exact-active relative flex justify-center font-medium transition hover:text-[#00a6ff]"
    //           >
    //             Plans
    //           </a>
    //           <span className= "van-popover__wrapper">
    //             <div className= "group relative flex cursor-pointer justify-center font-medium transition hover:text-[#00a6ff]">
    //               <span>More</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //                 aria-hidden="true"
    //                 className="ml-1 mt-0.5 h-5 w-5 text-[#04060B] group-hover:text-[#00a6ff]"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
    //                   clipRule="evenodd"
    //                 ></path>
    //               </svg>
    //             </div>
    //           </span>
    //         </div>
    //         <div className="mr-6 w-full flex items-center justify-end xl:mr-0">
    //           <div className="base-lang-wrap">
    //             <div className="cursor-pointer">
    //               <div className="i-ic:sharp-language mr-10px h-30px w-30px cursor-pointer transition hover:text-[#00a6ff]"></div>
    //             </div>
    //           </div>
    //           <a
    //             // href="#/dashboard"
    //             className="shadow-button h-[45px] w-[156px] flex items-center justify-center rounded-[8px] bg-[#0098ea] text-white hover:bg-[#00a6ff]"
    //           >
    //             Stake Now
    //           </a>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  
};

export default Navbar;

