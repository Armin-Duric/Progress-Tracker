import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Progress Tracker App
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to the Progress Tracker App! Our mission is to help you track
          and achieve your goals efficiently.
        </p>
        <p className="text-lg text-gray-600 mb-4">With this app, you can:</p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
          <li>Create and manage your goals.</li>
          <li>Track your progress over time.</li>
          <li>Stay motivated with reminders and insights.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-4">
          Our app is designed to be user-friendly and flexible, so you can focus
          on what matters most: achieving your goals.
        </p>
        <p className="text-lg text-gray-600">
          Thank you for choosing Progress Tracker App. We are committed to
          helping you succeed!
        </p>
      </div>
    </div>
  );
};

export default About;
