import bali1 from "../../../assets/thirdpage/bali/Bali 3rd page1.png";
import bali2 from "../../../assets/thirdpage/bali/Bali 3rd page2.png";
import bali3 from "../../../assets/thirdpage/bali/Bali 3rd page3.png";
import bali4 from "../../../assets/thirdpage/bali/Bali 3rd page4.png";
import { ElementType, ReactElement } from "react";
import { Vietnam } from "../../../components/data";
import { Plane, Hotel, Landmark, Bus, User } from "lucide-react";
interface PackageData {
  packageId: string;
  packageName: string;
  totalGuests: number;
  nights: number;
  days: number;
  theme: string;
  highlights: string | string[];
  destinationCovered: string;
  totalPackagePrice: string;
  packageImage: string;
  pricePerAdult?: string; // ✅ Optional
  itinerary: { [day: string]: string[] }[];
  includes?: { name: string; icon: ElementType }[];
  inclusions: string[];
  exclusions: string[];
  termsConditions: string[];
  cancellationPolicy: Record<string, string>; // ✅ Move this inside
  overviewData: {
    title: string;
    content: string;
  };
  duration: string;
  country: string;
  cities: string;
  tableData?: {
    tab1: {
      city?: string;
      star4?: string;
      star5?: string;
      label?: string;
      cost4?: string;
      cost5?: string;
    }[];
  };
}

