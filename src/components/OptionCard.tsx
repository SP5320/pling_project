import React from "react";

interface OptionCardProps {
  name: string;
  practices: number;
  image: string;
  selected: boolean;
  onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ name, practices, image, selected, onClick }) => (
  <div
    className={`flex items-center justify-between p-4 rounded-2xl shadow-sm border transition cursor-pointer ${selected ? 'bg-yellow-400 border-yellow-400' : 'bg-white border-transparent'}`}
    onClick={onClick}
  >
    <div>
      <div className={`font-semibold text-lg ${selected ? 'text-white' : 'text-gray-800'}`}>{name}</div>
      <div className={`flex items-center mt-1 text-sm ${selected ? 'text-white' : 'text-blue-600'}`}>
        <span className="mr-2">
          <span className={`inline-block w-3 h-3 rounded-full border-2 ${selected ? 'border-white bg-yellow-300' : 'border-blue-600 bg-white'}`}></span>
        </span>
        {practices} available practices
      </div>
    </div>
    <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow" />
  </div>
);

export default OptionCard; 