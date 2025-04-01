import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    // First, send the email to the admin (or whoever is receiving the form data)
    emailjs
      .sendForm(
        'service_dekt8zq', // Replace with your EmailJS service ID
        'template_1xivm46', // Replace with your EmailJS template ID for admin notification
        form.current, // Reference to your form
        'l_tjbJRDe4SLSw8hS' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          

            emailjs
              .sendForm(
                'service_dekt8zq', // Replace with your EmailJS service ID
                'template_pntcc6t', // Replace with your template ID for the auto-reply
                form.current, // Reference to your form
                'l_tjbJRDe4SLSw8hS' // Replace with your EmailJS public key
              )
              .then(
                (result) => {
                  console.log("Automatic reply sent", result.text);
                  toast.success("Email sent successfully and an automatic reply has been sent!");
                },
                (error) => {
                  console.log("Automatic reply error", error.text);
                  toast.error("Failed to send the automatic reply.");
                }
              );
          
              form.current.reset();
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the email.");
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as emailjs templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email" // Ensure the name matches the email field
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>

          {/* Social Media Section */}
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
