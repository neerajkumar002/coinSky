import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomTooltip = ({ payload, label, active, currency = "usd" }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div>
        <p className="text-[#FFB9B3]">
          {`${label} : ${new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency,
          }).format(payload[0].value)}`}
        </p>
      </div>
    );
  }
  return null;
};

const Chart = ({ data, type }) => {
  const [currency, setCurrency] = useState("usd");
  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#FFB9B3"
          strokeWidth={"1px"}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip
          content={<CustomTooltip />}
          currency={currency}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
