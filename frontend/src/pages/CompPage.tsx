import { useParams, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// Removed unused import
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Placeholder data structure for individual comps - Removed champions and traits
const compDetails: { [key: string]: { name: string; tier: string; imageUrl: string; description: string; guide: string } } = {
  'set-14-boulevard-of-broken-demons': {
    name: 'Set 14 Boulevard of Broken Demons',
    tier: 'S',
    imageUrl: '/placeholder.svg', // Placeholder for the main comp image
    description: 'A powerful S-tier composition focusing on late-game scaling.',
    // Removed champions array
    // Removed traits array
    guide: 'This is a placeholder guide for the Set 14 Boulevard of Broken Demons comp. Explain how to play this comp, including early game, mid game, late game, and positioning tips.',
  },
  'set-14-heavenly-reroll': {
    name: 'Set 14 Heavenly Reroll',
    tier: 'S',
    imageUrl: '/placeholder.svg',
    description: 'An aggressive reroll strategy for early dominance.',
    // Removed champions array
    // Removed traits array
    guide: 'Guide for Heavenly Reroll...',
  },
   'set-14-inkshadow-invokers': {
    name: 'Set 14 Inkshadow Invokers',
    tier: 'A',
    imageUrl: '/placeholder.svg',
    description: 'A magic-focused composition with strong spellcasters.',
    // Removed champions array
    // Removed traits array
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
  const location = useLocation();
  const tier = (location.state as { tier?: string })?.tier || 'N/A';


  const comp = compDetails[compId || ''];

  if (!comp) {
    return <div className="container mx-auto py-8 text-center">Comp not found!</div>;
  }

  const tierColorClass = tierColorClasses[comp.tier] || 'bg-gray-500';

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{comp.name}</h1>
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

      {/* Removed the grid container and the Champion Lineup and Active Traits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Removed md:col-span-2 div */}
        {/* Removed Champion Lineup Card */}
        {/* Removed Active Traits Card */}

        {/* How to Play Guide Card - Adjusted grid column span if needed */}
        <div className="md:col-span-3"> {/* Adjusted to span 3 columns on medium screens and up */}
          <Card>
            <CardHeader>
              <CardTitle>How to Play</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{comp.guide}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompPage;