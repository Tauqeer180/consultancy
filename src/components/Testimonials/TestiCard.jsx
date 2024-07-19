import React from "react";
import { P } from "../common/Typography";

export default function TestiCard({ data }) {
  let { message, fName, lName, serviceTaken } = data;
  // console.log("Data ", data);
  return (
    <div className=" max-w-xl mx-auto text-center rounded-lg p-4 ">
      <P className=" italic">{`"${message}"`}</P>
      <P className=" !pb-0">{fName + " " + lName}</P>
      {serviceTaken && <P className=" !pb-0">Service Taken: {serviceTaken} </P>}
    </div>
  );
}
