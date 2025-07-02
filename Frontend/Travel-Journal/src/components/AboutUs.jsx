"use client";
import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="py-12 px-4 max-w-full w-full">
      <h2 className="text-3xl font-medium leading-tight text-slate-700 mb-8 text-center">
        About Travel Journal
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team of travelers creating Wanderlust"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-medium text-slate-700 mb-4">
              Our Story
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Travel JOurnal is a shared passion for travel and
              storytelling. Our founders, avid travelers themselves, found that
              traditional travel journals couldn't capture the richness of their
              experiences, while social media platforms weren't private or
              organized enough for meaningful memory preservation.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Travel JOurnal is a shared passion for travel and
              storytelling. Our founders, avid travelers themselves, found that
              traditional travel journals couldn't capture the richness of their
              experiences, while social media platforms weren't private or
              organized enough for meaningful memory preservation.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Travel JOurnal is a shared passion for travel and
              storytelling. Our founders, avid travelers themselves, found that
              traditional travel journals couldn't capture the richness of their
              experiences, while social media platforms weren't private or
              organized enough for meaningful memory preservation.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Travel JOurnal is a shared passion for travel and
              storytelling. Our founders, avid travelers themselves, found that
              traditional travel journals couldn't capture the richness of their
              experiences, while social media platforms weren't private or
              organized enough for meaningful memory preservation.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Travel JOurnal is a shared passion for travel and
              storytelling. Our founders, avid travelers themselves, found that
              traditional travel journals couldn't capture the richness of their
              experiences, while social media platforms weren't private or
              organized enough for meaningful memory preservation.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Travel JOurnal is a shared passion for travel and
              storytelling. Our founders, avid travelers themselves, found that
              traditional travel journals couldn't capture the richness of their
              experiences, while social media platforms weren't private or
              organized enough for meaningful memory preservation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In 2018, we set out to create a digital solution that would help
              travelers document their journeys in a beautiful, organized way
              while maintaining the personal touch of a traditional journal.
              Today, Wanderlust helps thousands of explorers around the world
              capture their adventures and preserve their most precious travel
              memories.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-medium text-slate-700 mb-4 text-center">
            Our Mission
          </h3>
          <p className="text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
            We believe that travel changes us. It broadens our perspectives,
            challenges our assumptions, and creates memories that last a
            lifetime. Our mission is to help you preserve these transformative
            experiences in a meaningful way, so you can revisit your journeys
            and share your stories for years to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-slate-700 mb-2">Create</h4>
            <p className="text-slate-600">
              Easily document your travels with photos, notes, and location
              data. Our intuitive interface makes journaling a joy, not a chore.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-slate-700 mb-2">
              Organize
            </h4>
            <p className="text-slate-600">
              Keep your memories structured by trip, location, or custom
              collections. Find any memory with powerful search and filtering
              tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-slate-700 mb-2">Share</h4>
            <p className="text-slate-600">
              Choose what to keep private and what to share with loved ones.
              Create beautiful visual stories from your adventures.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-medium text-slate-700 mb-4">
            Join Our Community
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Become part of a global community of travelers who are passionate
            about documenting their journeys and sharing their stories. Start
            your digital travel journal today!
          </p>
          <Link className="px-6 py-3.5 text-sm font-medium leading-none bg-blue-600 rounded-2xl text-white hover:bg-blue-700 transition-colors" to="/login">
            Start Your Journal
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
