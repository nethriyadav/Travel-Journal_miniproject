"use client";
import React, { useState } from "react";

function PhotoUploader({ setPhotoFile }) {
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file); // send actual file to parent for FormData

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result); // base64 for preview only
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-7 mt-8 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200 shadow text-slate-700 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[210px]">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-xl mb-4"
          />
        ) : (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e565f14bfcc92b40c412d998f2c74c049e167f?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b"
            className="object-contain w-8 aspect-square"
            alt="Upload icon"
          />
        )}

        <h3 className="mt-6 text-base">Add photos to your entry</h3>
        <p className="self-stretch mt-4 leading-none text-slate-600">
          Drag and drop or click to upload
        </p>
        <button
         type="button"
          onClick={triggerUpload}
          className="px-5 py-3.5 mt-2.5 leading-none bg-gray-50 rounded-2xl border border-slate-200"
        >
          Choose photo
        </button>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </section>
  );
}

export default PhotoUploader;
