import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingIptions = [
    {
      id: 1,
      name: "Free",
      price: "0.0",
      benefits: [
        "lifetime free",
        "unlimited deals",
        "localized deals",
        "fatastic deals",
        "crazy deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 8.99,
      benefits: [
        "everything on free ",
        "unlimited deals",
        "localized deals",
        "fatastic deals",
        "crazy deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 17.89,
      benefits: [
        "everything on regular ",
        "unlimited deals",
        "localized deals",
        "fatastic deals",
        "crazy deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h2 className="text-6xl font-mono text-white">Best Deals of the Town!</h2>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingIptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
