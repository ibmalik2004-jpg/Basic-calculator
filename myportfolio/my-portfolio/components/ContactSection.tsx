"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("Success! Message sent.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 px-4 max-w-xl mx-auto text-white">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Get In <span className="text-blue-500">Touch</span>
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">Name</label>
          <input 
            name="name" 
            type="text" 
            required 
            placeholder="Your Name"
            className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="your@email.com"
            className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">Message</label>
          <textarea 
            name="message" 
            rows={4} 
            required 
            placeholder="How can I help you?"
            className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500" 
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 font-medium p-2.5 rounded-lg transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center text-sm text-slate-400 mt-2">{status}</p>}
      </form>
    </section>
  );
}