const Finaldata: Record<string, Record<string, PackageData>> = {
  bali: {
    //Ultimate Bali & Nusa Penida Adventure 6N7D
    bali1: {
      packageId: "S04390",
      packageName: "Ultimate Bali & Nusa Penida Adventure",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Bali -- Kuta -- Ubud -- Nusa Penida",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR 74,999",

      packageImage: bali1,
      itinerary: [
        {
          "Day 1": [
            "Welcome to Bali! Today is the First day of your trip. You will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at your leisure. Overnight stay at Hotel accommodation"
          ]
        },
        {
          "Day 2": [
            "Experience a water - filled adventure at Benoa Bay with excitement.An ideal Bali is incomplete without Bali Water Sport at Tanjung Benoa Beach.This beach known for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle.watersport with Banana Boat, Parasailing, Jet Ski.."
          ]
        },
        {
          "Day 3": [
            "The name of Ulun Danu Beratan Temple is taken from the lake where the temple is built at Beratan Lake. Git Git Waterfall is a beautiful tourist destination in north part of Bali. Git Git waterfall is located in the plateau area with the height about 35 meters and it is surrounded by tropical tree and emits the constantly natural water debit during the year. Waterfall voice around the charming nature was amazing and it was the separate attraction which can be enjoyed by each visitor who comes to visit."
          ]
        },
        {
          "Day 4": [
            "Spend a day exploring Nusa Penida Island’s incredible beaches and highlights on this exclusive private tour. Witness the remarkable natural beauty of the area, from crystal clear waters, lush greenery and dramatic cliffs. Visit the renowned Kelingking Beach, otherwise known as T-Rex Beach.  This trip will take you up close & personal with the essence of Bali. It is the most favorite tour of any first-time visitor to Bali."
          ]
        },
        {
          "Day 5": [
            "You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. Get Ready for the most Romantic moment of your life. A swing hanging between coconut trees, high atop a hill. with sweeping views of the jungle. A Romantic Bali Swing is a variation of the popular Bali Swing experience designed to create a more intimate and romantic setting for couples."
          ]
        },
        {
          "Day 6": [
            "Day at Leisure Day free at leisure, enjoy by your own."
          ]
        },
        {
          "Day 7": [
            "Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."
          ]
        },
      ],

      inclusions: [
        "Benoa Water Sports in Bali",
        "Uluwatu Sunset Tour with Kecak Dance",
        "West Nusa Penida",
        "Kintamani Tour with Ubud Village",
        "Tegalalang Rice Terraces"
      ],

      exclusions: [
        "International Tourism Levy for Bali",
        "Visa on Arrival fees",
        "Festival and peak season surcharges",
        "Optional tours and personal expenses",
        "Insurance and health declaration formalities"
      ],

      termsConditions: [
        "All payment should be cleared at least 30 days prior to departure.",
        "In case the client wishes to prepone or postpone their travel dates, we request you to kindly reach us at least 15 days prior to the journey date via email or message.",
        "Please note that some service providers (e.g., Hotel, transporters) may apply postpone/prepone charges even after meeting the 15-day requirement. These charges will be deducted from the advance amount deposited.",
        "All prepone or postpone requests are subject to availability of hotel/Volvo and the applicable season or off-season rates.",
        "No changes in the plan will be accepted within 15 days of the travel date.",
        "In rare cases like adverse climatic conditions or strikes, the package can be postponed, and such changes will be communicated to you in advance."
      ],

      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      overviewData: {
        title: "Package Overview",
        content: "Enjoy 7 days in Bali with 4 nights in Kuta for beaches & nightlife, and 2 nights in Ubud for nature & culture. A perfect mix of adventure and relaxation! 🌴✨",
      },
      duration: "6 Days",
      country: "Indonesia",
      cities: "Kuta, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\Royal Tulip Springhill Resort\Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\nAshoka Tree Resort Ubud\nBhumi Linggah",
            star5: "Asvara Villa Ubud\nFuramaXclusive Resort & Villas\nHideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹34,999",
            cost5: "₹43,999",
          },
        ],
        
      }, // ✅ Closing
    },
    bali2: {
      packageId: "S04390",
      packageName: "Bali with gili",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Bali -- Kuta -- Ubud",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      totalPackagePrice: "INR 82,499",

      packageImage: bali2,
      itinerary: [
        { " Day 1:": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
        { "Day 2:": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
        { " Day 3:": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
        { " Day 4:": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
        { "Day 5:": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
        { "Day 6:": ["Day at Leisure Day free at leisure, enjoy by your own."] },
        { "Day 7: ": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      overviewData: {
        title: "Package Overview",
        content: "Discover the best of Bali & Gili Islands with this 6-day package. Explore Ubud’s waterfalls, rice terraces, and temples, then relax on the Gili Islands with snorkeling, island hopping, and stunning sunsets. Return to Kuta/Seminyak for beach fun, water sports, and the Uluwatu Kecak Fire Dance. Perfect for couples and adventure seekers, this package includes luxury stays, private transfers, and curated experiences.🌴",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Kuta, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, The One Legion, Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort, Royal Tulip Springhill Resort ,Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud, Ashoka Tree Resort Ubud, Bhumi Linggah, Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud, FuramaXclusive Resort & Villas, Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹25,499",
            cost5: "₹34,999",
          },
        ],
       
      },
    },
    bali3: {
      packageId: "S04390",
      packageName: "bali Essence",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "Bali -- Kuta -- Ubud",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],
      totalPackagePrice: "INR 65,499",

      packageImage: bali3,
      itinerary: [
        {
          "Day 1": [
            "Arrival at Denpasar Airport and transfer to hotel",
            "Day at leisure depending on arrival time",
            "Overnight stay at hotel"
          ]
        },
        {
          "Day 2": [
            "Benoa Water Sports: Banana Boat, Parasailing, Jet Ski at Tanjung Benoa Beach",
            "Uluwatu Sunset Tour: Cliffside temple visit and sunset view",
            "Kecak Dance Performance: Traditional fire dance from Ramayana"
          ]
        },
        {
          "Day 3": [
            "West Nusa Penida Tour: Kelingking Beach (T-Rex Beach), Angel’s Billabong, Broken Beach, Crystal Bay",
            "Note: Snorkeling retribution fee applies if opted"
          ]
        },
        {
          "Day 4": [
            "Ulundanu Temple Tour: Visit Beratan Lake Temple",
            "Git Git Waterfall: Explore the scenic waterfall and surrounding rainforest",
            "Tanah Lot Temple: Iconic temple on rock with sunset views"
          ]
        },
        {
          "Day 5": [
            "Transfer from Bali to Gili Island via ferry",
            "Check-in to hotel and leisure time on Gili Island"
          ]
        },
        {
          "Day 6": [
            "Transfer from Gili to Ubud via ferry",
            "Check-in to Ubud Villa and rest day at leisure"
          ]
        },
        {
          "Day 7": [
            "Kintamani Tour: Mount & Lake Batur view, Batik and wood carving village visits",
            "Bali Swing: Scenic jungle swing experience",
            "Tegalalang Rice Terrace: Iconic rice paddies and short trek"
          ]
        },
        {
          "Day 8": [
            "Check-out from hotel",
            "Transfer to Denpasar Airport for departure"
          ]
        },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      overviewData: {
        title: "Package Overview",
        content: "Explore the breathtaking islands of Bali, Nusa Penida, and Gili with our Island Hopping Tour. This package takes you to stunning beaches, crystal-clear waters, and vibrant marine life. Visit Nusa Penida for iconic spots like Kelingking Beach and Broken Beach, then head to Gili Islands for snorkeling, underwater statues, and sunset views. Enjoy seamless transfers, guided tours, and relaxing beachfront stays, making it the perfect getaway for beach lovers and adventure seekers.🌴✨",
      },
      duration: "8 Days",
      country: "Indonesia",
      cities: "Kuta, Gili, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Swiss-Belhotel Rainforest, One Legion, Golden Tulip Jineng Resort, Kuta Central",
            star5: "Bintang Bali Resort, Royal Tulip Springhill Resort ,Pullman Bali Legian Beach",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud /Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            city: "Gili - 1N Deluxe Room",
            star4: "Hotel Ombak sunset/Aston Sunset Beach/Similar",
            star5: "Jambuluwuk Oceano Gili Trawangan Resort/Similar",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
      },
    },
    bali4: {
      packageId: "S04390",
      packageName: "Enchanting Bali Getaway without Nusa Penida",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Bali -- Kuta -- Ubud",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],
      totalPackagePrice: "INR 64,999",

      packageImage: bali4,
      itinerary: [
        {
          "Day 1": [
            "Airport Transfer from Bali - Denpasar to Hotel",
            "Welcome to Bali! Today is the first day of your trip. You will arrive at Denpasar Bali airport and be transferred to your hotel.",
            "Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure.",
            "Overnight stay at Hotel accommodation"
          ]
        },
        {
          "Day 2": [
            "Benoa Water Sports: Experience Banana Boat, Parasailing, and Jet Ski at Tanjung Benoa Beach, far from the hustle and bustle.",
            "Uluwatu Sunset Tour with Kecak Dance: Visit Uluwatu Temple built on a cliff facing the Indian Ocean. Witness a dramatic Kecak and Fire Dance performance depicting the ‘Lanka Dahan’ from the Ramayana."
          ]
        },
        {
          "Day 3": [
            "Ulundanu Temple of Bedugul Tour",
            "Git Git Waterfall Visit",
            "Tanah Lot Temple Tour"
          ]
        },
        {
          "Day 4": [
            "Day at Leisure in Bali"
          ]
        },
        {
          "Day 5": [
            "Inter Hotel Transfer to Ubud",
            "Kintamani Tour with Ubud Village (Batik, Celuk, Mas Village)",
            "Bali Swing Experience",
            "Tegalalang Rice Terrace Visit",
            "Ubud Art Market Visit"
          ]
        },
        {
          "Day 6": [
            "Day at Leisure in Bali"
          ]
        },
        {
          "Day 7": [
            "Check out from hotel",
            "Airport Transfer to Denpasar Airport",
            "Board return flight home"
          ]
        }

      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      overviewData: {
        title: "Package Overview",
        content: "Experience the best of Bali and Ubud with our Enchanting Bali Package. Visit Kelingking Beach, Broken Beach, and snorkel around Gili’s underwater statues. Enjoy stunning beaches, crystal-clear waters, and seamless transfers for the perfect island escape! 🌴✨",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Kuta, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Swiss-Belhotel Rainforest Kuta/The One Legion/Golden Tulip Jineng Resort/Kuta Central",
            star5: "Bintang Bali Resort/Royal Tulip Springhill Resort /Pullman Bali Legian Beach",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud/ Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
       
      },
    },

  },
  vietnam: {
    vietnam1: {
      packageId: "S04390",
      packageName: "vietnam highlights",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹1,00,999/-",

      packageImage:
        "https://static.toiimg.com/photo/109784668.cms",

      itinerary: [
        {
          "Day 1": [
            "Arrival in Hanoi and transfer to hotel",
            "Visit Tran Quoc Pagoda, Temple of Literature, and Hoa Lo Prison",
            "Overnight stay in Hanoi"
          ]
        },
        {
          "Day 2": [
            "Transfer to Halong Bay and board cruise",
            "Enjoy lunch onboard and kayak in Lan Ha Bay",
            "Participate in cooking class and dinner on cruise",
            "Overnight stay on cruise"
          ]
        },
        {
          "Day 3": [
            "Morning Tai Chi and visit to Dark & Light Cave",
            "Brunch on cruise and transfer to Da Nang",
            "Arrival and overnight stay in Da Nang"
          ]
        },
        {
          "Day 4": [
            "Day tour to Ba Na Hills and Golden Bridge",
            "Visit French Village and Fantasy Park",
            "Return and overnight stay in Da Nang"
          ]
        },
        {
          "Day 5": [
            "Flight to Ho Chi Minh City",
            "Visit Cu Chi Tunnels in the afternoon",
            "Overnight stay in Ho Chi Minh City"
          ]
        },
        {
          "Day 6": [
            "Day tour to Mekong Delta including Unicorn Island",
            "Boat ride, local lunch, and return to Ho Chi Minh",
            "Overnight stay in Ho Chi Minh City"
          ]
        },
        {
          "Day 7": [
            "Check-out and transfer to airport for departure"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Discover the best of Vietnam on this 7-day journey through its vibrant cities, natural wonders, and cultural treasures. Begin your adventure in Hanoi with a historical city tour, sail through the majestic Halong Bay, explore the misty hills of Ba Na with the famous Golden Bridge, and delve into the history of the Cu Chi Tunnels and the charm of the Mekong Delta. Perfect for travelers looking to experience Vietnam's essence in one seamless itinerary.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: ["6 nights accommodation in standard hotels",
        "Daily breakfast, 4 lunches, 1 dinner, 1 brunch",
        "Hanoi half-day city tour with English-speaking guide",
        "Ba Na Hills tour with Golden Bridge and cable car ride",
        "All entrance fees for included attractions",
        "Airport transfers and ground transportation (shared/private as per itinerary)",
        "Vietnam e-Visa assistance",

      ],
      exclusions: [
        "International and domestic airfare",
        "5% TCS (refundable at tax filing)",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
        "Meals not mentioned in the itinerary",

      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam2: {
      packageId: "S04390",
      packageName: "Vietnam Explorer",
      totalGuests: 2,
      nights: 8,
      days: 9,
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 8-night, 9-day journey through Vietnam, from Hanoi’s charm to Halong Bay’s beauty, Da Nang’s beaches, and Ho Chi Minh City’s vibrant energy. A perfect mix of relaxation, adventure, and culture!",
      },
      duration: "8 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      theme: "Mumbai",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      totalPackagePrice: "INR ₹ 1,04,599/-",

      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",

      itinerary: [
        {
          "Day 1": [
            "Arrival in Hanoi",
            "Half-day city tour: Tran Quoc Pagoda, Temple of Literature, Hoa Lo Prison",
            "Check-in and overnight in Hanoi"
          ]
        },
        {
          "Day 2": [
            "Travel to Halong Bay",
            "Board cruise with lunch",
            "Kayaking and sunset views",
            "Dinner and overnight on cruise"
          ]
        },
        {
          "Day 3": [
            "Cruise activities and breakfast",
            "Disembark and fly to Da Nang",
            "Check-in and overnight in Da Nang"
          ]
        },
        {
          "Day 4": [
            "Ba Na Hills day trip",
            "Visit Golden Bridge, cable car ride, Fantasy Park",
            "Return and overnight in Da Nang"
          ]
        },
        {
          "Day 5": [
            "Visit Son Tra Peninsula and Marble Mountains",
            "Explore Hoi An Ancient Town and dinner",
            "Return and overnight in Da Nang"
          ]
        },
        {
          "Day 6": [
            "Fly to Ho Chi Minh City",
            "Cu Chi Tunnels afternoon tour",
            "Overnight in Ho Chi Minh City"
          ]
        },
        {
          "Day 7": [
            "Mekong Delta day trip: boat rides, local crafts, and lunch",
            "Return and overnight in Ho Chi Minh City"
          ]
        },
        {
          "Day 8": [
            "Free day in Ho Chi Minh City",
            "Optional shopping and sightseeing",
            "Overnight in Ho Chi Minh City"
          ]
        },
        {
          "Day 9": [
            "Check-out and departure"
          ]
        }
      ],

      inclusions: [
        "Ba Na Hills with Golden Bridge",
        "Cu Chi Tunnels tour",
        "Roundtrip airport transfer by private car without guide",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Check-out from Hotel and transfer to airport by private car.",
        "Vietnam e-VISA",
      ],
      exclusions: [
        "Early Check-in is subject to availability.",
        "Any Optional Tours and Services",
        "Drink on Cruise, during Meals and Surcharge for Beverages brought on Cruise",
        "Anything other than mentioned in inclusions",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam3: {
      packageId: "S04390",
      packageName: "Vietnam Wonders",
      totalGuests: 2,
      nights: 8,
      days: 9,
      theme: "Mumbai",
      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      totalPackagePrice: "INR ₹1,10,499/-",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience the best of Vietnam on this 9-day tour, exploring the bustling streets of Hanoi, the serene beauty of Halong Bay, the historical charm of Da Nang, and the tropical paradise.. Stay in deluxe accommodations throughout the journey, ensuring comfort and relaxation as you uncover the rich culture, history, and natural beauty of this stunning country.",
      },
      duration: "9 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      packageImage:
        "https://www.odysseytravels.net/uploads/package/map_pic/the-wonders-of-vietnam--cambodia-232.jpg",
      itinerary: [
        {
          "Day 1": [
            "Arrive in Hanoi",
            "Airport pickup and baggage drop",
            "Join half-day city tour",
            "Visit Tran Quoc Pagoda, Temple of Literature, Hoa Lo Prison",
            "Check-in and overnight in Hanoi"
          ]
        },
        {
          "Day 2": [
            "Day trip to Ninh Binh",
            "Visit Hoa Lu Ancient Capital",
            "Cycling in local village",
            "Boat ride in Trang An",
            "Climb Mua Cave",
            "Return and overnight in Hanoi"
          ]
        },
        {
          "Day 3": [
            "Transfer to Halong Bay",
            "Board cruise and lunch onboard",
            "Kayaking in Lan Ha Bay",
            "Cooking class and dinner",
            "Overnight on cruise"
          ]
        },
        {
          "Day 4": [
            "Morning cruise activities",
            "Visit Dark & Light Cave",
            "Disembark and transfer to airport",
            "Fly to Da Nang and check-in",
            "Overnight in Da Nang"
          ]
        },
        {
          "Day 5": [
            "Day trip to Ba Na Hills",
            "Visit Golden Bridge, French Village, Fantasy Park",
            "Cable car ride and lunch",
            "Return and overnight in Da Nang"
          ]
        },
        {
          "Day 6": [
            "Afternoon tour to Son Tra Peninsula and Marble Mountain",
            "Evening visit to Hoi An Ancient Town",
            "Dinner and return to Da Nang",
            "Overnight in Da Nang"
          ]
        },
        {
          "Day 7": [
            "Fly to Ho Chi Minh City",
            "Afternoon visit to Cu Chi Tunnels",
            "Return and overnight in Ho Chi Minh City"
          ]
        },
        {
          "Day 8": [
            "Mekong Delta day trip",
            "Boat ride, village visit, tropical fruits",
            "Return and overnight in Ho Chi Minh City"
          ]
        },
        {
          "Day 9": [
            "Check-out and airport transfer",
            "Departure from Ho Chi Minh City"
          ]
        }
      ],

      inclusions: [
        "08 nights accommodation (7 in hotel + 1 in Halong Bay cruise) on twin sharing basis",
        "All major sightseeing tours: Hanoi city tour, Ninh Binh, Halong Bay cruise, Ba Na Hills, Cu Chi Tunnels, Mekong Delta, and Hoi An",
        "Meals as per itinerary: 8 Breakfasts, 4 Lunches, 1 Buffet Lunch, 1 Dinner, 1 Brunch, 1 Local Dinner",
        "All transfers as mentioned including airport, intercity, and tour transport on sharing basis"
      ],
      exclusions: [
        "Airfare, travel insurance, and personal expenses like laundry, telephone, etc.",
        "Optional tours, early check-in or late check-out charges",
        "Entrance tickets not mentioned under inclusions (e.g., Wax Museum, Wine Cellar, etc.)",
        "TCS 5%, tips, beverages on cruise, and any cost due to natural calamities or unforeseen events"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam4: {
      packageId: "S04390",
      packageName: "Classic Vietnam",
      totalGuests: 2,
      nights: 5,
      days: 6,
      highlights: [
        "Airport Transfers in Hanoi and Da Nang",
        "City Tour of Hanoi – including Tran Quoc Pagoda, Temple of Literature, and Hoa Lo Prison",
        "Ha Long Bay Cruise – kayaking, cave exploration, island hike & sunset party",
        "Ninh Binh Adventure – cycling through villages, boat trip through caves, panoramic view from Mua Cave",
        "Marble Mountains & Hoi An – cultural landmarks and iconic lantern-lit streets",
        "Ba Na Hills Day Tour – record-breaking cable car, Golden Bridge, French village & Fantasy Park"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      totalPackagePrice: "INR 92,599",
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6 dys 5 nights adventure in Vietnam, sapa with scenic views and luxury accommodations.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Phu Quoc",
      packageImage:
        "https://www.vjv.com/media/y4rhjy5j/tran-quoc-pagoda-the-oldest-temple-in-hanoi-vietnam.jpg?width=1920&height=1080&quality=60",
      itinerary: [
        {
          "Day 1": [
            "Arrival in Hanoi – airport pickup by private car",
            "Hotel baggage storage",
            "Lunch with vegetarian options",
            "Visit Tran Quoc Pagoda",
            "Visit Temple of Literature",
            "Visit Hoa Lo Prison",
            "Hotel check-in",
            "Free leisure and overnight in Hanoi"
          ]
        },
        {
          "Day 2": [
            "Breakfast at hotel",
            "Drive to Ha Long Bay",
            "Board cruise from Tuan Chau Harbor",
            "Buffet lunch onboard",
            "Kayaking at Luon Cave",
            "Explore Surprising Cave",
            "Climb Titov Island for panoramic view",
            "Sunset party on cruise",
            "Return to Hanoi",
            "Overnight in Hanoi"
          ]
        },
        {
          "Day 3": [
            "Breakfast at hotel",
            "Drive to Ninh Binh",
            "Visit Hoa Lu Ancient Capital",
            "Cycle through local village",
            "Boat trip at Trang An – visit caves",
            "Climb Mua Cave for panoramic view",
            "Return to Hanoi",
            "Overnight in Hanoi"
          ]
        },
        {
          "Day 4": [
            "Fly to Da Nang – airport pickup",
            "Baggage storage and hotel check-in",
            "Visit Marble Mountain and stone carving village",
            "Travel to Hoi An Ancient Town",
            "Dinner in Hoi An",
            "Visit Japanese Bridge and lantern streets",
            "Return to Da Nang and overnight"
          ]
        },
        {
          "Day 5": [
            "Breakfast at hotel",
            "Day tour to Ba Na Hills",
            "Cable car ride with scenic views",
            "Visit Golden Bridge and French gardens",
            "Explore Fantasy Park",
            "Visit Linh Tu Pagoda – panoramic views",
            "Return and overnight in Da Nang"
          ]
        },
        {
          "Day 6": [
            "Breakfast at hotel",
            "Late hotel check-out",
            "Transfer to Da Nang International Airport"
          ]
        }
      ],
      inclusions: [
        "All major sightseeing tours: Hanoi city tour, Ninh Binh, Halong Bay cruise, Ba Na Hills, Cu Chi Tunnels, Mekong Delta, and Hoi An",
        "Meals as per itinerary: 8 Breakfasts, 4 Lunches, 1 Buffet Lunch, 1 Dinner, 1 Brunch, 1 Local Dinner",
        "All transfers as mentioned including airport, intercity, and tour transport on sharing basis"
      ],
      exclusions: [
        "Airfare, travel insurance, and personal expenses like laundry, telephone, etc.",
        "Optional tours, early check-in or late check-out charges",
        "Entrance tickets not mentioned under inclusions (e.g., Wax Museum, Wine Cellar, etc.)",
        "TCS 5%, tips, beverages on cruise, and any cost due to natural calamities or unforeseen events"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam5: {
      packageId: "S04390",
      packageName: "Vietnam with sapa",
      totalGuests: 2,
      nights: 9,
      days: 10,
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi -- Halong Bay -- Da nang -- Sapa",
      totalPackagePrice: "INR 1,22,999",
      overviewData: {
        title: "Package Overview",
        content: "Discover the charm of Vietnam on a 9 days and 10 nights journey through Hanoi, Sapa, Ha Long Bay, Da Nang, and Ho Chi Minh City — featuring mountain treks, cultural gems, scenic cruises, and unforgettable local experiences."
      },
      duration: "9 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Sapa",
      packageImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsj-oP4hEAriDtq3uNcwRwvp7wiTkDBmmpw&s",
      itinerary: [

        {
          "Day 1": [
            "Arrive in Hanoi and transfer to hotel",
            "Lunch and sightseeing: Tran Quoc Pagoda, Temple of Literature, Hoa Lo Prison",
            "Hotel check-in and free evening in Hanoi"
          ]
        },
        {
          "Day 2": [
            "Breakfast and check-out from hotel",
            "Travel to Sapa via sleeping bus",
            "Hike to Cat Cat Village and explore local culture",
            "Overnight stay in Sapa"
          ]
        },
        {
          "Day 3": [
            "Visit Fansipan Peak by cable car",
            "Return to Sapa to collect luggage",
            "Travel back to Hanoi, dinner and check-in"
          ]
        },
        {
          "Day 4": [
            "Depart for Ha Long Bay and board the cruise",
            "Kayaking or relaxing at Ba Trai Dao",
            "Evening cooking class and overnight on cruise"
          ]
        },
        {
          "Day 5": [
            "Morning Tai Chi and explore Dark & Light Cave",
            "Return to harbor and transfer to airport",
            "Fly to Da Nang and check-in at hotel"
          ]
        },
        {
          "Day 6": [
            "Afternoon tour: Linh Ung Pagoda and Marble Mountain",
            "Explore Hoi An Ancient Town and enjoy local dinner",
            "Return to Da Nang for overnight stay"
          ]
        },
        {
          "Day 7": [
            "Full-day tour to Ba Na Hills and Golden Bridge",
            "Visit Fantasy Park and enjoy panoramic views",
            "Return to Da Nang and relax"
          ]
        },
        {
          "Day 8": [
            "Fly to Ho Chi Minh City and hotel check-in",
            "City tour: Independence Palace, Post Office, War Museum",
            "Visit Cu Chi Tunnels and return to hotel"
          ]
        },
        {
          "Day 9": [
            "Full-day Mekong Delta tour: Unicorn Island, coconut candy workshop, traditional music",
            "Return to Ho Chi Minh City for overnight stay"
          ]
        },
        {
          "Day 10": [
            "Check out and transfer to airport",
            "Departure from Ho Chi Minh City"
          ]
        }


      ],
      inclusions: [
        "Airport transfers and local transport",
        "Main tours: Hanoi, Ha Long Bay, Ba Na Hills, Cu Chi, Mekong",
        "6 breakfasts, 4 lunches, 1 dinner",
        "Hotel + cruise accommodation (twin sharing)",
        "Vietnam e-VISA & entrance fees"
      ],
      exclusions: [
        "Airfare and travel insurance",
        "Optional activities and personal expenses",
        "Early check-in/late check-out",
        "Peak season surcharges"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam6: {
      packageId: "S04390",
      packageName: "Vietnam with Phu quac",
      totalGuests: 2,
      nights: 9,
      days: 10,
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      totalPackagePrice: "INR 1,15,999",
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 10 days and 9 night adventure in Vietnam that includes phu quac, da nang beautiful views and luxury accommodations.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Phu Quoc",
      packageImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qIastzELruHsgXDCAujfKteIVY2eM7SN5A&s",
      itinerary: [
        {
          "Day 1": [
            "Arrive in Hanoi and transfer to hotel",
            "Lunch and sightseeing: Tran Quoc Pagoda, Temple of Literature, Hoa Lo Prison",
            "Hotel check-in and free evening in Hanoi"
          ]
        },
        {
          "Day 2": [
            "Breakfast at hotel",
            "Day trip to Ninh Binh: Hoa Lu Ancient Capital, cycling around village",
            "Buffet lunch and Trang An boat tour",
            "Climb Mua Cave for panoramic view",
            "Return and overnight in Hanoi"
          ]
        },
        {
          "Day 3": [
            "Check-out and depart for Ha Long Bay",
            "Board cruise and enjoy welcome drink + lunch",
            "Kayaking/swimming in Lan Ha Bay",
            "Cooking class and dinner on board",
            "Overnight on cruise"
          ]
        },
        {
          "Day 4": [
            "Morning Tai Chi and visit Dark & Light Cave",
            "Breakfast and check-out from cruise",
            "Transfer to airport and fly to Da Nang",
            "Arrive and check-in at hotel, overnight in Da Nang"
          ]
        },
        {
          "Day 5": [
            "Free morning at leisure",
            "Afternoon tour: Linh Ung Pagoda, Marble Mountains, Non Nuoc village",
            "Dinner and walk in Hoi An Ancient Town",
            "Return and overnight in Da Nang"
          ]
        },
        {
          "Day 6": [
            "Full-day tour to Ba Na Hills",
            "Visit Golden Bridge, French Village, Linh Ung Pagoda",
            "Enjoy buffet lunch and Fantasy Park",
            "Return and overnight in Da Nang"
          ]
        },
        {
          "Day 7": [
            "Check-out and transfer to Da Nang airport",
            "Fly to Ho Chi Minh City, connect to Phu Quoc",
            "Arrive and check-in at hotel, overnight in Phu Quoc"
          ]
        },
        {
          "Day 8": [
            "Visit Vinpearl Safari – Vietnam’s first open zoo",
            "Enjoy animal shows and guided safari experience",
            "Return and overnight in Phu Quoc"
          ]
        },
        {
          "Day 9": [
            "Island hopping by speedboat: May Rut / Mong Tay / Gam Ghi",
            "Water activities and coral viewing",
            "Explore Aquatopia Water Park and theme park at Hon Thom",
            "Cable car ride and return to hotel",
            "Overnight in Phu Quoc"
          ]
        },
        {
          "Day 10": [
            "Check-out from hotel",
            "Transfer to airport for departure flight"
          ]
        }
      ],
      inclusions: [
        "8 breakfasts, 4 lunches, 1 buffet lunch, 1 dinner, 1 brunch, 1 local dinner",
        "Roundtrip airport transfers and all intercity transport as per itinerary",
        "07 nights hotel stay and 01 night cruise stay (twin/double sharing)",
        "Entry tickets, cable car, boat rides, and guided tours",
        "Vietnam e-Visa and 1 bottle of water per person per tour day"
      ],
      exclusions: [
        "Airfare and travel insurance",
        "Personal expenses, optional tours, and beverages",
        "Tips, peak season surcharges, and early check-in/late check-out",
        "Wax museum, wine cellar, alpine coaster, and game tokens at Ba Na Hills",
        "Anything not mentioned in the inclusions"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
  },
  baku: {
    baku1: {
      packageId: "S04390",
      packageName: "Super Saver Baku",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "Baku -- Gabala",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹87,399/-",

      packageImage:
        "https://www.salamair.com/images/gyd.jpg.jpg",

      itinerary: [
        {
          "Day 1": [
            "Arrival at Baku Airport",
            "Transfer to hotel and check-in",
            "Free time to relax"
          ]
        },
        {
          "Day 2": [
            "Visit Highland Park and Alley of Martyrs",
            "See National Assembly and Flame Towers",
            "Walk along Baku Boulevard",
            "Free time in evening for leisure",
            "Overnight in Baku"
          ]
        },
        {
          "Day 3": [
            "Explore Baku Old City - Shirvanshah Palace & Maiden Tower",
            "Stroll through Nizami Street for shopping",
            "Photo stop at Heydar Aliyev Center",
            "Overnight in Baku"
          ]
        },
        {
          "Day 4": [
            "Visit Ateshgah (Fire Temple)",
            "Explore Yanardag (Burning Mountain)",
            "Free evening for personal activities",
            "Overnight in Baku"
          ]
        },
        {
          "Day 5": [
            "Travel to Gabala (3-hour drive)",
            "Experience Tufandaq Winter-Summer Tourism Complex - cable car & activities",
            "Visit Nohur Lake for scenic views",
            "Return to Baku and overnight stay"
          ]
        },
        {
          "Day 6": [
            "Breakfast at hotel",
            "Hotel check-out",
            "Transfer to Baku Airport for departure"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 6-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights accommodation in standard hotel on double sharing basis",
        "Daily breakfast at hotel",
        "Airport transfers in private car",
        "Baku City Tour, Flame Tour, Gabala Tour on sharing basis",
        "Entry tickets to mentioned sightseeing spots",
        "Professional English-speaking guide during tours"
      ],
      exclusions: [
        "Airfare and Visa charges",
        "Meals other than those mentioned",
        "Personal expenses like tips, laundry, shopping, etc.",
        "Optional tours or activities not mentioned in the itinerary",
        "Travel Insurance (mandatory)",
        "Any increase in fuel charges or taxes"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    baku2: {
      packageId: "S04390",
      packageName: "Baku Bliss",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Baku -- Gabala",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹1,20,199/-",

      packageImage:
        "https://www.swiss.com/aircore/media/65/eyJpZGVudGlmaWVyIjozMjY0MjksInR5cGUiOiJhc3NldCJ9.png",

      itinerary: [
        {
          "Day 1": [
            "Arrival at Baku Airport and transfer to hotel",
            "Hotel check-in and rest",
            "Panoramic Tour: Visit Highland Park, Alley of Martyrs, National Assembly, and Flame Towers",
            "Walk along Baku Boulevard (Freedom Square to Old City)",
            "Free evening for personal activities and overnight stay in hotel"
          ]
        },
        {
          "Day 2": [

            "Visit Baku Old City (Shirvanshahs Palace and Maiden Tower - UNESCO Site)",
            "Shopping and walk on Nizami Street",
            "Photo stop at Heydar Aliyev Center",
            "Overnight stay in Baku"
          ]
        },
        {
          "Day 3": [

            "Excursion to Shahdag Mountain – scenic journey through the Caucasus",
            "Stop at Candy Cane Mountain for photo opportunity",
            "Enjoy alpine views and outdoor activities at Shahdag",
            "Return and overnight in Baku"
          ]
        },
        {
          "Day 4": [

            "Visit Qobustan Rock Art Museum (UNESCO Site with 40,000-year-old petroglyphs)",
            "Explore Mud Volcanoes - natural bubbling mud formations",
            "Return and overnight stay in Baku"
          ]
        },
        {
          "Day 5": [
            "Transfer from Baku to Gabala",
            "Enroute stop at Shamakhi: Visit Diri Baba Mausoleum and Juma Mosque",
            "Optional: Visit Alpaca Farm (yoga, picnic, gift shop, children’s playground)",
            "Optional: Visit Meysari Winery for wine tasting and vineyard tour",
            "Arrival in Gabala and check-in to hotel",
            "Overnight stay in Gabala"
          ]
        },
        {
          "Day 6": [
            "Breakfast at hotel and check-out",
            "Gabala Tour: Visit Tufandaq Winter-Summer Tourism Complex (cable car, skiing, entertainment)",
            "Visit Nohur Lake for scenic mountain views",
            "Transfer back to Baku and overnight stay"
          ]
        },
        {
          "Day 7": [

            "Check-out from hotel and transfer to Baku Airport",
            "Departure from Baku"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 7-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights accommodation in standard hotel on double sharing basis",
        "Daily breakfast at hotel",
        "Airport transfers in private car",
        "Baku City Tour, Flame Tour, Gabala Tour on sharing basis",
        "Entry tickets to mentioned sightseeing spots",
        "Professional English-speaking guide during tours"
      ],
      exclusions: [
        "Airfare and Visa charges",
        "Meals other than those mentioned",
        "Personal expenses like tips, laundry, shopping, etc.",
        "Optional tours or activities not mentioned in the itinerary",
        "Travel Insurance (mandatory)",
        "Any increase in fuel charges or taxes"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    baku3: {
      packageId: "S04390",
      packageName: "Baku & Gabala",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Baku -- Gabala",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹1,22,599/-",

      packageImage:
        "https://cdn.rt.emap.com/wp-content/uploads/sites/4/2014/01/30051846/HAC_Exterior_Photo_by_Hufton_Crow__1__1-1.jpg",

      itinerary: [
        {
          "Day 1": [
            "Arrival at Baku Airport and transfer to hotel",
            "Hotel check-in and rest",
            "Panoramic Tour: Visit Highland Park, Alley of Martyrs, National Assembly (Milli Majlis), and Flame Towers",
            "Stroll along Baku Boulevard from Freedom Square to the Old City including Yeni Bulvar",
            "Free time for evening activities on your own",
            "Overnight stay at the hotel in Baku"
          ]
        },
        {
          "Day 2": [
            "Explore Baku Old City (Icherisheher) including Shirvanshah’s Palace and Maiden Tower (UNESCO Site)",
            "Leisure walk and shopping at Nizami Street",
            "Photo stop at Heydar Aliyev Center (exterior)",
            "Overnight stay at the hotel in Baku"
          ]
        },
        {
          "Day 3": [
            "Full-day Shahdag Tour: Scenic drive through the Caucasus Mountains",
            "Photo stop at Candy Cane Mountain - striped red and white hills",
            "Outdoor experiences and natural sightseeing at Shahdag Mountain Resort",
            "Return and overnight stay in Baku"
          ]
        },
        {
          "Day 4": [
            "Absheron Peninsula Tour: Visit Ateshgah Fire Temple and Yanar Dag (Burning Mountain)",
            "Continue with Qobustan Tour: Explore UNESCO Rock Art Museum with ancient petroglyphs",
            "Visit the world-famous Mud Volcanoes – natural bubbling landscapes",
            "Return and overnight stay at the hotel in Baku"
          ]
        },
        {
          "Day 5": [
            "Transfer from Baku to Gabala (approx. 3–4 hours)",
            "Enroute sightseeing at Shamakhi: Visit Diri Baba Mausoleum and Juma Mosque",
            "Optional visit to Alpaca Farm (yoga, picnic, photo ops, kids’ play area, souvenir shop)",
            "Optional visit to Meysari Winery (requires pre-booking)",
            "Arrival and hotel check-in at Gabala",
            "Overnight stay at hotel in Gabala"
          ]
        },
        {
          "Day 6": [
            "Visit Nohur Lake – serene views surrounded by mountains",
            "Excursion to 7 Gozel Waterfall – scenic multi-tiered waterfall",
            "Explore Tufandag Mountain Resort – panoramic cable car views and activities",
            "Return and overnight stay in Gabala"
          ]
        },
        {
          "Day 7": [
            "Breakfast at hotel and check-out",
            "Transfer from Gabala to Baku Airport (approx. 3–4 hours)",
            "Departure from Baku"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 7-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights accommodation in standard hotel on double sharing basis",
        "Daily breakfast at hotel",
        "Airport transfers in private car",
        "Baku City Tour, Flame Tour, Gabala Tour on sharing basis",
        "Entry tickets to mentioned sightseeing spots",
        "Professional English-speaking guide during tours"
      ],
      exclusions: [
        "Airfare and Visa charges",
        "Meals other than those mentioned",
        "Personal expenses like tips, laundry, shopping, etc.",
        "Optional tours or activities not mentioned in the itinerary",
        "Travel Insurance (mandatory)",
        "Any increase in fuel charges or taxes"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    baku4: {
      packageId: "S04390",
      packageName: "Azerbaijan Explorer",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Baku -- Gabala",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹1,26,999/-",

      packageImage:
        "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/11/Modern-skyscraper-in-Baku-Azerbaijan.jpg",

      itinerary: [
        {
          "Day 1": [
            "Arrival at Baku Airport and transfer to hotel",
            "Hotel check-in and rest",
            "Panoramic Tour: Visit Highland Park, Alley of Martyrs, National Assembly (Milli Majlis), and Flame Towers",
            "Stroll along Baku Boulevard from Freedom Square to the Old City including Yeni Bulvar",
            "Free time for evening activities on your own",
            "Overnight stay at the hotel in Baku"
          ]
        },
        {
          "Day 2": [
            "Explore Baku Old City (Icherisheher) including Shirvanshah’s Palace and Maiden Tower (UNESCO Site)",
            "Leisure walk and shopping at Nizami Street",
            "Photo stop at Heydar Aliyev Center (exterior)",
            "Overnight stay at the hotel in Baku"
          ]
        },
        {
          "Day 3": [
            "Full-day Shahdag Tour: Scenic drive through the Caucasus Mountains",
            "Photo stop at Candy Cane Mountain - striped red and white hills",
            "Outdoor experiences and natural sightseeing at Shahdag Mountain Resort",
            "Return and overnight stay in Baku"
          ]
        },
        {
          "Day 4": [
            "Absheron Peninsula Tour: Visit Ateshgah Fire Temple and Yanar Dag (Burning Mountain)",
            "Continue with Qobustan Tour: Explore UNESCO Rock Art Museum with ancient petroglyphs",
            "Visit the world-famous Mud Volcanoes – natural bubbling landscapes",
            "Return and overnight stay at the hotel in Baku"
          ]
        },
        {
          "Day 5": [
            "Transfer from Baku to Gabala (approx. 3–4 hours)",
            "Enroute sightseeing at Shamakhi: Visit Diri Baba Mausoleum and Juma Mosque",
            "Optional visit to Alpaca Farm (yoga, picnic, photo ops, kids’ play area, souvenir shop)",
            "Optional visit to Meysari Winery (requires pre-booking)",
            "Arrival and hotel check-in at Gabala",
            "Overnight stay at hotel in Gabala"
          ]
        },
        {
          "Day 6": [
            "Visit Nohur Lake – serene views surrounded by mountains",
            "Excursion to 7 Gozel Waterfall – scenic multi-tiered waterfall",
            "Explore Tufandag Mountain Resort – panoramic cable car views and activities",
            "Return and overnight stay in Gabala"
          ]
        },
        {
          "Day 7": [
            "Breakfast at hotel and check-out",
            "Transfer from Gabala to Baku Airport (approx. 3–4 hours)",
            "Departure from Baku"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant capital city of Baku and the scenic beauty of Gabala on this 7-day journey through Azerbaijan. Discover ancient landmarks, marvel at modern architecture, witness natural fire phenomena, and relax amidst mountains and lakes. This package offers a perfect blend of cultural discovery, historical exploration, and natural adventure.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights accommodation in standard hotel on double sharing basis",
        "Daily breakfast at hotel",
        "Airport transfers in private car",
        "Baku City Tour, Flame Tour, Gabala Tour on sharing basis",
        "Entry tickets to mentioned sightseeing spots",
        "Professional English-speaking guide during tours"
      ],
      exclusions: [
        "Airfare and Visa charges",
        "Meals other than those mentioned",
        "Personal expenses like tips, laundry, shopping, etc.",
        "Optional tours or activities not mentioned in the itinerary",
        "Travel Insurance (mandatory)",
        "Any increase in fuel charges or taxes"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
  },
  dubai: {
    dubai1: {
      packageId: "S04390",
      packageName: "Dream Dubai",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "Dubai-5N",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹82,999/-",

      packageImage:
        "https://i0.wp.com/reconasia.csis.org/wp-content/uploads/2017/01/chasing_the_dubai_dreamii-e1619813205979.jpeg?fit=2000%2C1333&ssl=1",

      itinerary: [
        {
          "Day 1": [
            "Arrival at Dubai International Airport",
            "Transfer to hotel and check-in",
            "Evening Marina Dhow Cruise with dinner - enjoy the illuminated skyline along Dubai Marina",
            "Overnight in Dubai"
          ]
        },
        {
          "Day 2": [
            "Half-day Dubai City Tour - Gold Souk, Jumeirah Mosque, Jumeirah Beach (photo stop), Burj Al Arab, Souk Madinat Jumeirah, Atlantis the Palm (photo stop), drive along Sheikh Zayed Road",
            "Visit Burj Khalifa - 124th floor observation deck (Non-prime time)",
            "Enjoy Dubai Fountain show at Dubai Mall",
          ]
        },
        {
          "Day 3": [
            "Morning free for leisure or optional activities",
            "Afternoon Desert Safari with dune bashing, camel ride, BBQ dinner and live entertainment",

          ]
        },
        {
          "Day 4": [
            "Full-day Abu Dhabi City Tour - drive past Jebel Ali Port, visit Sheikh Zayed Grand Mosque, explore the city’s skyline and greenery",
            "Visit Ferrari World - world's first Ferrari-themed indoor amusement park",
            "Return to Dubai and overnight stay"
          ]
        },
        {
          "Day 5": [
            "Day at leisure - relax or explore Dubai on your own",
            "Optional: Visit Museum of the Future, Global Village, or enjoy beach time at La Mer",
            "Overnight in Dubai"
          ]
        },
        {
          "Day 6": [
            "Breakfast at hotel",
            "Hotel check-out",
            "Transfer to Dubai International Airport for departure"
          ]
        }

      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 6-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights hotel stay with breakfast",
        "Airport transfers (SIC basis)",
        "Marina Dhow Cruise with dinner",
        "Dubai City Tour (Half-day)",
        "Burj Khalifa 124th Floor ticket (non-prime time)",
        "Desert Safari with BBQ dinner",
        "Abu Dhabi City Tour",
        "Ferrari World entry",
      ],
      exclusions: [
        "Travel insurance",
        "Tourism Dirham (to be paid at hotel)",
        "5% TCS (refundable)",
        "Personal expenses",
        "Optional tours & activities",
        "Early check-in / late check-out"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud/ Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
      },
    },
    dubai2: {
      packageId: "S04390",
      packageName: "Dubai with Abu dhabi",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "Dubai-4N -- Abu Dhabi-1N",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹91,499/-",

      packageImage:
        "https://asset.providentestate.com/x/1000x/Dubai_vs_Abu_Dhabi_Where_Should_International_Buyers_Invest_for_Maximum_Returns_e1b4651020.webp",

      itinerary: [
        {
          "Day 1": [
            "Arrive in Dubai in the evening and meet our representative at the airport",
            "Transfer to hotel and check-in",
            "Dinner at the hotel",
            "Evening Marina Dhow Cruise with onboard dinner",
            "Overnight stay in Dubai"
          ]
        },
        {
          "Day 2": [
            "Half-day panoramic Dubai city tour: Gold Souk, Al Seef, Bastakiya, Meena Bazar",
            "Photo stops at Dubai Frame, Burj Al Arab, Palm Jumeirah (Atlantis)",
            "Drive past Burj Khalifa, Dubai Mall, Sheikh Zayed Road, Mall of the Emirates, Ski Dubai",
            "Lunch at an Indian restaurant",
            "Visit Burj Khalifa 124th Floor (non-prime time entry at 15:00)",
            "Watch the Fountain Show at Dubai Mall (18:30 or 19:00)",
            "Return to hotel and overnight stay in Dubai"
          ]
        },
        {
          "Day 3": [
            "Free morning for shopping or personal activities",
            "Visit the Museum of the Future",
            "Lunch at an Indian restaurant",
            "Evening Desert Safari: dune bashing, belly dance, camel rides, henna, BBQ dinner at desert camp",
            "Return to hotel and overnight stay in Dubai"
          ]
        },
        {
          "Day 4": [
            "Day at leisure to explore Dubai at your own pace",
            "Optional activities and excursions available",
            "Overnight stay in Dubai"
          ]
        },
        {
          "Day 5": [
            "Check out from hotel and transfer to Abu Dhabi",
            "Abu Dhabi city tour including visit to BAPS Hindu Temple",
            "Lunch at an Indian restaurant",
            "Check in to hotel in Abu Dhabi",
            "Visit Ferrari World for thrilling rides and entertainment",
            "Dinner at an Indian restaurant",
            "Overnight stay in Abu Dhabi"
          ]
        },
        {
          "Day 6": [
            "Free morning at leisure",
            "Lunch at an Indian restaurant",
            "Transfer to the airport for departure from Abu Dhabi"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the best of Dubai and Abu Dhabi in this 5-night getaway. Cruise along Dubai Marina, visit the Burj Khalifa, enjoy a thrilling desert safari, and experience the wonders of the Museum of the Future.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights hotel stay with breakfast",
        "Airport transfers",
        "Marina Dhow Cruise with dinner",
        "Dubai city tour & Burj Khalifa (124th floor)",
        "Museum of the Future entry",
        "Desert Safari with BBQ dinner",
        "Abu Dhabi city tour & Ferrari World entry",
        "Visa assistance"
      ],

      exclusions: [
        "Tourism Dirham fee",
        "Travel insurance",
        "Personal expenses",
        "Meals not mentioned",
        "Optional activities",
        "Early check-in / late check-out"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud /Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            city: "Gili - 1N Deluxe Room",
            star4: "Hotel Ombak sunset/Aston Sunset Beach/Similar",
            star5: "Jambuluwuk Oceano Gili Trawangan Resort/Similar",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
      },
    },
    dubai3: {
      packageId: "S04390",
      packageName: "Dubai & Abu Dhabi Wonders",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Dubai-4N -- Abu Dhabi-2N",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹1,01,499/-",

      packageImage:
        "https://cdn.rt.emap.com/wp-content/uploads/sites/4/2014/01/30051846/HAC_Exterior_Photo_by_Hufton_Crow__1__1-1.jpg",

      itinerary: [
        {
          "Day 1": [
            "Arrival in Dubai and hotel check-in",
            "Evening Marina Dhow Cruise with dinner"
          ]
        },
        {
          "Day 2": [
            "Half-day Dubai City Tour",
            "Visit Burj Khalifa 124th floor (non-prime time) and Fountain Show"
          ]
        },
        {
          "Day 3": [
            "Visit Museum of the Future",
            "Evening Desert Safari with BBQ Dinner and entertainment"
          ]
        },
        {
          "Day 4": [
            "Day at leisure to explore Dubai on your own"
          ]
        },
        {
          "Day 5": [
            "Transfer to Abu Dhabi and hotel check-in",
            "Abu Dhabi City Tour with Sheikh Zayed Grand Mosque",
            "Visit BAPS Hindu Mandir",
            "Evening visit to Ferrari World"
          ]
        },
        {
          "Day 6": [
            "Visit Sea World Yas Island"
          ]
        },
        {
          "Day 7": [
            "Check-out and transfer to Abu Dhabi Airport for departure"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Discover Dubai & Abu Dhabi in 6 nights – iconic landmarks, thrilling experiences, and cultural wonders, all in one unforgettable trip.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "6 nights accommodation in standard hotel on double sharing basis",
        "Daily breakfast at hotel",
        "Airport transfers in private car",
        "Entry tickets to mentioned sightseeing spots",
        "Professional English-speaking guide during tours"
      ],
      exclusions: [
        "Airfare and Visa charges",
        "Meals other than those mentioned",
        "Personal expenses like tips, laundry, shopping, etc.",
        "Optional tours or activities not mentioned in the itinerary",
        "Travel Insurance (mandatory)",
        "Any increase in fuel charges or taxes"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud /Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            city: "Gili - 1N Deluxe Room",
            star4: "Hotel Ombak sunset/Aston Sunset Beach/Similar",
            star5: "Jambuluwuk Oceano Gili Trawangan Resort/Similar",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
      },
    },
    dubai4: {
      packageId: "S04390",
      packageName: "Dubai Delights",
      totalGuests: 2,
      nights: 4,
      days: 5,
      theme: "Mumbai",
      destinationCovered: "Dubai-4N",
      highlights: [
        "Expert tour manager all throughout the tour",
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Guide", icon: User },
      ],

      totalPackagePrice: "INR ₹77,599/-",

      packageImage:
        "https://www.duomasters.com/wp-content/uploads/Dubais-Delectable-Delights-Savoring-the-Citys-Rich-Culinary-Scene.png",

      itinerary: [
        {
          "Day 1": [
            "Arrival at Dubai International Airport and transfer to hotel",
            "Hotel check-in and rest",
            "Evening Marina Dhow Cruise with dinner and views of illuminated skyline",
            "Overnight stay at the hotel in Dubai"
          ]
        },
        {
          "Day 2": [
            "Half Day Dubai City Tour – Gold Souk, Jumeirah Mosque, Burj Al Arab, Atlantis, Sheikh Zayed Road",
            "Visit to Burj Khalifa 124th Floor – Non-prime time entry",
            "Enjoy the Dubai Fountain Show at Dubai Mall",
            "Overnight stay at the hotel in Dubai"
          ]
        },
        {    
          "Day 3": [
            "Visit to Museum of the Future – immersive futuristic experience",
            "Evening Desert Safari with dune bashing, belly dance, BBQ dinner at desert camp",
            "Overnight stay at the hotel in Dubai"
          ]
        },
        {
          "Day 4": [
            "Day at leisure – explore Dubai on your own or opt for optional activities",
            "Shopping at malls or local markets",
            "Overnight stay at the hotel in Dubai"
          ]
        },
        {
          "Day 5": [
            "Breakfast at hotel and check-out",
            "Transfer to Dubai International Airport for departure"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the dazzling city of Dubai with this 4-night holiday. Enjoy iconic attractions like Burj Khalifa, Dubai City Tour, Marina Dhow Cruise, Desert Safari with BBQ dinner, and a visit to the Museum of the Future. Perfect blend of sightseeing, culture, and leisure in the heart of the UAE.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      inclusions: [
        "5 nights accommodation in standard hotel on double sharing basis",
        "Daily breakfast at hotel",
        "Airport transfers in private car",
        "Entry tickets to mentioned sightseeing spots",
        "Professional English-speaking guide during tours"
      ],
      exclusions: [
        "Airfare and Visa charges",
        "Meals other than those mentioned",
        "Personal expenses like tips, laundry, shopping, etc.",
        "Optional tours or activities not mentioned in the itinerary",
        "Travel Insurance (mandatory)",
        "Any increase in fuel charges or taxes"
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud/ Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
        
      },
    },
  },
};

export default Finaldata;
