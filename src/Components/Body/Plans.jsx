import React, { useState } from "react";
import "./Styles/Plans.css";

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: 1,
      title: "Basic",
      price: 75,
      features: [
        "Ut morbi tincidunt augue",
        "Viverra orci sagittis eu volutpat",
        "Leo urna molestie at elementum",
        "Diam quam nulla porttitor massa",
        "Felis donec et odio pellentesque",
        "Cras tincidunt lobortis feugiat",
      ],
      icon: "📷",
    },
    {
      id: 2,
      title: "Premium",
      price: 125,
      features: [
        "A elementum eros finibus",
        "Sed blandit nullae leo congue",
        "Cras gravida urna malesuada",
        "A elementum eros finibus",
        "Sed blandit nullae leo congue",
        "A elementum eros finibus",
      ],
      icon: "📸",
      highlight: true,
    },
    {
      id: 3,
      title: "Advanced",
      price: 100,
      features: [
        "Cras gravida urna malesuada",
        "A elementum eros finibus",
        "Sed blandit nullae leo congue",
        "Cras gravida urna malesuada",
        "Sed blandit nullae leo congue",
      ],
      icon: "📹",
    },
  ];

  return (
    <div className="pricing-plans">
      <h2>
        Choose <span>Your Plan</span>
      </h2>

      <div className="billing-cycle">
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => setBillingCycle("monthly")}
        >
          MONTHLY
        </button>
        <button
          className={billingCycle === "yearly" ? "active" : ""}
          onClick={() => setBillingCycle("yearly")}
        >
          YEARLY
        </button>
      </div>

      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-wrapper">
            {plan.highlight && (
              <p className="amala">
                Amet aliquam id diam maecenas. Ut eu sem integer vitae justo
                eget.
              </p>
            )}
            <div className={`plan-card ${plan.highlight ? "highlight" : ""}`}>
              <div className="plan-icon">{plan.icon}</div>
              <h3>{plan.title}</h3>
              <p className="price text-center">
                ${plan.price} <br></br>
                <span>Per Month</span>
              </p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="purchase-btn">Purchase Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
