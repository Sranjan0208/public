import { useState } from "react";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import "../styles/Contact.css";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      // You can implement your submit logic here, like sending data to the server.

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="p-4 md:p-8 mx-auto max-w-screen-lg">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left side contact info */}
        <div className="space-y-6 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold">How can we help?</h2>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-xl" />
            <p className="text-sm md:text-base">+91-9910623181</p>
          </div>
          <div className="flex items-center space-x-4">
            <IoMdMailOpen className="text-xl" />
            <a href="mailto:support@moneyflo.ai" className="text-blue-600">
              support@moneyflo.ai
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/company/moneyfloai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-100 px-4 py-2 rounded-lg"
            >
              <FaLinkedin className="mr-2 text-xl" />
              <span className="font-semibold text-sm md:text-base">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/moneyfloai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-100 px-4 py-2 rounded-lg"
            >
              <FaInstagram className="mr-2 text-xl" />
              <span className="font-semibold text-sm md:text-base">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-gray-300"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg border-gray-300"
                />
              </div>
            </div>
            <div className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mt-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg border-gray-300 h-32 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700"
                id="report-button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
