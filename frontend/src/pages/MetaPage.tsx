import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const placeholderComps = {
  S: [
    { name: 'Set 14 Boulevard of Broken Demons', tier: 'S', imageUrls: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'] },
    { name: 'Set 14 Heavenly Reroll', tier: 'S', imageUrls: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'] },
  ],
  A: [
    { name: 'Set 14 Inkshadow Invokers', tier: 'A', imageUrls: ['/placeholder.svg', '/placeholder.svg'] },
    { name: 'Set 14 Storyweaver Reroll', tier: 'A', imageUrls: ['/placeholder.svg', '/placeholder.svg'] },
  ],
  B: [
    { name: 'Set 14 Fated Duelists', tier: 'B', imageUrls: ['/placeholder.svg'] },
    { name: 'Set 14 Umbral Bruisers', tier: 'B', imageUrls: ['/placeholder.svg'] },
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
              <Link key={comp.name} to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`} className="min-w-0 min-h-0">
                <Card className="hover:shadow-lg transition-shadow duration-200 w-full h-full aspect-square flex flex-col relative">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{comp.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    {/* Placeholder Images in a row */}
                    {/* Added flex container for images */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {comp.imageUrls.map((imageUrl, index) => (
                        // Styled individual image placeholder
                        <div key={index} className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden border-2 border-gray-400">
                           <img
                            src={imageUrl}
                            alt={`${comp.name} image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute top-2 right-2">
                       <Badge variant="secondary">{`Tier ${comp.tier}`}</Badge>
                    </div>
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