import React from "react";
import { P } from "../common/Typography";

export default function TestiCard({ data }) {
  let { message, name, service } = data;
  console.log("Data ", data);
  return (
    <div className=" max-w-xl mx-auto text-center rounded-lg p-4 ">
      <P className=" italic">"{message}"</P>
      <P className=" !pb-0">{name}</P>
      <P className=" !pb-0"> {service} </P>
    </div>
  );
}
