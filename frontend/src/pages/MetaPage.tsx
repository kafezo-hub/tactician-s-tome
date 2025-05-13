import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Placeholder data structure for meta comps
interface Comp {
  name: string;
  tier: string;
  imageUrl: string;
}

// Placeholder fetch function (replace with your actual API call)
const fetchMetaComps = async (): Promise<{ [key: string]: Comp[] }> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Placeholder data - replace with data from your API
  const placeholderComps: { [key: string]: Comp[] } = {
    'S': [
      { name: 'Set 14 Boulevard of Broken Demons', tier: 'S', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Heavenly Reroll', tier: 'S', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 S Comp 3', tier: 'S', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 S Comp 4', tier: 'S', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 S Comp 5', tier: 'S', imageUrl: '/placeholder.svg' },
    ],
    'A': [
      { name: 'Set 14 Inkshadow Invokers', tier: 'A', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Storyweaver Reroll', tier: 'A', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 A Comp 3', tier: 'A', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 A Comp 4', tier: 'A', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 A Comp 5', tier: 'A', imageUrl: '/placeholder.svg' },
    ],
    'B': [
      { name: 'Set 14 Fated Duelists', tier: 'B', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Umbral Bruisers', tier: 'B', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 B Comp 3', tier: 'B', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 B Comp 4', tier: 'B', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 B Comp 5', tier: 'B', imageUrl: '/placeholder.svg' },
    ],
    'C': [
      { name: 'Set 14 Comp C Example 1', tier: 'C', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Comp C Example 2', tier: 'C', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 C Comp 3', tier: 'C', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 C Comp 4', tier: 'C', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 C Comp 5', tier: 'C', imageUrl: '/placeholder.svg' },
    ],
  };
  return placeholderComps;
};

const MetaPage: React.FC = () => {
  const { data: metaComps, isLoading, error } = useQuery({
    queryKey: ['metaComps'],
    queryFn: fetchMetaComps,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Meta Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(12)].map((_, index) => (
            <Skeleton key={index} className="aspect-square rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 text-red-500">
        Error loading meta data.
      </div>
    );
  }

  const metaTiers = metaComps || {};
  const tierOrder = ['S', 'A', 'B', 'C']; // Define the order of tiers

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Meta Overview</h1>
      {tierOrder.map(tier => {
        const compsInTier = metaTiers[tier];
        if (!compsInTier || compsInTier.length === 0) {
          return null; // Don't render tier if no comps
        }

        let tierColorClass = '';
        switch (tier) {
          case 'S':
            tierColorClass = 'bg-yellow-500'; // Gold-like for S
            break;
          case 'A':
            tierColorClass = 'bg-purple-500'; // Purple for A
            break;
          case 'B':
            tierColorClass = 'bg-secondary'; // Neon Blue for B (from theme)
            break;
          case 'C':
            tierColorClass = 'bg-green-500'; // Green for C
            break;
          default:
            tierColorClass = 'bg-gray-500'; // Default gray
        }

        return (
          <div key={tier} className="mb-12 flex items-start gap-4">
            {/* Tier Label Box */}
            <div className={`${tierColorClass} text-primary-foreground px-4 py-1 rounded-md font-bold text-xl whitespace-nowrap`}>
              Tier {tier}
            </div>
            {/* Tier Content Box */}
            <div className="flex-grow bg-gradient-to-r from-primary to-accent p-1 rounded-md">
              <div className="bg-card p-3 rounded-md">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {compsInTier.map((comp, index) => (
                    <Link
                      key={index}
                      to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`}
                      state={{ tier: comp.tier }} // Pass tier in state
                      className="min-w-0 min-h-0"
                    >
                      <Card className={`relative w-full aspect-square flex flex-col ${tierColorClass}`}>
                        {/* Tier Badge - Reverted to show only the tier letter */}
                        <Badge className="absolute top-2 right-2">{comp.tier}</Badge> {/* Removed "Tier " */}
                        <CardContent className="flex flex-col items-center justify-start p-4 pt-0 gap-4 flex-grow relative">
                           {/* Comp Name Box */}
                           <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 ${tierColorClass} text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold text-center max-w-full`}>
                              {comp.name}
                           </div>
                          {/* Image Placeholder */}
                          <div className="w-full max-w-[calc(100%-2rem)] aspect-video bg-muted rounded-md shadow-sm overflow-hidden mt-12">
                            <img
                              src={comp.imageUrl}
                              alt={`${comp.name} image`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetaPage;