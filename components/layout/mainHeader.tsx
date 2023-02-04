import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

export interface MainHeaderProps {}

export default function MainHeader({}: MainHeaderProps) {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    showNotification ? setShowNotification(false) : setShowNotification(true);
  };

  return (
    <>
      <div className="home-page-header border-b-2 md:hidden text-[#002D72] font- px-4 items-center  flex justify-between">
        <div className="heade-logo font-extrabold text-xl">
          <Link href={"/"}>
            <Image
              src={"/images/uniforumlogo.png"}
              height={25}
              width={25}
              alt=""
            />
          </Link>
        </div>
        <div className="flex  space-x-4 ">
          {/* <>
            <span className="">
              <FiSettings className="text-3xl" />
            </span>
            <span onClick={toggleNotification}>
              <GrNotification className="text-3xl" />
            </span>
          </> */}
          <div className="items-center space-x-2">
            <span className="font-bold">
              <span>
                <a>login</a>
              </span>
            </span>
            <span className="font-bold whitespace-nowrap rounded-md p-1 px-2">
              <span>
                <a>Sign Up</a>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div id="ezoic-pub-ad-placeholder-609"> </div>
    </>
  );
}
