import React from "react";

interface ContinueButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ disabled, onClick, children }) => (
  <button
    className={`w-full py-4 rounded-xl text-lg font-semibold transition ${disabled ? 'bg-blue-100 text-blue-400 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ContinueButton; 