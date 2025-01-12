import { useEffect, useState } from "react";

const HighLowIndicator = ({ currentPrice, high, low }) => {
  const [colorValue, setColorValue] = useState(null);

  useEffect(() => {
    let total = high - low;

    let colorPercentage = ((high - currentPrice) * 100) / total;

    setColorValue(Math.ceil(colorPercentage));
  }, [currentPrice, high, low]);

  return (
    <div className="flex  ">
      <span
        className="bg-red-600 h-1.5 rounded-l-lg w-[50%]"
        style={{ width: `${100 - colorValue}%` }}
      ></span>
      <span
        className="bg-green-600 h-1.5 rounded-r-lg w-[50%]"
        style={{ width: `${colorValue}%` }}
      ></span>
    </div>
  );
};

export default HighLowIndicator;
