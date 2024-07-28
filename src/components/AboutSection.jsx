import Image from "next/image";
import React from "react";
import Button from "./common/button";

export default function AboutSection() {
  return (
    <div className=" relative">
      <Image
        alt="banner"
        className=" w-auto h-[680px]"
        src="https://static.wixstatic.com/media/82fcd3_96376843bac9407bb5b50891b78b6210~mv2.jpg/v1/fill/w_1351,h_679,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_96376843bac9407bb5b50891b78b6210~mv2.jpg"
        height="682"
        width="1100"
      />
      <div className=" bg-[#d8e8f2e8] absolute top-0 bottom-0 left-0 w-full">
        <div className=" absolute top-0 left-1/2 -translate-x-1/2  max-w-[645px] w-full mx-auto text-center pb-[6px]">
          <div className=" sm:pb-14 pb-6">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              //   data-aos-anchor-placement="center-center"
              className="sm:pb-11 pb-2 md:pt-[131px] pt-16 sm:text-4xl text-2xl uppercase tracking-wider"
            >
              About us
            </h2>
            <p
              className=" text-base font-light "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              I&apos;m a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and
              drop me anywhere you like on your page. I’m a great place for you
              to tell a story and let your users know a little more about you.
            </p>
            <p className=" text-base font-light "> &nbsp; </p>
            <p
              className=" text-base font-light "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>

          <Button className=" bg-transparent ">Free Consultaion</Button>
        </div>{" "}
      </div>
    </div>
  );
}
