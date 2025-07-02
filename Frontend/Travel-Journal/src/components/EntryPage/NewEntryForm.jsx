"use client";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MoodSelector from "./MoodSelector";
import PhotoUploader from "./PhotoUploader";
import { createJourney, uploadCoverPhoto } from "../../api/journeyDetail";
import { JournalContext } from "../../context/JournalContext";
import MapSelector from "./MapSelector";
import LocationPicker from "./LocationPicker";

function NewEntryForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [locationName, setLocationName] = useState("");
  const [story, setStory] = useState("");
  const [feelings, setFeelings] = useState([]);
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isPublic, setIsPublic] = useState(true);

  // const { addJournal } = useContext(JournalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photoUrl = "";

      // Upload cover image if selected
      if (photos && typeof photos !== "string") {
        photoUrl = await uploadCoverPhoto(photos);
      } else if (typeof photos === "string") {
        photoUrl = photos; // fallback if already a string
      }

      const journeyData = {
        title,
        location: {
          name: locationName,
          description,
          coordinates: [coordinates.lng, coordinates.lat],
        },
        story,
        feelings,
        photos: photoUrl,
        isPublic,
      };

      await createJourney(journeyData);
      console.log(journeyData);

      navigate("/");
      setTimeout(() => window.location.reload(), 100);
    } catch (err) {
      console.error("Error creating journey:", err);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const journeyData = {
  //     title,
  //     location: { name: location },
  //     story,
  //     feelings,
  //     photos,
  //   };

  //   try {
  //     await createJourney(journeyData);
  //     navigate("/");
  //   } catch (err) {
  //     console.error("Error creating journey:", err);
  //   }
  // };

  return (
    <main className="flex flex-col items-start self-center mt-14 max-w-full text-sm w-[768px] max-md:mt-10">
      <form onSubmit={handleSubmit} className="w-full">
        <FormField
          label="Title"
          inputElement={
            <input
              type="text"
              placeholder="Name this memory..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="overflow-hidden self-stretch w-full px-3.5 py-3.5 mt-3 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
            />
          }
        />

        <FormField
          label="Location"
          inputElement={
            <div className="flex overflow-hidden flex-wrap gap-2.5 self-stretch px-3 py-2.5 mt-3 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3669add6f9e929f669bbd5282de9f2cea970d461?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b"
                className="object-contain shrink-0 w-5 aspect-square"
                alt="Location icon"
              />
              <input
                type="text"
                placeholder="Where were you?"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                className="flex-auto w-[711px] bg-transparent border-none outline-none"
              />
            </div>
          }
        />

        {/* <FormField
          label="Search Location"
          inputElement={
            <LocationPicker
              onLocationSelect={({ lat, lng, name }) => {
                setLocationName(name);
                setCoordinates({ lat, lng });
              }}
            />
          }
        /> */}

        <FormField
          label="Location Description"
          inputElement={
            <textarea
              placeholder="Write about location"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="overflow-hidden self-stretch w-full px-3.5 pt-3.5 pb-10 mt-2.5 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
            />
          }
        />

        {/* <FormField
          label="Select Location on Map"
          inputElement={
            <MapSelector
              onLocationSelect={({ lat, lng, name }) => {
                setLocationName(name); // Auto-fill location name
                setCoordinates({ lat, lng }); // Set lat/lng
              }}
            />
          }
        /> */}

        {/* <FormField
          label="Search or Click to Select Location"
          inputElement={
            <LocationPicker
              onLocationSelect={({ lat, lng, name }) => {
                setLocationName(name);
                setCoordinates({ lat, lng });
              }}
            />
          }
        /> */}

        {/* <FormField
          label="Search or Click to Select Location"
          inputElement={
            <LocationPicker
              onLocationSelect={({ name, address, coordinates }) => {
                setLocationName(address || name);
                setCoordinates({ lat: coordinates[1], lng: coordinates[0] }); // lat/lng flip
              }}
            />
          }
        /> */}

        <FormField
          label="Search or Click to Select Location"
          inputElement={
            <LocationPicker
              onLocationSelect={({ name, address, coordinates }) => {
                setSelectedLocation({
                  name: name,
                  address: address,
                  coordinates,
                });
                setCoordinates({
                  lat: coordinates[1],
                  lng: coordinates[0],
                });
              }}
            />
          }
        />

        {selectedLocation && (
          <p className="text-xs text-gray-500 italic mb-4 ml-1">
            📍 Selected: {selectedLocation.address}
          </p>
        )}

        {/* <FormField
          label="Search or Click to Select Location"
          inputElement={
            <MapSelector
              onLocationSelect={({ lat, lng, name }) => {
                setLocationName(name);
                setCoordinates({ lat, lng });
              }}
            />
          }
        /> */}

        <FormField
          label="Your story"
          inputElement={
            <textarea
              placeholder="Write about your experience..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="overflow-hidden self-stretch w-full px-3.5 pt-3.5 pb-36 mt-2.5 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
            />
          }
        />

        <FormField
          label="How did you feel?"
          inputElement={
            <MoodSelector selected={feelings} setSelected={setFeelings} />
          }
        />

<FormField
  label="Visibility"
  inputElement={
    <div className="flex gap-4 mt-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="visibility"
          value="public"
          checked={isPublic}
          onChange={() => setIsPublic(true)}
          className="accent-blue-600"
        />
        Public
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="visibility"
          value="private"
          checked={!isPublic}
          onChange={() => setIsPublic(false)}
          className="accent-blue-600"
        />
        Private
      </label>
    </div>
  }
/>


        <PhotoUploader photoFile={photos} setPhotoFile={setPhotos} />

        <div className="flex gap-3 self-end mt-12 text-center">
          <button
            type="button"
            className="px-5 py-4 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-700"
            onClick={() => navigate("/")}
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-4 py-3.5 bg-blue-600 rounded-2xl text-slate-50"
          >
            Save Entry
          </button>
        </div>
      </form>
    </main>
  );
}

function FormField({ label, inputElement }) {
  return (
    <div className="w-full mb-6">
      <label className="text-base text-slate-700">{label}</label>
      {inputElement}
    </div>
  );
}

export default NewEntryForm;
