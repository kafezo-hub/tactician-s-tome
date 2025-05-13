import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Using ShadCN Card for comps

const MetaPage: React.FC = () => {
  // Placeholder data structure for tiers and comps
  const metaTiers = [
    {
      tier: 'S',
      color: 'border-red-500', // Example color for S tier
      comps: [
        { name: 'Comp A', description: 'Strongest comp right now.' },
        { name: 'Comp B', description: 'Another top-tier comp.' },
      ],
    },
    {
      tier: 'A',
      color: 'border-yellow-500', // Example color for A tier
      comps: [
        { name: 'Comp C', description: 'Very strong, slightly less dominant.' },
        { name: 'Comp D', description: 'Solid choice for climbing.' },
        { name: 'Comp E', description: 'Good alternative.' },
      ],
    },
    {
      tier: 'B',
      color: 'border-green-500', // Example color for B tier
      comps: [
        { name: 'Comp F', description: 'Viable, but requires specific conditions.' },
      ],
    },
    // Add more tiers as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Team Composition Tier List</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Rankings of the most effective team compositions in the current meta.
      </p>

      {metaTiers.map((tierData) => (
        <div key={tierData.tier} className="mb-10">
          <h2 className={`text-2xl font-semibold mb-4 border-l-4 pl-3 ${tierData.color}`}>
            Tier {tierData.tier}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tierData.comps.map((comp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>{comp.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{comp.description}</p>
                  {/* Future: Add placeholder for comp image, key units, items, etc. */}
                  <div className="mt-4 flex space-x-2">
                    {/* Placeholder for champion icons */}
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaPage;