import React from "react";

function MoodSelector({ selected, setSelected }) {
  const moodOptions = [
    { emoji: "😊", text: "happy" },
    { emoji: "🤩", text: "excited" },
    { emoji: "🥹", text: "nostalgic" },
    { emoji: "😌", text: "peaceful" },
    { emoji: "🧭",text: "adventurous" },
    { emoji: "😲", text: "amazed" },
    { emoji: "😴", text: "tired" },
    { emoji: "🤔", text: "reflective" },
  ];

  const toggleMood = (mood) => {
    setSelected((prev) =>
      prev.includes(mood)
        ? prev.filter((m) => m !== mood)
        : [...prev, mood]
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mt-3 max-w-full text-slate-700 w-[727px]">
        {moodOptions.map((mood, index) => (
          <MoodButton
            key={index}
            emoji={mood.emoji}
            text={mood.text}
            isSelected={selected.includes(mood.text)}
            onClick={() => toggleMood(mood.text)}
          />
        ))}
      </div>
    </div>
  );
}

function MoodButton({ emoji, text, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border font-medium transition-all duration-200 ease-in-out
        ${
          isSelected
            ? "bg-blue-100 border-blue-400 text-blue-700"
            : "bg-gray-50 border-slate-200 text-slate-700 hover:bg-slate-200 hover:border-slate-400"
        }
      `}
    >
      {emoji && <span className="text-lg">{emoji}</span>}
      <span>{text}</span>
    </button>
  );
}

export default MoodSelector;
