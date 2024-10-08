"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSpinner,
} from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted

    try {
      const response = await axios.post(
        "https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/glassfrog",
        { email }
      );

      if (response.status === 200) {
        setSuccess("Thank You for Subscribing! ");
        setEmail("");
        setError("");
      } else {
        setError("Subscription failed. Please try again.");
      }
    } catch (error) {
      setError("Subscription failed. Please try again.");
    }

    setLoading(false); // Set loading state to false after the request is completed
  };

  return (
    <>
      <footer className="bg-white pt-16 pb-16">
        <div className=" w-full max-w-7xl mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 w-full md:w-2/4 sm:w-2/4">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1 ">
                {/* <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl ">
                    SUBSCRIBE NOW!
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-950">
                    Remember to subscribe to our newsletter to stay up to date
                    with our latest news and updates!
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex max-w-md gap-x-4"
                  >
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                    >
                      {loading ? (
                        <FaSpinner className="animate-spin mr-2" />
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </form>
                  {error && <p className="mt-4 text-red-500">{error}</p>}
                  {success && <p className="mt-4 text-green-500">{success}</p>}
                </div> */}
              </div>
              <img
                src="/logo.svg"
                className="h-32 me-3 overflow-hidden"
                alt="Glassfrog Logo"
                style={{ marginLeft: "-30px !important" }}
              />
              
            </div>
            <div className="flex w-full md:w-2/4 sm:w-2/4">
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">
                  Location
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <p>
                      <b>United Kingdom :-</b> ​27 OLD Gloucester Street,
                      London, United Kingdom WC1N 3AX
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      <b>India:-</b> ​​Jumpstart Tower, 2nd floor, Haridwar
                      Bypass Rd, opp. Nilaya Hills, Saraswati Vihar, Ajabpur
                      Kalan, Dehradun, Uttarakhand 248001.
                    </p>
                  </li>

                  <h2 className="mb-3 mt-6 text-sm font-semibold text-gray-900 uppercase ">
                    Phone
                  </h2>

                  <li>
                    <p>+91 9084712335, +91 9084712325</p>
                  </li>
                  <h2 className="mb-3 mt-6 text-sm font-semibold text-gray-900 uppercase ">
                    Email us
                  </h2>

                  <li>
                    <p>support@glassfrog.design</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <hr className="mt-6 border-gray-200 sm:mx-auto  lg:mt-8" />

          <div className="flex flex-row gap-4 font-semibold my-3 justify-center text-[#6b7280]">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms and Conditions</a>
            <a href="/refund">Refund Policy</a>
            <a href='/contact'>Contact Us</a>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
              © 2024{" "}
              <a href="https://glassfrogtech.com" className="hover:underline">
                Glassfrog Technology
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-10">
              <a
                href="https://www.facebook.com/GlassfrogTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/glassfrog-technologies/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-700 transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/glassfrog_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
