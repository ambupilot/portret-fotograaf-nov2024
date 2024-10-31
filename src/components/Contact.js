// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact</h2>
      <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Naam
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Jouw naam"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Jouw e-mailadres"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Bericht
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Jouw bericht"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition duration-300"
        >
          Verstuur
        </button>
      </form>
    </div>
  );
}

export default Contact;
