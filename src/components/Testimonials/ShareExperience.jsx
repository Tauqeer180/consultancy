"use client";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Input, InputLabel } from "../common/Input";
import Button from "../common/button";
import { Inputdisplay } from "../common/constant";
import { H3 } from "../common/Typography";
import { toast } from "sonner";
import { useAuth } from "@/Providers/AuthContext";
import Loader from "../common/Loader";
export const TestimSchema = Yup.object().shape({
  fName: Yup.string().required("Required"),
  lName: Yup.string().required("Required"),
  service_taken: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});
export default function Page() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (value) => {
    setLoading(true);
    const res = await fetch("/api/testimonials/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    });
    const data = await res.json();
    if (data?.success) {
      setLoading(false);
      // login(data?.token, data?.user);
    } else {
      setLoading(false);
    }
    console.log(data);
    toast(data?.message);
    // router.push('/')
  };
  return (
    <div className=" ">
      {loading && <Loader />}
      <div className="   max-w-7xl lg:px-11 sm:px-4 px-2 mx-auto pb-24 ">
        <H3 className="text-center">Share Your Experience</H3>
        <Formik
          initialValues={{
            fName: "",
            lName: "",
            service_taken: "",
            message: "",
          }}
          validationSchema={TestimSchema}
          validateOnBlur={false}
          validateOnChange={false}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {({ values, handleBlur, handleChange, errors, setFieldValue }) => (
            <Form>
              <>
                <div className=" overflow-y-auto py-4 md:px-4 px-2 grid  sm:grid-cols-2 grid-cols-1 gap-x-4">
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
                    <div className="mt-2 relative">
                      {/* <label htmlFor="user_id">Choose a User:</label> */}
                      <InputLabel>Service Taken </InputLabel>
                      <Field
                        as="select"
                        name="service_taken"
                        className={Inputdisplay}
                      >
                        <option value="">Select Service</option>

                        {[
                          "Visa Consulting",
                          "IT Consulting",
                          "Education Consulting",
                          "Career Consulting",
                          "Medical Consulting",
                        ]?.map((name, i) => {
                          return (
                            <option key={i} value={name}>
                              {name}
                            </option>
                          );
                        })}
                      </Field>

                      {errors?.service_taken && (
                        <p className="text-sm text-red-900 mt-2">
                          {errors?.service_taken}
                        </p>
                      )}
                    </div>
                    {/* <Input
                      type="service_taken"
                      name="service_taken"
                      value={values?.service_taken}
                      onChange={handleChange}
                      label="service taken"
                      errors={errors}
                    /> */}
                  </div>

                  <div className=" sm:col-span-2 col-span-1">
                    <div className="mt-2 relative">
                      <InputLabel>message </InputLabel>
                      <Field
                        as="textarea"
                        rows={3}
                        type="text"
                        name="message"
                        id="message"
                        placeholder=""
                        value={values?.message}
                        onBlur={handleBlur}
                        className={Inputdisplay}
                        onChange={handleChange}
                        autocomplete="off"
                      />
                    </div>
                    {errors.message && (
                      <p className="text-sm text-red-900 mt-2">
                        {errors.message}
                      </p>
                    )}
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
