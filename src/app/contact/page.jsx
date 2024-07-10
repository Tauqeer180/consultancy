import React from "react";

export default function page() {
  return (
    <div className=" max-w-7xl lg:px-11 sm:px-4 mx-auto pb20">
      <h2 className="sm:pb-11 pb-2 sm:pt-20 pt-16 text-center md:text-6xl sm:text-4xl text-3xl uppercase tracking-wider">
        contact us
      </h2>
      <div className="grid sm:grid-cols-2">
        <div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27247.291416173863!2d73.03060807171764!3d31.389005700737183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d49afde6e87%3A0x59de94db4a123a7b!2sSamanabad%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1720508220962!5m2!1sen!2sus"
              className="w-full"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <div className="w-full p-4 space-y-4">
            <div className="bg-secondary text-white p-4 rounded-lg shadow">
              <h5 className="text-h5">Address</h5>
              <p>500 Terry Francine Street, San Francisco, CA 94158</p>
            </div>
            <div className="bg-accent p-4 rounded-lg shadow">
              <h3 className="text-h5">Contact</h3>
              <p className="text-paragraph">
                Talk to us and see how we can work: 1800-10-0147
              </p>
            </div>
            <div className="bg-accent p-4 rounded-lg shadow">
              <h5 className="text-h5">Email</h5>
              <p className="text-paragraph">
                We’re usually replying within 24 hours: pagodex1234@gmail.com
              </p>
            </div>
            <div className="bg-accent p-4 rounded-lg shadow">
              <h5 className="text-h5">Working Hours</h5>
              <p className="text-paragraph">
                Mon to Sat - 10 am to 7 pm
                <br />
                Sunday - 11 am to 5 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
