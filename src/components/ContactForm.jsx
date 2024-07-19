"use client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Input, InputLabel } from "./common/Input";
import Button from "./common/button";
import { Inputdisplay } from "./common/constant";
import { H3 } from "./common/Typography";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (value) => {
    console.log("Value ", value);
  };
  return (
    <div className=" ">
      <div className="   max-w-7xl mx-auto pb-24 ">
        {/* <H3 className={"text-center"}>contact</H3> */}

        <Formik
          initialValues={{}}
          // validationSchema={{}}
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
                      name="first_name"
                      value={values?.first_name}
                      onChange={handleChange}
                      label="first name"
                      errors={errors}
                    />
                  </div>
                  <div className="">
                    <Input
                      name="last_name"
                      value={values?.last_name}
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
                  <Button>Submit</Button>
                </div>
              </>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
