import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const PricingOption = (props) => {
  const { name, price } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl">{price}</span>
        <span className="text-xl text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benefits:</h3>
        <p>
          <CheckCircleIcon className="w-4 h-4 text-green-500"></CheckCircleIcon>{" "}
        </p>
      </div>
    </div>
  );
};

export default PricingOption;
