"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import TestiCard from "./TestiCard";
import { useQuery } from "@tanstack/react-query";
const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const fetchData = async () => {
  const res = await fetch(`/api/testimonials/getactivelist`);
  const data = await res.json();
  console.log("Data from Test ", data);
  return data;
};

export default function TestimonialCarousel({ initialData }) {
  //   console.log("Data from Carousel ", data);
  const { isLoading, error, data } = useQuery({
    queryKey: ["activeTestimonials"],
    queryFn: fetchData,
    // initialData: initialData,
    // placeholderData: initialData,
    // staleTime: 1000,
  });
  return (
    <div>
      {data && (
        <Carousel
          //   ssr={true}
          autoPlay-
          showDots
          infinite
          dotListClass="gap-1"
          responsive={responsive}
          renderDotsOutside={true}
          containerClass=" relative "
        >
          {data?.data?.map((d, i) => {
            return (
              <div key={i}>
                <TestiCard data={d} />
              </div>
            );
          })}

          {/* s */}
        </Carousel>
      )}
    </div>
  );
}
