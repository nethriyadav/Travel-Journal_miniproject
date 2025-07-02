"use client";
import * as React from "react";
import NewEntryHeader from "./NewEntryHeader";
import NewEntryForm from "./NewEntryForm";
import BottomNavigation from "../BottomNavigation";

function NewEntry() {
  return (
    <div>
      <section className="flex flex-col font-medium bg-white pb-20">
        <NewEntryForm />
      </section>
      <BottomNavigation />
    </div>
  );
}

export default NewEntry;
