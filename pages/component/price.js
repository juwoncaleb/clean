// components/PricingSection.jsx
export default function PricingSection() {
    const plans = [
      {
        price: "$19",
        title: "Basic cleaning package",
        description: "Ideal for regular maintenance of your home or office.",
        features: [
          "Dusting",
          "Vacuuming",
          "Sweeping and mopping",
          "Surface cleaning",
        ],
        buttonColor: "bg-blue-600 text-white",
      },
      {
        price: "$59",
        title: "Standard cleaning package",
        description: "Includes all services in the Basic package plus additional services.",
        features: [
          "Everything in basic cleaning",
          "Bathroom scrubbing",
          "Kitchen appliance cleaning",
          "Baseboard and trim cleaning",
        ],
        highlight: true,
        buttonColor: "bg-yellow-400 text-black",
      },
      {
        price: "$119",
        title: "Deep cleaning package",
        description: "Perfect for seasonal cleaning or move-ins/outs.",
        features: [
          "Everything in standard cleaning",
          "Carpet cleaning",
          "Window washing",
          "High dusting (e.g., ceiling fans)",
        ],
        buttonColor: "bg-blue-600 text-white",
      },
    ];
  
    return (
      <section className="price px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">Our Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 shadow-lg ${
                  plan.highlight ? "bg-indigo-600 text-white" : "bg-white"
                }`}
              >
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className="text-xl font-normal"> / visit</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="mb-6 text-base">{plan.description}</p>
                <h4 className="font-semibold text-xl mb-3">Includes:</h4>
                <ul className="mb-8 space-y-3 text-left text-lg">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-md text-xl font-medium ${plan.buttonColor}`}
                >
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  