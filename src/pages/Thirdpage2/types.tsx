// types.ts
export interface PackageData {
    packageId: string;
    packageName: string;
    totalGuests: number;
    nights: number;
    days: number;
    theme: string;
    destinationCovered: string;
    highlights: string[];
    includes: { name: string; icon: string }[];
    totalPackagePrice: string;
    packageImage: string;
    itinerary: Record<string, string[]>[];
    inclusions: string[];
    exclusions: string[];
    overviewData: { title: string; content: string };
    country: string;
    tableData?: {
      tab1: {
        star4: string;
        star5: string;
      }[];
    };
  }
  