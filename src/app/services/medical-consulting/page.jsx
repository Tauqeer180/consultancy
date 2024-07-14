import { H1, H2, H3, H4, H5, P } from "@/components/common/Typography";
import Button from "@/components/common/button";
import { Services } from "@/components/common/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" max-w-5xl lg:px-11 sm:px-8 px-4 mx-auto pb-20 pt-10">
      {/* Medical Consulting Services Starts*/}

      <div>
        <H2>Medical Consulting Services</H2>
        <P className="text-center">
          Ready to unlock the full potential of our business? Dive into our
          comprehensive consultancy services to discover how we can help you
          achieve your goals.
        </P>
        <P>
          Taking charge of your health can be daunting, but we are committed to
          providing you with expert medical consulting services tailored to your
          specific needs. Our team of certified nurses and healthcare
          professionals is dedicated to offering personalized support and
          guidance in key areas of health, ensuring you receive the best
          possible care and advice.
        </P>
        <H4>Services We Offer</H4>
        <H5>Gynecology</H5>

        <P>
          Our gynecology consulting services cater to a variety of {`women's`}
          health issues, including menstrual problems, pregnancy, menopause, and
          more. With compassionate care and professional expertise, we assist
          you in managing symptoms, exploring treatment options, and adopting
          preventive health measures to support your well-being.
        </P>

        <H5>General Medicine</H5>

        <P>
          For individuals managing chronic illnesses or dealing with general
          health concerns, our general medicine consulting services provide
          expert guidance and support. Our team helps you understand and manage
          your condition, develop personalized care plans, and adopt lifestyle
          changes that promote long-term health and wellness.
        </P>

        <H3>contact us</H3>
        <P>
          Your well-being is our top priority. Reach out to us today to schedule
          a consultation with one of our certified nurses or medical
          professionals. Whether you need assistance with gynecology, general
          medicine, or a combination of both, we are here to provide the expert
          care and support you need
        </P>
        <P>
          For more information please
          <Link
            href="/contact"
            className=" text-theme hover:text-secondary duration-500 font-normal text-lg"
          >
            {" "}
            contact us{"  "}
          </Link>
          or schedule a
          <Link
            href="/contact"
            className=" text-theme hover:text-secondary duration-500 font-normal text-lg"
          >
            {" "}
            consultation
          </Link>
          .
        </P>
      </div>
      {/* Medical Consulting Services ends Here */}
    </div>
  );
}
