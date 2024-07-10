import Button from "@/components/common/button";
import { Services } from "@/components/common/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" max-w-5xl lg:px-11 sm:px-4 mx-auto pb-20">
      <h2 className="sm:pb-11 pb-2 sm:pt-20 pt-16 text-center md:text-6xl sm:text-4xl text-3xl uppercase tracking-wider">
        About
      </h2>
      <div className=" md:space-y-20 ">
        {Services?.map(({ image, title, price, time }, i) => {
          return (
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center border border-black">
              <div className="">
                <Image
                  alt="banner"
                  width="470"
                  height="290"
                  className="w-full"
                  src={image}
                />
              </div>
              <div className=" p-14 space-y-4">
                <Link href="/">
                  <h2 className=" text-secondary uppercase text-3xl font-extralight hover:text-gray-400 duration-500 font-kode ">
                    {title}
                  </h2>
                </Link>
                <p>{time} </p>
                <p> {price} </p>
                <Button>Book Now</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
