import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom'; // Import Link

const MetaPage: React.FC = () => {
  // Placeholder data structure for tiers and comps
  const metaTiers = [
    {
      tier: 'S',
      color: 'border-yellow-500 text-yellow-500', // Example color for S tier
      comps: [
        { name: 'Comp A', description: 'Strongest comp right now.' },
        { name: 'Comp B', description: 'Another top-tier comp.' },
      ],
    },
    {
      tier: 'A',
      color: 'border-purple-500 text-purple-500', // Example color for A tier
      comps: [
        { name: 'Comp C', description: 'Very strong, slightly less dominant.' },
        { name: 'Comp D', description: 'Solid choice for climbing.' },
        { name: 'Comp E', description: 'Good alternative.' },
      ],
    },
    {
      tier: 'B',
      color: 'border-blue-500 text-blue-500', // Example color for B tier
      comps: [
        { name: 'Comp F', description: 'Viable, but requires specific conditions.' },
      ],
    },
    // Add more tiers as needed
  ];


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meta Overview</h1>

      {metaTiers.map((tierData) => (
        <div key={tierData.tier} className="mb-10">
          <h2 className={`text-3xl font-semibold mb-6 border-l-4 pl-4 ${tierData.color}`}>
            Tier {tierData.tier}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder Cards for Team Comps with enhanced styling and hover effects */}
            {tierData.comps.map((comp, index) => ( // Use metaTiers data
              <Link to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}> {/* Wrap Card with Link and correct the path */}
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle>{comp.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{comp.description}</p>
                    {/* Add placeholder for champion icons here later */}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaPage;