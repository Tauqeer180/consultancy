import { H1, H2, H3, H4, H5, P } from "@/components/common/Typography";
import Button from "@/components/common/button";
import { Services } from "@/components/common/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" max-w-5xl lg:px-11 sm:px-8 px-4 mx-auto pb-20 sm:pt-20 pt-10">

      {/* Career Consulting Services Starts*/}

      <div>
        <H2>Career Consulting Services</H2>
      <P className="text-center">
        Ready to unlock the full potential of our business? Dive into our
        comprehensive consultancy services to discover how we can help you
        achieve your goals.
      </P>
        <P>
          Planning your future can be overwhelming, but it is vital to
          vigilantly chose the right career path with confidence and clarity.
          Our comprehensive career counseling services are designed to support
          students at various educational stages, ensuring you make informed
          decisions and achieve your professional goals. Whether you’re a recent
          graduate, currently in college, or completed 12th grade, our experts
          provide personalized guidance tailored to your unique needs and
          aspirations.
        </P>
        <H4>Services We Offer</H4>
        <H5>College/University Selection</H5>

        <P>
          Choosing the right college or university is a critical step in your
          academic journey. We will assist you in identifying institutions that
          align with your academic background, interests, and career goals,
          ensuring a well-informed decision that sets you on the path to
          success.
        </P>

        <H5>Nursing Programs</H5>

        <P>
          For those interested in pursuing a career in nursing, we offer
          specialized guidance on nursing programs. From selecting the right
          college to planning your nursing courses and securing scholarships,
          our experts provide comprehensive support to help you excel in the
          nursing field.
        </P>
        <H5>Career Planning</H5>
        <P>
          Effective career planning is essential for long-term success. Our
          career planning services help you understand your strengths,
          interests, and opportunities in your chosen field. We work with you to
          create a strategic career plan that aligns with your goals and
          aspirations.
        </P>
        <H5>Resume and Interview Preparation</H5>
        <P>
          Stand out in the competitive job market with our resume and interview
          preparation services. Our experts assist you in crafting a compelling
          resume and provide personalized coaching to help you ace your
          interviews, making a positive impression on potential employers.
        </P>
        <H5>Study Abroad in Germany/UK</H5>

        <P>
          Considering studying abroad? We provide detailed guidance on selecting
          universities and courses in Germany and the UK. We assist you with the
          application process, document preparation, and visa requirements,
          ensuring a smooth transition to your international education
          experience.
        </P>
        <H5>Job Search Strategies</H5>
        <P>
          Navigating the job market can be challenging. Our job search
          strategies service equips you with the tools and techniques to find
          and secure employment in your desired field. From job search planning
          to application tactics, we help you effectively market yourself to
          potential employers.
        </P>

        <H3>contact us</H3>
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
      {/* Career Consulting ends Here */}

    </div>
  );
}
