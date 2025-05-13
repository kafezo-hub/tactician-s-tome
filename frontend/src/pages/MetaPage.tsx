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
    // Added Tier C placeholder data
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

      {Object.entries(metaTiers).map(([tier, comps]) => (
        <div key={tier} className="mb-12">
          {/* Wrapped tier content in a new div for the box effect */}
          <div className="border border-border rounded-md p-4">
            {/* Added styling for Tier C */}
            <div className={`border-l-8 pl-4 mb-6 ${
              tier === 'S' ? 'border-yellow-500' :
              tier === 'A' ? 'border-purple-500' :
              tier === 'B' ? 'border-blue-500' :
              tier === 'C' ? 'border-green-500' : // Styling for Tier C
              'border-gray-500'
            }`}>
              <h2 className="text-3xl font-semibold">{`Tier ${tier}`}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {comps.map((comp) => (
                <Link key={comp.name} to={`/comp/${comp.name.toLowerCase().replace(/\s+/g, '-')}`} className="min-w-0 min-h-0">
                  <Card className="hover:shadow-lg transition-shadow duration-200 w-full h-full aspect-square flex flex-col relative">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{comp.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between pt-0 px-4 pb-4">
                      {/* Placeholder Image - Positioned Absolutely */}
                      <div className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-2rem)] h-32 bg-muted rounded-md flex items-center justify-center overflow-hidden shadow-sm">
                        <img
                          src={comp.imageUrl} // Use imageUrl from fetched data
                          alt={`${comp.name} image`}
                          className="w-full h-full object-cover"
                        />
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
        </div>
      ))}
    </div>
  );
};

export default MetaPage;