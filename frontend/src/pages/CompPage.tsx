import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const CompPage: React.FC = () => {
  const { compId } = useParams<{ compId: string }>();

  // Placeholder data for a single comp
  const placeholderComp = {
    name: compId ? compId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Loading Comp...',
    tier: 'S', // Placeholder tier
    description: 'A strong composition focusing on key units and synergies.',
    champions: [
      { name: 'Champion 1', cost: 5, items: ['Item A', 'Item B', 'Item C'], icon: '/placeholder.svg' },
      { name: 'Champion 2', cost: 4, items: ['Item D', 'Item E'], icon: '/placeholder.svg' },
      { name: 'Champion 3', cost: 3, items: ['Item F'], icon: '/placeholder.svg' },
      { name: 'Champion 4', cost: 2, items: [], icon: '/placeholder.svg' },
      { name: 'Champion 5', cost: 1, items: [], icon: '/placeholder.svg' },
      { name: 'Champion 6', cost: 4, items: [], icon: '/placeholder.svg' },
      { name: 'Champion 7', cost: 3, items: [], icon: '/placeholder.svg' },
      { name: 'Champion 8', cost: 2, items: [], icon: '/placeholder.svg' },
      // Add more placeholder champions
    ],
    traits: [
      { name: 'Trait A', level: 4, icon: '/placeholder.svg' },
      { name: 'Trait B', level: 3, icon: '/placeholder.svg' },
      { name: 'Trait C', level: 2, icon: '/placeholder.svg' },
      { name: 'Trait D', level: 2, icon: '/placeholder.svg' },
      { name: 'Trait E', level: 1, icon: '/placeholder.svg' },
      // Add more placeholder traits
    ],
    guide: 'Start with a strong early game board. Transition into your key units in the mid-game. Position carefully in the late game to maximize damage and survivability.',
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">{placeholderComp.name}</h1>
      <div className="flex justify-center mb-8">
        <Badge className={`text-lg px-4 py-1 ${
          placeholderComp.tier === 'S' ? 'bg-yellow-500' :
          placeholderComp.tier === 'A' ? 'bg-purple-500' :
          placeholderComp.tier === 'B' ? 'bg-blue-500' :
          placeholderComp.tier === 'C' ? 'bg-green-500' :
          'bg-gray-500'
        }`}>
          Tier {placeholderComp.tier}
        </Badge>
      </div>

      <p className="text-lg text-gray-700 mb-8 text-center">{placeholderComp.description}</p>

      <Separator className="my-8" />

      {/* Champion Lineup Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Champion Lineup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {placeholderComp.champions.map((champion, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Avatar className="w-16 h-16 mb-2 border-2 border-gray-300"> {/* Added border */}
                  <AvatarImage src={champion.icon} alt={champion.name} />
                  <AvatarFallback>{champion.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-sm">{champion.name}</span>
                {champion.items.length > 0 && (
                  <div className="flex space-x-1 mt-1">
                    {champion.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="w-5 h-5 bg-blue-400 rounded-full border border-blue-600 shadow-sm" title={item}></div> // Styled item placeholder
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Traits Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Active Traits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {placeholderComp.traits.map((trait, index) => (
              <Badge key={index} variant="secondary" className="flex items-center text-base px-3 py-1"> {/* Styled badge */}
                 <div className="w-5 h-5 bg-green-500 rounded-sm mr-2 border border-green-700 shadow-sm"></div> {/* Styled trait icon placeholder */}
                {trait.name} ({trait.level})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guide Section */}
       <Card>
        <CardHeader>
          <CardTitle>How to Play</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{placeholderComp.guide}</p>
        </CardContent>
      </Card>

    </div>
  );
};

export default CompPage;