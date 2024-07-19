import { H3, P } from "../common/Typography";
import TestimonialCarousel from "./TestimonialCarousel";
const fetchData = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/testimonials/getactivelist`
  );
  const data = await res.json();
  return data;
};

export default async function Testimonials() {
  let data = await fetchData();
  // console.log("get list Data ", data);

  if (!data || !data?.success) {
    return "Some thing Went Wrong";
  }
  return (
    <div>
      <H3 className={"text-center"}>What our clients says</H3>
      <P className={"text-center"}>
        {`Here's`} what some of our clients have to say about their experience
        with Noyagastya Consultancy:
      </P>
      <div className="mt-5 relative pb-5">
        {data?.data && <TestimonialCarousel initialData={data?.data} />}
      </div>
    </div>
  );
}
