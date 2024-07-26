import mongoose from "mongoose";
const AppointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    high_qualification: {
      type: String,
    },
    de_lang_level: {
      type: String,
    },
    en_lang_level: {
      type: String,
    },
    visa_country: {
      type: String,
    },
    visa_service_type: {
      type: String,
    },

    // Visa Consulting Ends

    // Edu Consulting Starts

    edu_background: {
      type: String,
    },
    edu_interest: {
      type: String,
    },
    edu_interest_other: {
      type: String,
    },
    cur_acad_level: {
      type: String,
    },
    other_acad_level: {
      type: String,
    },
    quest_or_conc: {
      // Question or Concern
      type: String,
    },
    additional_info: {
      type: String,
    },
    // Edu Consulting Ends
    //   Career Consulting Start

    field_of_study: {
      type: String,
    },
    career_interest: {
      type: String,
    },
    other_career_interest: {
      type: String,
    },
    preferred_countries: {
      type: String,
    },
    relev_expe: {
      type: String,
    },

    // Career consulting Ends

    // Medical consulting Starts

    age: {
      type: String,
    },
    med_history: {
      type: String,
    },
    med_area_concern: {
      type: String,
    },
    med_symp_issues: {
      type: String,
    },
    prev_treat_med: {
      type: String,
    },
    curr_treat_med: {
      type: String,
    },
    allergies: {
      type: String,
    },
    lifestyle_habbits: {
      type: String,
    },
    // Medical COnsulting Ends,
    // IT Consulting Starts

    it_service_type: {
      type: String,
    },
    other_it_service_type: {
      type: String,
    },
    proj_desc: {
      type: String,
    },
    proj_status: {
      type: String,
    },
    expect_start_date: {
      type: String,
    },
    add_comm_q: {
      // Additional Comments and Questions
      type: String,
    },

    // IT Consulting Ends
    motivations: {
      type: String,
    },
    goals: {
      type: String,
    },
    file_cnic: {
      type: String,
    },
    file_passport: {
      type: String,
    },
    file_degrees: {
      type: String,
    },
    file_exp_letter: {
      // Experience Letter
      type: String,
    },
    file_lang_cert: {
      type: String,
    },
    file_addit_docs: {
      type: String,
    },

    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Appointments ||
  mongoose.model("Appointments", AppointmentSchema);
