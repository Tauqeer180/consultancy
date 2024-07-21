"use client";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";
import { Input, InputLabel } from "@/components/common/Input";
import Button from "@/components/common/button";
import { Inputdisplay } from "@/components/common/constant";
import { H3 } from "@/components/common/Typography";
import { useAuth } from "@/Providers/AuthContext";
import { toast } from "sonner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
let countries = ["germany", "uk", "india"];
let service = [
  "visa consulting",
  "it consulting",
  "education consulting",
  "career consulting",
  "medical consulting",
];
let de_visa_type = [
  "study visa",
  "au pair visa",
  "vocational training visa",
  "family reunion visa (FRV)",
  "job seeking visa",
  "visit visa",
  "qualification recognition",
  "document preperations",
  "interview preperations",
  "attestations and verifications",
  "other",
];
let uk_visa_type = [
  "study visa",
  "visit visa",
  "FRV",
  "document preparations",
  "interview preparations",
  "attestations and verifications",
];
let india_visa_type = [
  "visit visa (for non indians)",
  "tourist visa (non indians)",
  "document verifications (indians)",
  "document attestations (indians)",
  "notary (indians)",
  "other",
];

export const ConsultSchema = Yup.object().shape({
  fName: Yup.string().required("Required"),
  lName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email().required("Enter valid Email"),
  dob: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  service: Yup.string().required("Required"),
  high_qualification: Yup.string().when("service", {
    is: "visa consulting",
    then: (schema) => schema.required("Required"),
  }),
  de_lang_level: Yup.string().when("service", {
    is: "visa consulting",
    then: (schema) => schema.required("Required"),
  }),
  en_lang_level: Yup.string().when("service", {
    is: "visa consulting",
    then: (schema) => schema.required("Required"),
  }),
  visa_country: Yup.string().when("service", {
    is: "visa consulting",
    then: (schema) => schema.required("Required"),
  }),
});
export default function ContactForm() {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (value) => {
    console.log(value);
    toast(value?.high_qualification);
    // const res = await fetch("/api/contactus/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(value),
    // });
    // const data = await res.json();
    // if (data?.success) {
    //   // login(data?.token, data?.user);
    // } else {
    // }
    // console.log(data);
    // toast(data?.message);
    // router.push('/')
  };
  return (
    <div className=" ">
      <div className="   max-w-7xl mx-auto pb-24 ">
        {/* <H3 className={"text-center"}>contact</H3> */}

        <Formik
          initialValues={{
            fName: "",
            lName: "",
            email: "",
          }}
          validationSchema={ConsultSchema}
          validateOnBlur={false}
          validateOnChange={false}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {({ values, handleBlur, handleChange, errors, setFieldValue }) => (
            <Form>
              <>
                <div className=" py-4 md:px-4 px-2 grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-x-4">
                  <div className="">
                    <Input
                      name="fName"
                      value={values?.fName}
                      onChange={handleChange}
                      label="first name"
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <Input
                      name="lName"
                      value={values?.lName}
                      onChange={handleChange}
                      label="last name"
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <Input
                      type="email"
                      name="email"
                      value={values?.email}
                      onChange={handleChange}
                      label="email"
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <Input
                      type="phone"
                      name="phone"
                      value={values?.phone}
                      onChange={handleChange}
                      label="phone no"
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <Input
                      type="address"
                      name="address"
                      value={values?.address}
                      onChange={handleChange}
                      label="address"
                      errors={errors}
                    />
                  </div>

                  <div className="">
                    <div className=" relative">
                      <InputLabel>Date of Birth </InputLabel>
                      <div className={`${Inputdisplay} !relative w-full `}>
                        <DatePicker
                          name="dob"
                          id="dob"
                          type="date"
                          dateFormat="Pp"
                          placeholder=""
                          value={values.dob}
                          onBlur={handleBlur}
                          className="w-full"
                          // className={Inputdisplay}
                          //   onChange={handleChange}
                          onChange={(e) => {
                            setFieldValue(
                              "dob",
                              moment(e).format("DD-MM-YYYY")
                            );
                            console.log(e);
                          }}
                        />
                      </div>
                    </div>
                    {errors.dob && (
                      <p className="text-sm text-red-600 mt-2">{errors.dob}</p>
                    )}
                  </div>

                  <div className="">
                    <div className="mt-2 relative">
                      {/* <label htmlFor="user_id">Choose a User:</label> */}
                      <InputLabel>Service </InputLabel>
                      <Field
                        as="select"
                        name="service"
                        className={`${Inputdisplay} capitalize`}
                      >
                        <option value="">Select Service</option>

                        {service?.map((name, i) => {
                          return (
                            <option key={i} value={name}>
                              {name}
                            </option>
                          );
                        })}
                      </Field>

                      {errors?.service && (
                        <p className="text-sm text-red-600 mt-2">
                          {errors?.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Fields for Visa Consulting Start*/}

                  {values?.service == "visa consulting" && (
                    <>
                      <div className="">
                        <Input
                          name="high_qualification"
                          value={values?.high_qualification}
                          onChange={handleChange}
                          label="highest qualification"
                          errors={errors}
                        />
                      </div>
                      <div className="">
                        <Input
                          name="de_lang_level"
                          value={values?.de_lang_level}
                          onChange={handleChange}
                          label="German Languaguage Level"
                          errors={errors}
                        />
                      </div>
                      <div className="">
                        <Input
                          name="en_lang_level"
                          value={values?.en_lang_level}
                          onChange={handleChange}
                          label="English Language Level"
                          errors={errors}
                        />
                      </div>

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Visa Country </InputLabel>
                        <Field
                          as="select"
                          name="vise_country"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Country</option>

                          {countries?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.visa_country && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.visa_country}
                          </p>
                        )}
                      </div>

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Visa Service Type</InputLabel>
                        <Field
                          as="select"
                          name="visa_service_type"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {values?.visa_country == "germany"
                            ? de_visa_type
                            : values?.visa_country == "uk"
                            ? uk_visa_type
                            : india_visa_type?.map((name, i) => {
                                return (
                                  <option key={i} value={name}>
                                    {name}
                                  </option>
                                );
                              })}
                        </Field>

                        {errors?.visa_service_type && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.visa_service_type}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                  {/* Fields for Visa Consulting Ends */}

                  <div className="">
                    <Input
                      name="motivations"
                      type="textarea"
                      value={values?.motivations}
                      onChange={handleChange}
                      label={`What is your motivation ${
                        (values?.visa_country &&
                          `to come to ${values?.visa_country}`) ||
                        ""
                      }?`}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4 pb-3 md:px-4 px-2">
                  <Button type="submit">Submit</Button>
                </div>
              </>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
