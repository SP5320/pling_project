import React, { useState } from "react";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import OptionCard from "./components/OptionCard";
import PillButton from "./components/PillButton";
import ContinueButton from "./components/ContinueButton";

const sportsOptions = [
  {
    name: "Basketball",
    practices: 4,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Football",
    practices: 6,
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=facearea&w=256&q=80"
  },
  {
    name: "Tennis",
    practices: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80"
  }
];

const workoutOptions = [
  { name: "Strenght training", icon: "🏋️" },
  { name: "Cardio", icon: "💓" },
  { name: "Yoga", icon: "🧘" },
  { name: "Low Impact exercise", icon: "🚶" }
];

const trainPlaceOptions = [
  { name: "Outdoor", icon: "🏋️" },
  { name: "Indoor", icon: "🏢" },
  { name: "Home", icon: "🏠" },
  { name: "At the gym", icon: "🏋️" },
  { name: "In the park", icon: "🚶" }
];

export default function Survey() {
  const [step, setStep] = useState(2);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedWorkouts, setSelectedWorkouts] = useState<string[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  // Step 2 logic
  const toggleSelectSport = (name: string) => {
    setSelectedSports((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  // Step 3 logic
  const toggleSelectWorkout = (name: string) => {
    setSelectedWorkouts((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  // Step 4 logic
  const toggleSelectPlace = (name: string) => {
    setSelectedPlaces((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  // Progress bar percent by step
  const getProgress = () => {
    if (step === 2) return 30;
    if (step === 3) return 50;
    if (step === 4) return 70;
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header step={step} onBack={() => setStep((s) => Math.max(2, s - 1))} canGoBack={step > 2} />
      <ProgressBar percent={getProgress()} />
      {step === 2 && (
        <div className="px-4 mt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">First up, which sports do you enjoy the most?</h1>
          <p className="text-gray-400 mb-4">Select all that applies:</p>
          <div className="space-y-4">
            {sportsOptions.map((option) => (
              <OptionCard
                key={option.name}
                name={option.name}
                practices={option.practices}
                image={option.image}
                selected={selectedSports.includes(option.name)}
                onClick={() => toggleSelectSport(option.name)}
              />
            ))}
          </div>
          <div className="mt-auto px-0 py-6">
            <ContinueButton
              disabled={!selectedSports.length}
              onClick={() => setStep(3)}
            >
              Continue
            </ContinueButton>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="px-4 mt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Which sport activity gives the best workout?</h1>
          <p className="text-gray-400 mb-4">Select all that applies:</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {workoutOptions.map((option) => (
              <PillButton
                key={option.name}
                label={option.name}
                icon={option.icon}
                selected={selectedWorkouts.includes(option.name)}
                onClick={() => toggleSelectWorkout(option.name)}
              />
            ))}
          </div>
          <div className="mt-auto px-0 py-6">
            <ContinueButton
              disabled={!selectedWorkouts.length}
              onClick={() => setStep(4)}
            >
              Continue
            </ContinueButton>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="px-4 mt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Where do you enjoy the most to train?</h1>
          <p className="text-gray-400 mb-4">Select all that applies:</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {trainPlaceOptions.map((option) => (
              <PillButton
                key={option.name}
                label={option.name}
                icon={option.icon}
                selected={selectedPlaces.includes(option.name)}
                onClick={() => toggleSelectPlace(option.name)}
              />
            ))}
          </div>
          <div className="mt-auto px-0 py-6">
            <ContinueButton
              disabled={!selectedPlaces.length}
              onClick={() => setStep(5)}
            >
              Continue
            </ContinueButton>
          </div>
        </div>
      )}
    </div>
  );
} 