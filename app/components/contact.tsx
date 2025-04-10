"use client";

import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/xrbprgwb", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Erreur lors de l'envoi. Réessaie plus tard.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#121212] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-[#ADB7BE] mb-12">
          Let's talk! Just fill out the form below and I’ll get back to you.
        </p>

        {success && (
          <p className="mb-4 text-green-500 font-semibold">
            Message sent successfully!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left bg-[#1f1f1f] p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full p-3 rounded-md bg-[#121212] border border-gray-600 text-white focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-[#121212] border border-gray-600 text-white focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Your message..."
              className="w-full p-3 rounded-md bg-[#121212] border border-gray-600 text-white focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
