import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const placeholderComps = {
  S: [
    { name: 'Set 14 Boulevard of Broken Demons', tier: 'S' },
    { name: 'Set 14 Heavenly Reroll', tier: 'S' },
  ],
  A: [
    { name: 'Set 14 Inkshadow Invokers', tier: 'A' },
    { name: 'Set 14 Storyweaver Reroll', tier: 'A' },
  ],
  B: [
    { name: 'Set 14 Fated Duelists', tier: 'B' },
    { name: 'Set 14 Umbral Bruisers', tier: 'B' },
  ],
};

const MetaPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meta Overview</h1>

      {Object.entries(placeholderComps).map(([tier, comps]) => (
        <div key={tier} className="mb-12">
          <div className={`border-l-8 pl-4 mb-6 ${tier === 'S' ? 'border-yellow-500' : tier === 'A' ? 'border-green-500' : tier === 'B' ? 'border-blue-500' : 'border-gray-500'}`}>
            <h2 className="text-3xl font-semibold">{`Tier ${tier}`}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {comps.map((comp) => (
              <Link key={comp.name} to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{comp.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Placeholder Image */}
                    <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden"> {/* Added overflow-hidden */}
                      <img
                        src={`https://via.placeholder.com/300x150?text=${encodeURIComponent(comp.name)}`}
                        alt={`${comp.name} placeholder image`}
                        className="w-full h-full object-cover" // Use object-cover to maintain aspect ratio
                      />
                    </div>
                    <Badge variant="secondary">{`Tier ${comp.tier}`}</Badge>
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