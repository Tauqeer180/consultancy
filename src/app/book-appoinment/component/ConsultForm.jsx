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
let visa_types = {
  germany: [
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
  ],
  uk: [
    "study visa",
    "visit visa",
    "FRV",
    "document preparations",
    "interview preparations",
    "attestations and verifications",
  ],
  india: [
    "visit visa (for non indians)",
    "tourist visa (non indians)",
    "document verifications (indians)",
    "document attestations (indians)",
    "notary (indians)",
    "other",
  ],
};

let edu_types = {
  germany: [
    "german universities selection",
    "german universities course selection",
    "masters",
    "bachelors",
    "phd",
    "ielts bands",
    "german language level",
  ],
  uk: [
    "uk universities selection",
    "uk universities course selection",
    "masters",
    "bachelors",
    "other (please specify)",
  ],
  india: [
    "nursing college admissions",
    "nursing college selection",
    "nursing course planning",
    "nursing scholarship guidance",
  ],
};
let academic_level = [
  "high school student",
  "undergraduate student",
  "graduate student",
  "other (please specify)",
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
    is: (value) =>
      value === "visa consulting" || value === "education consulting",
    then: (schema) => schema.required("Required"),
  }),
  visa_country: Yup.string().when("service", {
    is: "visa consulting",
    then: (schema) => schema.required("Required"),
  }),
  visa_service_type: Yup.string().when("service", {
    is: "visa consulting",
    then: (schema) => schema.required("Required"),
  }),

  // Visa Consulting Ends

  // Edu Consulting Starts

  edu_background: Yup.string().when("service", {
    is: "education consulting",
    then: (schema) => schema.required("Required"),
  }),
  edu_interest: Yup.string().when("service", {
    is: "education consulting",
    then: (schema) => schema.required("Required"),
  }),

  edu_interest_other: Yup.string().when(["service", "edu_interest"], {
    is: (service, edu_interest) =>
      service === "visa consulting" &&
      edu_interest === "other (please specify)",
    then: (schema) => schema.required("Please Specify"),
    // otherwise: (schema) => schema.notRequired(),
  }),

  cur_acad_level: Yup.string().when("service", {
    is: "education consulting",
    then: (schema) => schema.required("Required"),
  }),

  // Edu consulting Ends

  motivations: Yup.string().required("Required"),
  goals: Yup.string().required("Required"),
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

                  {(values?.service == "visa consulting" ||
                    values?.service == "education consulting") && (
                    <>
                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Visa Country </InputLabel>
                        <Field
                          as="select"
                          name="visa_country"
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
                    </>
                  )}

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
                        <InputLabel>Visa Service Type</InputLabel>
                        {values?.visa_country?.length > 1 && (
                          <Field
                            as="select"
                            name="visa_service_type"
                            className={`${Inputdisplay} capitalize`}
                          >
                            <option value="">Select Service</option>

                            {visa_types[values?.visa_country]?.map(
                              (name, i) => {
                                return (
                                  <option key={i} value={name}>
                                    {name}
                                  </option>
                                );
                              }
                            )}
                          </Field>
                        )}

                        {errors?.visa_service_type && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.visa_service_type}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                  {/* Fields for Visa Consulting Ends */}

                  {/* Fields For Education Consulting Starts*/}
                  {values?.service == "education consulting" && (
                    <>
                      <Input
                        name="edu_background"
                        type="textarea"
                        value={values?.edu_background}
                        onChange={handleChange}
                        label="educational background"
                        errors={errors}
                      />
                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Area of Interest</InputLabel>
                        {values?.visa_country?.length > 1 && (
                          <Field
                            as="select"
                            name="edu_interest"
                            className={`${Inputdisplay} capitalize`}
                          >
                            <option value="">Select Service</option>

                            {edu_types[values?.visa_country]?.map((name, i) => {
                              return (
                                <option key={i} value={name}>
                                  {name}
                                </option>
                              );
                            })}
                          </Field>
                        )}

                        {errors?.edu_interest && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.edu_interest}
                          </p>
                        )}
                      </div>

                      {values?.edu_interest == "other (please specify)" && (
                        <Input
                          name="edu_interest_other"
                          value={values?.edu_interest_other}
                          onChange={handleChange}
                          label="other (please specify)"
                          errors={errors}
                        />
                      )}

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Current Academic Level</InputLabel>

                        <Field
                          as="select"
                          name="cur_acad_level"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {academic_level?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.cur_acad_level && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.cur_acad_level}
                          </p>
                        )}
                      </div>

                      <Input
                        name="other_academic_level"
                        value={values?.other_academic_level}
                        onChange={handleChange}
                        label="other academic (please specify)"
                        errors={errors}
                      />
                    </>
                  )}

                  {/* Education Consulting Ends Here */}

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
                  <div className="">
                    <Input
                      name="goals"
                      type="textarea"
                      value={values?.goals}
                      onChange={handleChange}
                      label={`What are your future goals upon getting the visa?`}
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
