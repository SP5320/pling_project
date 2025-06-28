import React from "react";

interface PillButtonProps {
  label: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
}

const PillButton: React.FC<PillButtonProps> = ({ label, icon, selected, onClick }) => (
  <button
    className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition text-base font-medium shadow-sm focus:outline-none ${selected ? 'bg-yellow-400 text-white border-yellow-400' : 'bg-white text-gray-700 border-gray-200'}`}
    onClick={onClick}
    type="button"
  >
    {icon && <span className="text-xl">{icon}</span>}
    {label}
  </button>
);

export default PillButton; 