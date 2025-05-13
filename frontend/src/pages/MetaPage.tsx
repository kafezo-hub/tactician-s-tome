import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Placeholder data structure for meta comps
const placeholderComps = {
  S: [
    { name: 'Set 14 Fate Duelist', imageUrl: '/placeholder.svg' },
    { name: 'Set 14 Cybernetic Swordsman', imageUrl: '/placeholder.svg' },
  ],
  A: [
    { name: 'Set 14 Galactic Sniper', imageUrl: '/placeholder.svg' },
    { name: 'Set 14 Storyweaver Reroll', imageUrl: '/placeholder.svg' },
  ],
  B: [
    { name: 'Set 14 Mystic Enchanter', imageUrl: '/placeholder.svg' },
    { name: 'Set 14 Wasteland Bruiser', imageUrl: '/placeholder.svg' },
  ],
  C: [
    { name: 'Set 14 City Defender', imageUrl: '/placeholder.svg' },
    { name: 'Set 14 Forest Shaman', imageUrl: '/placeholder.svg' },
  ],
};

// Placeholder fetch function (replace with your actual API call)
const fetchMetaComps = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return placeholderComps;
};

const MetaPage = () => {
  const { data: metaTiers, isLoading, error } = useQuery({
    queryKey: ['metaComps'],
    queryFn: fetchMetaComps,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Meta Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="aspect-square rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 text-red-500">
        Error loading meta comps.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Meta Overview</h1>
      {metaTiers && Object.entries(metaTiers).map(([tier, comps]) => {
        let tierColorClass = '';
        switch (tier) {
          case 'S':
            tierColorClass = 'primary';
            break;
          case 'A':
            tierColorClass = 'accent';
            break;
          case 'B':
            tierColorClass = 'secondary';
            break;
          case 'C':
            tierColorClass = 'green-500'; // Using a direct color for C tier
            break;
          default:
            tierColorClass = 'muted';
        }

        return (
          <div key={tier} className="mb-12 flex items-start gap-4">
            <div className={`bg-${tierColorClass} text-primary-foreground px-4 py-1 rounded-md font-bold text-xl whitespace-nowrap`}>
              Tier {tier}
            </div>
            <div className="flex-grow bg-gradient-to-r from-primary to-accent p-1 rounded-md">
              <div className="bg-card p-3 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {comps.map((comp, index) => (
                    <Link
                      key={index}
                      to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="min-w-0 min-h-0"
                    >
                      <Card className={`aspect-square flex flex-col bg-${tierColorClass}`}>
                        <CardContent className="flex flex-col items-center justify-start p-4 pt-0 flex-grow">
                           {/* Comp Name Box - Adjusted max-width */}
                          <div className={`w-full bg-${tierColorClass} text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold text-center mb-4 max-w-[95%]`}> {/* Changed max-w-[calc(100%-1.5rem)] to max-w-[95%] */}
                            {comp.name}
                          </div>
                          {/* Image Placeholder */}
                          <div className="w-full h-auto aspect-video overflow-hidden rounded-md bg-muted shadow-sm">
                            <img
                              src={comp.imageUrl}
                              alt={`${comp.name} image`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                           {/* Tier Badge (Absolute Positioned) */}
                          <Badge className="absolute top-2 right-2">Tier {tier}</Badge>
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