"use client";
import { H3, P } from "../common/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestiCard from "./TestiCard";
const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
let data = [
  {
    message:
      "1 I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "Sima Patel",
    service: "Visa",
  },
  {
    message:
      "2 I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "Sima Patel",
    service: "Visa",
  },
  {
    message:
      "2 I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "Sima Patel",
    service: "Visa",
  },
];
export default function Testimonials() {
  return (
    <div>
      <H3 className={"text-center"}>What our clients says</H3>
      <P className={"text-center"}>
        Here's what some of our clients have to say about their experience with
        Noyagastya Consultancy:
      </P>
      <div className="mt-5 relative pb-5">
        <Carousel
          ssr={true}
          autoPlay-
          showDots
          infinite
          dotListClass="gap-1"
          responsive={responsive}
          renderDotsOutside={true}
          containerClass=" relative "
        >
          {data?.map((d, i) => {
            return (
              <div key={i}>
                <TestiCard data={d} />
              </div>
            );
          })}

          {/* s */}
        </Carousel>
      </div>
    </div>
  );
}
