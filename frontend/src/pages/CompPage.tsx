import { useParams, useLocation } from 'react-router-dom'; // Import useLocation
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Placeholder data structure for a comp
const placeholderComp = {
  id: '1',
  name: 'Placeholder Comp',
  // tier: 'S', // Removed hardcoded tier
  description: 'A strong composition focusing on key units and synergies.',
  champions: [
    { name: 'Champion 1' },
    { name: 'Champion 2' },
    { name: 'Champion 3' },
    { name: 'Champion 4' },
    { name: 'Champion 5' },
    { name: 'Champion 6' },
    { name: 'Champion 7' },
    { name: 'Champion 8' },
  ],
  traits: [
    { name: 'Trait 1', level: 3 },
    { name: 'Trait 2', level: 2 },
    { name: 'Trait 3', level: 1 },
  ],
  guide: 'This is a placeholder guide for the comp.',
};

const CompPage = () => {
  const { compId } = useParams<{ compId: string }>();
  const location = useLocation(); // Get location object
  // Access tier from state, default to 'N/A' if state or state.tier is undefined
  const tier = (location.state as { tier?: string })?.tier || 'N/A';


  // In a real app, you would fetch comp data based on compId
  // For now, we'll use the placeholder data and derive the name from the URL
  const comp = {
      ...placeholderComp,
      name: compId ? compId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Loading Comp...',
      tier: tier // Use the tier from the route state
  };

  // Determine color class based on tier (same logic as MetaPage for consistency)
  const tierColorClass =
    comp.tier === 'S' ? 'yellow-500' :
    comp.tier === 'A' ? 'purple-500' :
    comp.tier === 'B' ? 'secondary' :
    comp.tier === 'C' ? 'green-500' :
    'gray-500';


  if (!comp) {
    return <div>Comp not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{comp.name}</h1>
        {/* Use dynamic tier and color class for the Badge */}
        <Badge className={`text-lg px-4 py-1 bg-${tierColorClass}`}>
          Tier {comp.tier}
        </Badge>
      </div>

      <p className="text-lg text-gray-700 mb-8 text-center">{comp.description}</p>

      <Separator className="my-8" />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Champion Lineup</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                {comp.champions.map((champ, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative">
                      <Avatar className="w-16 h-16 border-2 border-primary">
                        <AvatarImage src={`/placeholder.svg`} alt={champ.name} />
                        <AvatarFallback>{champ.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="mt-2 text-sm text-center">{champ.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Moved and Resized Card with Rectangular Image Placeholder */}
          <Card className="my-6 overflow-hidden w-full md:w-2/3 lg:w-1/2 mx-auto">
            <div className="w-full aspect-video bg-muted flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt={`${comp.name} image`}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Active Traits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {comp.traits.map((trait, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 border border-green-700 shadow-sm"></div>
                    <Badge variant="secondary" className="text-sm">
                      {trait.name} ({trait.level})
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
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