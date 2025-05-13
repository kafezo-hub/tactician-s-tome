import { useParams, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Placeholder data structure for individual comps
const compDetails: { [key: string]: any } = { // Using 'any' for simplicity with placeholder data
  'set-14-boulevard-of-broken-demons': {
    name: 'Set 14 Boulevard of Broken Demons',
    tier: 'S',
    imageUrl: '/placeholder.svg', // Placeholder for the main comp image
    description: 'A powerful S-tier composition focusing on late-game scaling.',
    champions: [
      { name: 'Champion 1', imageUrl: '/placeholder.svg', items: ['Item 1', 'Item 2', 'Item 3'] },
      { name: 'Champion 2', imageUrl: '/placeholder.svg', items: ['Item 4', 'Item 5'] },
      { name: 'Champion 3', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion 4', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion 5', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion 6', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion 7', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion 8', imageUrl: '/placeholder.svg', items: [] },
    ],
    traits: [
      { name: 'Trait A', iconUrl: '/placeholder.svg', count: 4 },
      { name: 'Trait B', iconUrl: '/placeholder.svg', count: 2 },
      { name: 'Trait C', iconUrl: '/placeholder.svg', count: 2 },
    ],
    guide: 'This is a placeholder guide for the Set 14 Boulevard of Broken Demons comp. Explain how to play this comp, including early game, mid game, late game, and positioning tips.',
  },
  'set-14-heavenly-reroll': {
    name: 'Set 14 Heavenly Reroll',
    tier: 'S',
    imageUrl: '/placeholder.svg',
    description: 'An aggressive reroll strategy for early dominance.',
    champions: [
      { name: 'Champion X', imageUrl: '/placeholder.svg', items: ['Item X', 'Item Y'] },
      { name: 'Champion Y', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion Z', imageUrl: '/placeholder.svg', items: [] },
    ],
    traits: [
      { name: 'Trait P', iconUrl: '/placeholder.svg', count: 3 },
      { name: 'Trait Q', iconUrl: '/placeholder.svg', count: 3 },
    ],
    guide: 'Guide for Heavenly Reroll...',
  },
   'set-14-inkshadow-invokers': {
    name: 'Set 14 Inkshadow Invokers',
    tier: 'A',
    imageUrl: '/placeholder.svg',
    description: 'A magic-focused composition with strong spellcasters.',
    champions: [
      { name: 'Champion M', imageUrl: '/placeholder.svg', items: ['Item M', 'Item N'] },
      { name: 'Champion N', imageUrl: '/placeholder.svg', items: [] },
      { name: 'Champion O', imageUrl: '/placeholder.svg', items: [] },
    ],
    traits: [
      { name: 'Trait R', iconUrl: '/placeholder.svg', count: 4 },
      { name: 'Trait S', iconUrl: '/placeholder.svg', count: 2 },
    ],
    guide: 'Guide for Inkshadow Invokers...',
  },
  // Add more comp details here, matching the URL-friendly name from MetaPage
};

const tierColorClasses: { [key: string]: string } = {
  S: 'bg-yellow-500',
  A: 'bg-purple-500',
  B: 'bg-secondary',
  C: 'bg-green-500',
};

const CompPage: React.FC = () => {
  const { compId } = useParams<{ compId: string }>();
  // We can still use location state for fallback or additional data if needed,
  // but we'll primarily rely on the compDetails lookup for now.
  // const location = useLocation();
  // const tierFromState = (location.state as { tier?: string })?.tier || 'N/A';


  // Find the comp details based on the compId from the URL
  const comp = compDetails[compId || ''];

  if (!comp) {
    return <div className="container mx-auto py-8 text-center">Comp not found!</div>; // Handle case where compId doesn't match
  }

  // Use the tier from the looked-up comp data
  const tierColorClass = tierColorClasses[comp.tier] || 'bg-gray-500';

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{comp.name}</h1>
        {/* Use dynamic tier and color class from looked-up data for the Badge */}
        <Badge className={`text-lg px-4 py-1 ${tierColorClass} text-primary-foreground`}>{comp.tier}</Badge>
      </div>

      <p className="text-lg text-gray-700 mb-8 text-center">{comp.description}</p>

      {/* Main Comp Image Card */}
      <Card className="mb-6 overflow-hidden w-full md:w-2/3 lg:w-1/2 mx-auto">
        <CardContent className="p-0">
          <div className="aspect-video">
            <img src={comp.imageUrl} alt={`${comp.name} image`} className="w-full h-full object-cover" />
          </div>
        </CardContent>
      </Card>

      <Separator className="my-8" />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Champion Lineup Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Champion Lineup</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {comp.champions.map((champion: any, index: number) => ( // Use any for placeholder data
              <div key={index} className="flex flex-col items-center">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={champion.imageUrl} alt={champion.name} />
                  <AvatarFallback>{champion.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm mt-1">{champion.name}</span>
                <div className="flex gap-1 mt-1">
                  {/* Item Placeholders */}
                  {champion.items.map((item: string, itemIndex: number) => ( // Use string for placeholder data
                    <div key={itemIndex} className="w-4 h-4 bg-blue-500 rounded-full border border-blue-700 shadow-sm" title={item}></div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Traits Card */}
        <Card>
          <CardHeader>
            <CardTitle>Active Traits</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {comp.traits.map((trait: any, index: number) => ( // Use any for placeholder data
              <Badge key={index} className="flex items-center gap-1 bg-muted text-foreground">
                 {/* Trait Icon Placeholder */}
                <div className="w-4 h-4 bg-green-500 border border-green-700 shadow-sm"></div>
                {trait.name} ({trait.count})
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* How to Play Guide Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>How to Play</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{comp.guide}</p>
        </CardContent>
      </Card>

    </div>
  );
};

export default CompPage;