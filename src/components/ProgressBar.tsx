import React from "react";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => (
  <div className="px-4">
    <div className="w-full h-1 bg-gray-200 rounded-full">
      <div
        className="h-1 bg-yellow-400 rounded-full transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

export default ProgressBar; 