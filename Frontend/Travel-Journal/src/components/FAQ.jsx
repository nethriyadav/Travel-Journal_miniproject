"use client";
import React, { useState } from "react";

function FAQ() {
  const faqItems = [
    {
      question: "What is Wanderlust?",
      answer:
        "Wanderlust is a digital travel journal platform that helps you capture, organize, and share your travel memories. You can document your adventures with photos, notes, and location data, creating a beautiful record of your journeys around the world.",
    },
    {
      question: "Is Wanderlust free to use?",
      answer:
        "Wanderlust offers both free and premium plans. The free plan allows you to create basic journal entries with limited storage. Our premium plans offer additional features like unlimited storage, offline access, custom themes, and the ability to create printed photo books from your journals.",
    },
    {
      question: "Can I access my journal offline?",
      answer:
        "Yes, with our premium plan, you can download your journals for offline access. This is perfect for when you're traveling in areas with limited internet connectivity. Your changes will sync automatically when you reconnect to the internet.",
    },
    {
      question: "How do I add locations to my journal entries?",
      answer:
        "When creating a new entry, you can either manually enter a location or use our GPS integration to automatically tag your current location. You can also add locations by searching on the map or selecting from your previously visited places.",
    },
    {
      question: "Can I share my travel journals with friends and family?",
      answer:
        "Absolutely! You can share individual entries or entire journals with specific people via email or generate a private link. You can also make certain journals public if you wish to share your adventures with a wider audience or keep them completely private.",
    },
    {
      question: "How do I organize my travel memories?",
      answer:
        "Wanderlust offers multiple ways to organize your memories. You can create separate journals for different trips, use tags to categorize entries, filter by location or date, and create custom collections of your favorite moments. Our search feature also helps you quickly find specific memories.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "We take your privacy seriously. Your journal entries are private by default and only visible to you unless you choose to share them. We use industry-standard encryption to protect your data, and you have complete control over your privacy settings.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 max-w-full w-full">
      <h2 className="text-3xl font-medium leading-tight text-slate-700 mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-slate-700 hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="px-6 py-3.5 text-sm font-medium leading-none bg-blue-600 rounded-2xl text-white hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
