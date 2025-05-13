import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tactician's Tome</h1>
      <p className="text-xl text-gray-600 mb-8">Your ultimate resource for Teamfight Tactics meta insights.</p>

      {/* Placeholder sections for key content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Champion Tiers</h2>
          <p className="text-gray-700">Discover the strongest champions in the current meta.</p>
          {/* Link or Button to Champion Tiers page */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Item Guide</h2>
          <p className="text-gray-700">Learn the best items for every champion and situation.</p>
          {/* Link or Button to Items page */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Team Compositions</h2>
          <p className="text-gray-700">Explore powerful team comps to climb the ranks.</p>
          {/* Link or Button to Team Comps page */}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;