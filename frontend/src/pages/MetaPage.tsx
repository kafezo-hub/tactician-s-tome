import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = ["S", "A", "B", "C", "D"];

const MetaPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meta Overview</h1>

      {tiers.map((tier) => (
        <div key={tier} className="mb-10">
          {/* Refined tier header styling */}
          <h2 className={`text-3xl font-semibold mb-6 border-l-4 pl-4 ${
            tier === 'S' ? 'border-yellow-500 text-yellow-500' :
            tier === 'A' ? 'border-purple-500 text-purple-500' :
            tier === 'B' ? 'border-blue-500 text-blue-500' :
            tier === 'C' ? 'border-green-500 text-green-500' :
            'border-gray-500 text-gray-500'
          }`}>
            Tier {tier}
          </h2>
          {/* Responsive grid for comp cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder Cards for Team Comps with enhanced styling and hover effects */}
            {[1, 2, 3].map((comp) => (
              <Card key={comp} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Team Comp {comp}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Brief description or key units...</p>
                  {/* Add placeholder for champion icons here later */}
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