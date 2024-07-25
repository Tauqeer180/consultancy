import * as Yup from "yup";
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
  other_acad_level: Yup.string().when(["service", "cur_acad_level"], {
    is: (service, cur_acad_level) =>
      service == "education consulting" &&
      cur_acad_level == "other (please specify)",
    then: (schema) => schema.required("Required"),
  }),
  quest_or_conc: Yup.string(),
  additional_info: Yup.string().when("service", {
    is: "education consulting",
    then: (schema) => schema.required("Required"),
  }),

  // Edu consulting Ends

  // Career Consulting Start

  field_of_study: Yup.string().when("service", {
    is: "career consulting",
    then: (schema) => schema.required("Required"),
  }),
  career_interest: Yup.string().when("service", {
    is: "career consulting",
    then: (schema) => schema.required("Required"),
  }),
  other_career_interest: Yup.string().when(["service", "career_interest"], {
    is: (service, cur_acad_level) =>
      service == "career consulting" &&
      cur_acad_level == "other (please specify)",
    then: (schema) => schema.required("Required"),
  }),
  preferred_countries: Yup.string().when("service", {
    is: "career consulting",
    then: (schema) => schema.required("Required"),
  }),
  relev_expe: Yup.string(),

  // Career Consulting Ends

  // Medical Cu=onsulting STarts

  age: Yup.number().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),

  med_history: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  med_area_concern: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  med_symp_issues: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  prev_treat_med: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  curr_treat_med: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  allergies: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  lifestyle_habbits: Yup.string().when("service", {
    is: "medical consulting",
    then: (schema) => schema.required("Required"),
  }),
  // Medical Consulting Ends

  // IT Services Start

  it_service_type: Yup.string().when("service", {
    is: "it consulting",
    then: (schema) => schema.required("Required"),
  }),
  other_it_service_type: Yup.string().when(["service", "it_service_type"], {
    is: (service, it_service_type) =>
      service == "it consulting" && it_service_type == "other (please specify)",
    then: (schema) => schema.required("Required"),
  }),
  proj_desc: Yup.string().when("service", {
    is: "it consulting",
    then: (schema) => schema.required("Required"),
  }),
  proj_status: Yup.string().when("service", {
    is: "it consulting",
    then: (schema) => schema.required("Required"),
  }),
  expect_start_date: Yup.string().when("service", {
    is: "it consulting",
    then: (schema) => schema.required("Required"),
  }),
  add_comm_q: Yup.string().when("service", {
    // Additional Comments and Questions
    is: "it consulting",
    then: (schema) => schema.required("Required"),
  }),
  // IT Services ENDs Here

  motivations: Yup.string().required("Required"),
  goals: Yup.string().required("Required"),
});
