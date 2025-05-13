import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';

// Define a type for the expected data structure (adjust based on actual API response)
interface Comp {
  name: string;
  tier: string;
  imageUrl: string; // Assuming a single image URL for now
  // Add other fields like champions, traits, etc. if the API provides them
}

// Placeholder fetch function - REPLACE with actual API call
const fetchMetaComps = async (): Promise<{[key: string]: Comp[]}> => {
  // In a real scenario, you would fetch data from an API here.
  // Example: const response = await fetch('YOUR_TFT_META_API_ENDPOINT');
  // const data = await response.json();
  // return data;

  // Using placeholder data for now
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  return {
    S: [
      { name: 'Set 14 Boulevard of Broken Demons', tier: 'S', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Heavenly Reroll', tier: 'S', imageUrl: '/placeholder.svg' },
    ],
    A: [
      { name: 'Set 14 Inkshadow Invokers', tier: 'A', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Storyweaver Reroll', tier: 'A', imageUrl: '/placeholder.svg' },
    ],
    B: [
      { name: 'Set 14 Fated Duelists', tier: 'B', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Umbral Bruisers', tier: 'B', imageUrl: '/placeholder.svg' },
    ],
    C: [
      { name: 'Set 14 Comp C Example 1', tier: 'C', imageUrl: '/placeholder.svg' },
      { name: 'Set 14 Comp C Example 2', tier: 'C', imageUrl: '/placeholder.svg' },
    ],
  };
};

const MetaPage = () => {
  // Use useQuery to fetch data
  const { data, isLoading, error } = useQuery({
    queryKey: ['tftMetaComps'], // Unique key for this query
    queryFn: fetchMetaComps, // The function that fetches the data
  });

  if (isLoading) {
    // Display a loading state using Skeleton components
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Meta Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => ( // Show 8 skeleton cards
            <Skeleton key={index} className="w-full h-64 rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    // Display an error message
    return (
      <div className="container mx-auto py-8 text-center text-red-500">
        <h1 className="text-4xl font-bold mb-8">Error Loading Meta</h1>
        <p>Could not load meta compositions. Please try again later.</p>
        {/* Optional: Display error details for debugging */}
        {/* <p className="text-sm text-gray-600">{error.message}</p> */}
      </div>
    );
  }

  // Assuming data is structured like placeholderComps: { S: [...], A: [...], ... }
  const metaTiers = data || {}; // Use fetched data or empty object if data is null/undefined

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meta Overview</h1>

      {Object.entries(metaTiers).map(([tier, comps]) => {
        // Determine color class based on tier
        const tierColorClass =
          tier === 'S' ? 'yellow-500' : // Keeping standard yellow for S
          tier === 'A' ? 'purple-500' : // Keeping standard purple for A
          tier === 'B' ? 'secondary' : // Using theme's secondary color (Neon Blue) for B
          tier === 'C' ? 'green-500' : // Keeping standard green for C
          'gray-500';

        return (
          <div key={tier} className="mb-12">
            {/* Flex container for the tier label box and the main content box */}
            <div className="flex items-start gap-4">
              {/* Tier Label Box */}
              <div className={`bg-${tierColorClass} text-primary-foreground px-4 py-1 rounded-md font-bold text-xl whitespace-nowrap`}>
                Tier {tier}
              </div>
              {/* Main Content Box (the existing gradient box) */}
              <div className="flex-grow bg-gradient-to-r from-primary to-accent p-1 rounded-md">
                <div className="bg-card p-3 rounded-md">
                  {/* The grid of comp cards remains */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {comps.map((comp) => (
                      // Link now wraps both the Card and the comp name div
                      <Link key={comp.name} to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`} className="min-w-0 min-h-0 flex flex-col items-center"> {/* Added flex and items-center */}
                        <Card className={`hover:shadow-lg transition-shadow duration-200 w-full aspect-square flex flex-col relative bg-${tierColorClass}`}> {/* Removed h-full */}
                          <CardHeader className="pb-2">
                            {/* CardTitle remains removed */}
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-between pt-0 px-4 pb-4">
                             {/* Comp name in a colored box, positioned absolutely - Adjusted top position */}
                            <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 bg-${tierColorClass} text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold whitespace-nowrap`}>
                               {comp.name}
                            </div>
                            {/* Placeholder Image - Positioned Absolutely */}
                            <div className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-2rem)] h-32 bg-muted rounded-md flex items-center justify-center overflow-hidden shadow-sm">
                              <img
                                src={comp.imageUrl} // Use imageUrl from fetched data
                                alt={`${comp.name} image`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Removed the comp name text div from the bottom */}
                            {/*
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-sm font-semibold text-foreground">
                               {comp.name}
                            </div>
                            */}
                            <div className="absolute top-2 right-2">
                               {/* You might want to adjust the Badge color or text color for better contrast */}
                               <Badge variant="secondary">{`Tier ${comp.tier}`}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        {/* Removed the comp name text div outside the Card */}
                        {/*
                        <div className="text-center text-sm font-semibold text-foreground mt-2">
                           {comp.name}
                        </div>
                        */}
                      </Link>
                    ))}
                  </div>
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