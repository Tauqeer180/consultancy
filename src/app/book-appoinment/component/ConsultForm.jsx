"use client";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FileUploadWithPreview } from "file-upload-with-preview";
import "file-upload-with-preview/dist/style.css";
import React, { useEffect, useState } from "react";
import { Input, InputLabel } from "@/components/common/Input";
import Button from "@/components/common/button";
import { Inputdisplay } from "@/components/common/constant";
import { H3 } from "@/components/common/Typography";
import { useAuth } from "@/Providers/AuthContext";
import { toast } from "sonner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { CldUploadWidget } from "next-cloudinary";
import { ConsultSchema } from "./schema";
import {
  service,
  academic_level,
  career_interest,
  edu_types,
  it_services,
  med_area_concern,
  proj_start_date,
  proj_status,
  visa_types,
} from "./formData";
let countries = ["germany", "uk", "india"];

export default function ContactForm() {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);
  var file_cnic,
    file_passport,
    file_degrees,
    file_exp_letter,
    file_lang_cert,
    file_addit_docs;
  useEffect(() => {
    file_cnic = new FileUploadWithPreview("file_cnic", {
      accept: ".pdf",
      text: { label: "CNIC" },
    });
    file_passport = new FileUploadWithPreview("file_passport", {
      accept: ".pdf",
      text: { label: "Passport" },
    });
    file_degrees = new FileUploadWithPreview("file_degrees", {
      accept: ".pdf",
      text: { label: "degress and certifications" },
    });
    file_exp_letter = new FileUploadWithPreview("file_exp_letter", {
      accept: ".pdf",
      text: { label: "experience letter" },
    });
    file_lang_cert = new FileUploadWithPreview("file_lang_cert", {
      accept: ".pdf",
      text: { label: "language certificate" },
    });
    file_addit_docs = new FileUploadWithPreview("file_addit_docs", {
      accept: ".pdf",
      text: { label: "any additional Docs" },
    });
  }, []);
  const handleSubmit = async (value) => {
    console.log(value);
    // toast(value?.high_qualification);
    // console.log("CNIC ", file_cnic?.cachedFileArray);
    const formData = new FormData();
    // for (const key in value) {
    //   if (Array.isArray(value[key])) {
    //     value[key].forEach((file) => formData.append(key, file));
    //   } else {
    //     formData.append(key, value[key]);
    //   }
    // }
    // formData.append("file_cnic", file_cnic?.cachedFileArray[0]);
    formData.append("file_cnic", value?.target.files[0]);
    const res = await fetch("/api/appointments/create", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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
                {JSON.stringify(errors)}
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
                    </>
                  )}

                  {(values?.service == "visa consulting" ||
                    values?.service == "education consulting") && (
                    <>
                      <div className="">
                        <Input
                          name="en_lang_level"
                          value={values?.en_lang_level}
                          onChange={handleChange}
                          label="English Language Level"
                          errors={errors}
                        />
                      </div>
                    </>
                  )}
                  {values?.service == "visa consulting" && (
                    <>
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
                    </>
                  )}

                  {(values?.service == "education consulting" ||
                    values?.service == "career consulting") && (
                    <>
                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Current Academic Level</InputLabel>

                        <Field
                          as="select"
                          name="cur_acad_level"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {academic_level[values?.service]?.map((name, i) => {
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

                      {values?.cur_acad_level == "other (please specify)" && (
                        <Input
                          name="other_academic_level"
                          value={values?.other_academic_level}
                          onChange={handleChange}
                          label="other academic (please specify)"
                          errors={errors}
                        />
                      )}
                    </>
                  )}

                  {(values?.service == "education consulting" ||
                    values?.service == "career consulting") && (
                    <>
                      <div>
                        <Input
                          name="quest_or_conc"
                          type="textarea"
                          value={values?.quest_or_conc}
                          onChange={handleChange}
                          label="educational background"
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Do you have any specific questions or concerns you
                          would like to address?)
                        </p>
                      </div>
                    </>
                  )}

                  {values?.service == "education consulting" && (
                    <>
                      <div>
                        <Input
                          name="additional_info"
                          type="textarea"
                          value={values?.additional_info}
                          onChange={handleChange}
                          label="educational background"
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Is there any additional information you would like us
                          to know?)
                        </p>
                      </div>
                    </>
                  )}

                  {/* Education Consulting Ends Here */}

                  {/* Career Consulting Starts  */}
                  {values?.service == "education consulting" && (
                    <>
                      <div>
                        <Input
                          name="field_of_study"
                          value={values?.field_of_study}
                          onChange={handleChange}
                          label="educational background"
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Please specify your field of study, e.g., Science,
                          Nursing, etc.)
                        </p>
                      </div>

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>
                          Area of Interest in Career Consulting:
                        </InputLabel>

                        <Field
                          as="select"
                          name="career_interest"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {career_interest?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.career_interest && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.career_interest}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          (Please select the area you need assistance with)
                        </p>
                      </div>
                      {values?.career_interest == "other (please specify)" && (
                        <Input
                          name="other_career_interest"
                          value={values?.other_career_interest}
                          onChange={handleChange}
                          label="other Career Interest (please specify)"
                          errors={errors}
                        />
                      )}
                      <div>
                        <Input
                          name="preferred_countries"
                          value={values?.preferred_countries}
                          onChange={handleChange}
                          label="Preferred Countries for Study/Work"
                          errors={errors}
                          placeholder="Comma Seperated Countries list"
                        />
                        <p className="text-xs text-gray-500">
                          (Please list any countries you are interested in for
                          studying or working abroad)
                        </p>
                      </div>
                      <div>
                        <Input
                          name="relev_expe"
                          type="textarea"
                          value={values?.relev_expe}
                          onChange={handleChange}
                          label="Relevant Experience or Certifications"
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Do you have any relevant experience or certifications
                          in your field? If yes, please specify)
                        </p>
                      </div>
                    </>
                  )}

                  {/* Career Consulting Ends */}

                  {/* Medical Consulting Starts */}

                  {values?.service == "medical consulting" && (
                    <>
                      <div>
                        <Input
                          name="age"
                          value={values?.age}
                          type="number"
                          onChange={handleChange}
                          label="age"
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Please enter your age)
                        </p>
                      </div>
                      <div>
                        <Input
                          name="med_history"
                          type="textarea"
                          value={values?.med_history}
                          onChange={handleChange}
                          label="Medical History"
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Please provide a brief overview of your medical
                          history)
                        </p>
                      </div>

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Area of Concern</InputLabel>

                        <Field
                          as="select"
                          name="med_area_concern"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {med_area_concern?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.med_area_concern && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.med_area_concern}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          (Please specify the area you need assistance with){" "}
                        </p>
                      </div>
                      <div className="">
                        <Input
                          name="med_symp_issues"
                          type="textarea"
                          value={values?.med_symp_issues}
                          onChange={handleChange}
                          label={`Specific Symptoms or Issues:`}
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Please describe any specific symptoms or issues you
                          are experiencing)
                        </p>
                      </div>
                      <div className="">
                        <Input
                          name="prev_treat_med"
                          type="textarea"
                          value={values?.prev_treat_med}
                          onChange={handleChange}
                          label={`Previous Treatments or Medications:`}
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Have you received any previous treatments or
                          medications for this issue? If yes, please specify)
                        </p>
                      </div>
                      <div className="">
                        <Input
                          name="curr_treat_med"
                          type="textarea"
                          value={values?.curr_treat_med}
                          onChange={handleChange}
                          label={`Current Medications:`}
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Are you currently taking any medications? If yes,
                          please list them)
                        </p>
                      </div>

                      <div className="">
                        <Input
                          name="allergies"
                          type="textarea"
                          value={values?.allergies}
                          onChange={handleChange}
                          label={`allergies:`}
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Do you have any known allergies? If yes, please
                          specify)
                        </p>
                      </div>
                      <div className="">
                        <Input
                          name="lifestyle_habbits"
                          type="textarea"
                          value={values?.lifestyle_habbits}
                          onChange={handleChange}
                          label={`Lifestyle and Habits:`}
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          (Please provide information about your lifestyle and
                          habits, such as diet, exercise, smoking, alcohol
                          consumption, etc.)
                        </p>
                      </div>
                    </>
                  )}

                  {/* Medical Consulting Ends */}

                  {/* it consulting Starts */}

                  {values?.service == "it consulting" && (
                    <>
                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>
                          Type of IT Consulting Service Needed:
                        </InputLabel>

                        <Field
                          as="select"
                          name="it_service_type"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {it_services?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.it_service_type && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.it_service_type}
                          </p>
                        )}
                      </div>

                      {values?.it_service_type == "other (please specify)" && (
                        <Input
                          name="other_it_service_type"
                          value={values?.other_it_service_type}
                          onChange={handleChange}
                          label="other IT Service (please specify)"
                          errors={errors}
                        />
                      )}

                      <div>
                        <Input
                          name="proj_desc"
                          type="textarea"
                          value={values?.proj_desc}
                          onChange={handleChange}
                          label="Project Description"
                          errors={errors}
                        />

                        <p className="text-xs text-gray-500">
                          Please provide a brief description of your project or
                          the IT consulting services you require.
                        </p>
                      </div>

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Current Project Status:</InputLabel>

                        <Field
                          as="select"
                          name="proj_status"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {proj_status?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.proj_status && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.proj_status}
                          </p>
                        )}
                      </div>

                      <div className="mt-2 relative">
                        {/* <label htmlFor="user_id">Choose a User:</label> */}
                        <InputLabel>Expected Start Date:</InputLabel>

                        <Field
                          as="select"
                          name="expect_start_date"
                          className={`${Inputdisplay} capitalize`}
                        >
                          <option value="">Select Service</option>

                          {proj_start_date?.map((name, i) => {
                            return (
                              <option key={i} value={name}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>

                        {errors?.expect_start_date && (
                          <p className="text-sm text-red-600 mt-2">
                            {errors?.expect_start_date}
                          </p>
                        )}
                      </div>
                      <div className="">
                        <Input
                          name="add_comm_q"
                          type="textarea"
                          value={values?.add_comm_q}
                          onChange={handleChange}
                          label={`Additional Comments or Questions:`}
                          errors={errors}
                        />
                        <p className="text-xs text-gray-500">
                          Please provide any additional information or specific
                          questions you have about our IT consulting services.
                        </p>
                      </div>
                    </>
                  )}

                  {/* it consulting Ends */}

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
                      label={`What are your career goals and objectives?`}
                      errors={errors}
                    />
                  </div>

                  <div className=" py-4 md:col-span-3 sm:col-span-2 col-span-1 ">
                    <hr />
                  </div>
                  <div
                    class="custom-file-container"
                    data-upload-id="file_cnic"
                  ></div>
                  <div
                    class="custom-file-container"
                    data-upload-id="file_passport"
                  ></div>
                  <div
                    class="custom-file-container"
                    data-upload-id="file_degrees"
                  ></div>
                  <div
                    class="custom-file-container"
                    data-upload-id="file_exp_letter"
                  ></div>
                  <div
                    class="custom-file-container"
                    data-upload-id="file_lang_cert"
                  ></div>
                  <div
                    class="custom-file-container"
                    data-upload-id="file_addit_docs"
                  ></div>
                  <CldUploadWidget
                    uploadPreset="consultation_docs"
                    onSuccess={(result, { widget }) => {
                      console.log("Upload Widget ", result);
                      setFieldValue("file_cnic", result?.info); // { public_id, secure_url, etc }
                      widget.close();
                    }}
                  >
                    {({ open }) => {
                      function handleOnClick() {
                        // setResource(undefined);
                        open();
                      }
                      return (
                        <button type="button" onClick={handleOnClick}>
                          Upload an Image
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                  <input type="file" onChange={(e) => handleSubmit(e)} />
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
