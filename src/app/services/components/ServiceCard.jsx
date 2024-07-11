import Button from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ image, title, time, price }) {
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
}
