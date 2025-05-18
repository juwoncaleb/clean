import { useState } from 'react';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide a wide range of services including house cleaning, office cleaning, carpet washing, and more.",
  },
  {
    question: "How do I book a cleaning service?",
    answer: "You can book directly through our website or by calling our customer service line.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 24 hours in advance are fully refundable. Later cancellations may incur a fee.",
  },
  {
    question: "Can I request the same cleaning team for each visit?",
    answer: "Yes, we offer the option to request your preferred team based on availability.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, as long as we have access to your space. Many clients prefer to provide entry instructions in advance.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mt-20  mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 cursor-pointer transition-shadow shadow-sm hover:shadow-md"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
