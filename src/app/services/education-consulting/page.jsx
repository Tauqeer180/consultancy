import { H1, H2, H3, H4, H5, P } from "@/components/common/Typography";
import Button from "@/components/common/button";
import { Services } from "@/components/common/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" max-w-5xl lg:px-11 sm:px-8 px-4 mx-auto pb-20 pt-10">

      {/* Education Consulting Services  */}
      <div>
        <H2>education Consulting Services</H2>
      <P className="text-center">
        Ready to unlock the full potential of our business? Dive into our
        comprehensive consultancy services to discover how we can help you
        achieve your goals.
      </P>
        <div className="pt-10">
          <P>
            Embarking on your educational journey can be overwhelming, but
            Noyagastya Consultancy is here to provide expert guidance and
            support. Whether {`you're`} a student in India aiming for a career
            in nursing or seeking to pursue higher education in Germany or the
            UK, we offer comprehensive consulting services to help you achieve
            your academic aspirations.
          </P>
          <H3>For Students in India</H3>
          <H5>Nursing College Admissions</H5>
          <P>
            Achieve your dream of becoming a nurse with our tailored admissions
            consulting. We assist you in navigating the application process,
            ensuring you present a compelling and complete application to the
            nursing colleges of your choice.
          </P>

          <H5>Nursing College Selection</H5>
          <P>
            Choosing the right college is crucial for your nursing career. We
            provide personalized advice on selecting institutions that best
            match your academic background, career goals, and personal
            preferences, ensuring you make an informed decision.
          </P>
          <H5>Nursing Course Planning</H5>
          <P>
            Optimize your nursing education with our course planning services.
            We help you select the right courses that align with your career
            objectives and comply with the academic requirements of your chosen
            college.
          </P>
          <H5>Nursing Scholarship Guidance</H5>
          <P>
            Ease the financial burden of nursing education with our scholarship
            guidance. We assist you in identifying and applying for
            scholarships, ensuring you take advantage of all available financial
            aid opportunities.
          </P>
          <H5>Tutoring for Nursing Subjects</H5>
          <P>
            We also offer specialized tutoring for nursing students in India.
            Whether you need help with Anatomy and Physiology, Pharmacology,
            Microbiology, or any other subject in the nursing syllabus, our
            experienced tutors provide personalized support to help you excel in
            your studies. Reach out to us for expert guidance and tutoring
            tailored to your academic needs.
          </P>

          {/* India Ends */}

          {/* Germany Starts */}
          <H3>For Students Interested in Germany</H3>
          <H5>German Universities Selection</H5>
          <P>
            Explore the best German universities with our selection services. We
            guide you through the process of choosing universities that offer
            programs suited to your academic interests and career goals.
          </P>
          <H5>German Universities Course Selection</H5>
          <P>
            Optimize your study plan with our course selection services for
            German universities. We help you identify courses that align with
            your educational background and future aspirations, whether{" "}
            {`you're`}
            pursuing a {`Bachelor's`}, {`Master's`}, vocational training, or a
            PHD.
          </P>
          <H5>
            {`Bachelor's`}, {`Master's`}, Vocational Training, and PhD Programs
          </H5>
          <P>
            Whether {`you're`} looking to pursue undergraduate or postgraduate
            studies, vocational training, or a doctoral degree in Germany, we
            provide comprehensive consulting services to guide you through the
            application process and course selection.
          </P>

          {/* Germany Ends */}

          {/* UK Starts */}
          <H3>For Students Interested in the UK</H3>
          <H5>UK Universities Selection</H5>
          <P>
            Identify the best universities in the UK with our expert guidance.
            We assist you in selecting institutions that match your academic
            profile and career objectives, ensuring you make a well-informed
            choice.
          </P>
          <H5>UK Universities Course Selection</H5>
          <P>
            Streamline your educational path with our course selection services
            for UK universities. We help you choose courses that align with your
            academic interests and professional goals, whether {`you're`}{" "}
            pursuing a{`Bachelor's`} or {`Master's`} degree.
          </P>
          <H5>
            {`Bachelor's`} and {`Master's`} Programs
          </H5>
          <P>
            Achieve your academic ambitions with our support for applying to
            undergraduate and postgraduate programs in the UK. We guide you
            through every step of the application process, ensuring you present
            a strong and competitive application.
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
      </div>

      {/* Education Consulting Services ENDs Here */}


    </div>
  );
}
