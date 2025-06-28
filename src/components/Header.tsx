import React from "react";

interface HeaderProps {
  step: number;
  onBack?: () => void;
  canGoBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ step, onBack, canGoBack }) => (
  <div className="flex items-center justify-between px-4 pt-6 pb-2">
    <button
      className="text-gray-400 text-2xl disabled:opacity-40"
      onClick={onBack}
      disabled={!canGoBack}
    >
      ←
    </button>
    <span className="text-gray-400 font-medium">Step {step}</span>
    <button className="text-gray-400 font-medium">Skip question</button>
  </div>
);

export default Header; 