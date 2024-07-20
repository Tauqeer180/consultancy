"use client";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";
import { Input, InputLabel } from "./common/Input";
import Button from "./common/button";
import { Inputdisplay } from "./common/constant";
import { H3 } from "./common/Typography";
import { useAuth } from "@/Providers/AuthContext";
import { toast } from "sonner";

export const ContactSchema = Yup.object().shape({
  fName: Yup.string().required("Required"),
  lName: Yup.string().required("Required"),
  email: Yup.string().required("Enter valid Email"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});
export default function ContactForm() {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (value) => {
    console.log("Value ", value);
    const res = await fetch("/api/contactus/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    });
    const data = await res.json();
    if (data?.success) {
      // login(data?.token, data?.user);
    } else {
    }
    console.log(data);
    toast(data?.message);
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
            subject: "",
            message: "",
          }}
          validationSchema={ContactSchema}
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
                      name="subject"
                      value={values?.subject}
                      onChange={handleChange}
                      label="subject"
                      errors={errors}
                    />
                  </div>
                  <div className=" sm:col-span-2 col-span-1">
                    <div className=" relative">
                      <InputLabel>message </InputLabel>
                      <Field
                        as="textarea"
                        rows={3}
                        type="text"
                        name="message"
                        id="message"
                        placeholder=""
                        value={values.message}
                        onBlur={handleBlur}
                        className={Inputdisplay}
                        onChange={handleChange}
                        autoComplete="off"
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
