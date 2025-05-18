"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contactez-moi
          </h2>
          <p className="text-[#ADB7BE]">
            Discutons ensemble ! Remplis le formulaire et je reviendrai vers toi rapidement.
          </p>
        </motion.div>

        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 text-green-500 font-semibold text-center bg-green-800/10 border border-green-600 rounded-lg p-4"
          >
            ✅ Message envoyé avec succès !
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 bg-[#1f1f1f] p-8 rounded-2xl shadow-xl"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-2">
              Nom
            </label>
            <div className="flex items-center gap-2 bg-[#121212] border border-gray-600 rounded-md px-3">
              <FiUser className="text-gray-400" />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ton nom"
                className="w-full bg-transparent p-3 focus:outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <div className="flex items-center gap-2 bg-[#121212] border border-gray-600 rounded-md px-3">
              <FiMail className="text-gray-400" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@exemple.com"
                className="w-full bg-transparent p-3 focus:outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <div className="flex gap-2 bg-[#121212] border border-gray-600 rounded-md px-3">
              <FiMessageCircle className="mt-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Ton message..."
                className="w-full bg-transparent p-3 focus:outline-none text-white resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-lg"
          >
            Envoyer
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
