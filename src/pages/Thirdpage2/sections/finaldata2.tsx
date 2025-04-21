import bali1 from "../../../assets/thirdpage/bali/Bali 3rd page1.png";
import bali2 from "../../../assets/thirdpage/bali/Bali 3rd page2.png";
import bali3 from "../../../assets/thirdpage/bali/Bali 3rd page3.png";
import bali4 from "../../../assets/thirdpage/bali/Bali 3rd page4.png";
import { ElementType, ReactElement } from "react";
import { Vietnam } from "../../../components/data";
import { Plane, Hotel, Landmark, Bus, User, Utensils } from "lucide-react";
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
  overviewData: {
    title: string;
    content: string;
  };
  country: string;
  tableData?: {
    tab1: {
      star3?: string,
      star4?: string;
      star5?: string;

    }[];
  };
}

const Finaldata: Record<string, Record<string, PackageData>> = {
  bali: {
    bali1: {
      packageId: "S04390",
      packageName: "Ultimate Bali and Nusa Penida",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Kuta-4N -- Ubud-2N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR 74,999",

      packageImage: bali1,
      itinerary: [
        {
          "Day 1: Airport Transfer from Bali(Denpasar) to Hotel": [
            "Welcome to Bali! Today is the First day of your trip. You will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at your leisure. Overnight stay at Hotel accommodation"
          ]
        },
        {
          "Day 2: Benoa Water Sports & Uluwatu Sunset with Kecak Dance": [
            "Start your day with fun water activities at Benoa Bay. Enjoy Banana Boat, Parasailing, and Jet Ski at Tanjung Benoa Beach, a peaceful place away from the city. In the evening, visit Uluwatu Temple, built on a high cliff with amazing views of the Indian Ocean. Watch a beautiful sunset, then enjoy the Kecak and Fire Dance – a unique show from the Ramayana story, where Hanuman sets fire to Ravana’s kingdom. The “kecak, kecak” chanting makes it even more special."
          ]
        },
        {
          "Day 3: Ulun Danu Temple, Git Git Waterfall & Tanah Lot Temple": [
            "Start with a visit to Ulun Danu Beratan Temple, a sacred site on Beratan Lake dedicated to the Goddess of water, symbolizing fertility and prosperity.Then head to Git Git Waterfall in north Bali, a 35-meter-high fall surrounded by lush rainforest. Enjoy the natural beauty, soothing sounds, and spot wild monkeys in the area.Finish the day at Tanah Lot Temple, built on a rocky outcrop by the sea. It’s a must-visit for its unique location and stunning sunset views."
          ]
        },
        {
          "Day 4: West Nusa Penida": [
            "Spend a day exploring Nusa Penida Island’s incredible beaches and highlights on this exclusive private tour. Witness the remarkable natural beauty of the area, from crystal clear waters, lush greenery and dramatic cliffs. Visit the renowned Kelingking Beach, otherwise known as T-Rex Beach.  This trip will take you up close & personal with the essence of Bali. It is the most favorite tour of any first-time visitor to Bali."
          ]
        },
        {
          "Day 5: Ubud Transfer, Kintamani Tour & Ubud Highlights": [
            "Transfer to your Ubud hotel by private car. Proceed for a full-day Kintamani Tour including visits to Legong Batik, UC Silver in Celuk Village, and wood carving at Mas Village (Rai Shop). Enjoy stunning views of Mount and Lake Batur from Kintamani village. Experience the Romantic Bali Swing, a scenic swing between coconut trees overlooking the jungle. Visit the famous Tegalalang Rice Terraces for scenic beauty and photo ops. End the day at Ubud Art Market, known for handcrafted souvenirs and local goods from nearby villages."
          ]
        },
        {
          "Day 6: Day at Leisure - Bali": [
            "Day at Leisure Day free at leisure, enjoy by your own."
          ]
        },
        {
          "Day 7: Departure from Hotel - Bali Denpasar Airport": [
            "Take a bag full of memories to cherish. Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."
          ]
        },
      ],

      inclusions: [
        "Git Git Waterfall ",
        "West Nusa Penida",
        "Kintamani Tour with Ubud village",
        "Ubud Art Market",
        "Flower Garland At Airport During Arrival",
        "Tanah lot temple"
      ],

      exclusions: [
        "Anything other than mentioned in inclusions and Itinerary.",
        "Any Kind of Insurance",
        "Festival and peak season surcharges",
        "Optional tours and personal expenses",
        "Driver Tipping"
      ],
      overviewData: {
        title: "Package Overview",
        content: "Enjoy 7 days in Bali with 4 nights in Kuta for beaches & nightlife, and 2 nights in Ubud for nature & culture. A perfect mix of adventure and relaxation! 🌴✨",
      },
      country: "Indonesia",
      tableData: {
        tab1: [
          {
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\Royal Tulip Springhill Resort\Pullman Bali Legian Beach",
          },
        ],

      }, // ✅ Closing
    },
    bali2: {
      packageId: "S04391",
      packageName: "Bali with Gili",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Kuta-3N --Nusa Penida-1N -- Gili-1N -- Ubud-2N",
      highlights: [
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport and speedboat transfers"
      ],
      includes: [
        { name: "Flights", icon: Plane },
        { name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR 82,499",

      packageImage: bali2, // replace with actual image variable
      itinerary: [
        {
          "Day 1: Arrival at Bali Airport - Transfer to Hotel": [
            "Welcome to Bali! Upon arrival at Denpasar Airport, meet our representative and transfer to your hotel. Relax and enjoy your day at leisure exploring the vibrant surroundings of Kuta. Overnight stay in Kuta."
          ]
        },
        {
          "Day 2: Benoa Water Sports & Uluwatu Sunset with Kecak Dance": [
            "Begin with exciting water sports at Benoa Beach including Banana Boat, Jet Ski, and Parasailing. In the evening, visit Uluwatu Temple perched on a cliff with breathtaking ocean views. Witness the stunning sunset followed by the dramatic Kecak & Fire Dance, portraying scenes from the Ramayana."
          ]
        },
        {
          "Day 3: Ulun Danu Temple, Git Git Waterfall & Tanah Lot Temple": [
            "Visit Ulun Danu Beratan Temple, a sacred water temple on Lake Beratan. Continue to Git Git Waterfall surrounded by lush tropical forest. End the day at the famous Tanah Lot Temple, offering spectacular sunset views over the ocean."
          ]
        },
        {
          "Day 4: Nusa Penida West Island Tour": [
            "Take a day trip to West Nusa Penida. Discover stunning beaches and viewpoints like Kelingking Beach, Angel’s Billabong, and Broken Beach. Enjoy panoramic cliffside views and crystal-clear waters before heading back to Bali. Overnight in Kuta."
          ]
        },
        {
          "Day 5: Transfer to Gili Island": [
            "Check out from your hotel and transfer to Padang Bai Harbour for a fast boat ride to Gili Island. Upon arrival, check-in to your hotel and explore this car-free island paradise. Spend the evening relaxing by the beach or go snorkeling. Overnight stay in Gili Island."
          ]
        },
        {
          "Day 6: Gili to Ubud Transfer & Leisure": [
            "After breakfast, return from Gili to Bali by speedboat. Transfer to your hotel in Ubud. The rest of the day is free to relax or explore Ubud’s peaceful surroundings. Overnight in Ubud."
          ]
        },
        {
          "Day 7: Kintamani Tour, Bali Swing & Ubud Highlights": [
            "Explore Ubud with a visit to Legong Batik, UC Silver at Celuk, and Mas Village for wood carving. Enjoy mountain and lake views at Kintamani. Experience the romantic Bali Swing, visit Tegalalang Rice Terraces, and shop at the Ubud Art Market."
          ]
        },
        {
          "Day 8: Departure from Ubud Hotel - Bali Denpasar Airport": [
            "Take a bag full of memories to cherish. Check out from your hotel and transfer to Denpasar Airport for your return flight home."
          ]
        }
      ],

      inclusions: [
        "Git Git Waterfall ",
        "West Nusa Penida",
        "Kintamani Tour with Ubud village",
        "Ubud Art Market",
        "Flower Garland At Airport During Arrival",
        "Tanah lot temple"
      ],

      exclusions: [
        "Anything other than mentioned in inclusions and Itinerary.",
        "Any Kind of Insurance",
        "Festival and peak season surcharges",
        "Optional tours and personal expenses",
        "Driver Tipping"
      ],

      overviewData: {
        title: "Package Overview",
        content: "Enjoy a perfect mix of Bali’s best—stay in lively Kuta, relax on the peaceful Gili Islands, and unwind in the cultural heart of Ubud. Beaches, nature, and island charm all in one trip. 🌊🌴",
      },

      country: "Indonesia",

      tableData: {
        tab1: [
          {
            star4: "Swiss-Belhotel Rainforest, The One Legian, Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort, Royal Tulip Springhill Resort, Pullman Bali Legian Beach",
          },
        ],
      },
    },
    bali3: {
      packageId: "S04391",
      packageName: "Bali Essence",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "Kuta-3N -- Ubud-2N",
      highlights: [
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport and speedboat transfers"
      ],
      includes: [
        { name: "Flights", icon: Plane },
        { name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR 65,499",

      packageImage: bali3, // replace with actual image variable
      itinerary: [
        {
          "Day 1: Arrival at Bali Airport - Transfer to Hotel": [
            "Welcome to Bali! Upon arrival at Denpasar Airport, meet our representative and transfer to your hotel. Relax and enjoy your day at leisure exploring the vibrant surroundings of Kuta. Overnight stay in Kuta."
          ]
        },
        {
          "Day 2: Benoa Water Sports & Uluwatu Sunset with Kecak Dance": [
            "Begin with exciting water sports at Benoa Beach including Banana Boat, Jet Ski, and Parasailing. In the evening, visit Uluwatu Temple perched on a cliff with breathtaking ocean views. Witness the stunning sunset followed by the dramatic Kecak & Fire Dance, portraying scenes from the Ramayana."
          ]
        },
        {
          "Day 3: Ulun Danu Temple, Git Git Waterfall & Tanah Lot Temple": [
            "Visit Ulun Danu Beratan Temple, a sacred water temple on Lake Beratan. Continue to Git Git Waterfall surrounded by lush tropical forest. End the day at the famous Tanah Lot Temple, offering spectacular sunset views over the ocean."
          ]
        },
        {
          "Day 4: Ubud Transfer, Kintamani Tour & Ubud Highlights": [
            "Transfer to your Ubud hotel by private car. Visit Legong Batik, UC Silver in Celuk (silver & gold works), and Rai Shop at Mas Village (wood carving). Head to Kintamani for breathtaking views of Mount and Lake Batur. Enjoy the romantic Pioneer Swing with jungle views. Explore the Tegalalang Rice Terraces, then end your day at Ubud Art Market, known for handcrafted souvenirs and local Balinese goods."
          ]
        },
        {
          "Day 5: Day at Leisure - Bali": [
            "Day free at leisure, enjoy by your own"
          ]
        },
        {
          "Day 6: Departure from Ubud Hotel - Bali Denpasar Airport": [
            "Take a bag full of memories to cherish. Check out from your hotel and transfer to Denpasar Airport for your return flight home."
          ]
        }
      ],

      inclusions: [
        "Git Git Waterfall ",
        "West Nusa Penida",
        "Kintamani Tour with Ubud village",
        "Ubud Art Market",
        "Flower Garland At Airport During Arrival",
        "Tanah lot temple"
      ],

      exclusions: [
        "Anything other than mentioned in inclusions and Itinerary.",
        "Any Kind of Insurance",
        "Festival and peak season surcharges",
        "Optional tours and personal expenses",
        "Driver Tipping"
      ],

      overviewData: {
        title: "Package Overview",
        content: "Enjoy 8 days in Bali with 4 nights in lively Kuta, 1 night on the serene Gili Island, and 2 nights in peaceful Ubud. A perfect escape with beaches, culture, island adventure, and scenic wonders! 🌊🌴",
      },

      country: "Indonesia",

      tableData: {
        tab1: [
          {
            star4: "Swiss-Belhotel Rainforest Kuta, One Legion, Golden Tulip Jineng Resort, Kuta Central, Alam Puisi Ubud, Ashoka Tree Resort Ubud, Bhumi Linggah, Ubud Heaven Sayan",
            star5: "Bintang Bali Resort, Royal Tulip Springhill Resort, Pullman Bali Legian Beach, Asvara Villa Ubud, FuramaXclusive Resort & Villas, Hideaway Village Bali",
          },
        ],
      },
    },
    bali4: {
      packageId: "S04390",
      packageName: "Enchanting Bali",
      nights: 6,
      days: 7,
      totalGuests: 2,
      theme: "Mumbai",
      destinationCovered: "Kuta-4N -- Ubud-2N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],
      totalPackagePrice: "INR 64,999",
      packageImage: bali4,
      itinerary: [
        {
          "Day 1: Airport Transfer from Bali(Denpasar) to Hotel": [
            "Welcome to Bali! Today is the First day of your trip. You will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at your leisure. Overnight stay at Hotel accommodation"
          ]
        },
        {
          "Day 2: Benoa Water Sports & Uluwatu Sunset with Kecak Dance": [
            "Start your day with fun water activities at Benoa Bay. Enjoy Banana Boat, Parasailing, and Jet Ski at Tanjung Benoa Beach, a peaceful place away from the city. In the evening, visit Uluwatu Temple, built on a high cliff with amazing views of the Indian Ocean. Watch a beautiful sunset, then enjoy the Kecak and Fire Dance – a unique show from the Ramayana story, where Hanuman sets fire to Ravana’s kingdom. The “kecak, kecak” chanting makes it even more special."
          ]
        },
        {
          "Day 3: Ulun Danu Beratan Temple, Git Git Waterfall & Tanah Lot Temple Tour": [
            "Begin the day with a visit to Ulun Danu Beratan Temple, a tranquil lakeside sanctuary dedicated to Goddess Danu, offering stunning views of Lake Beratan and the surrounding mountains. Continue to Git Git Waterfall, a 35-meter-high cascade nestled in North Bali’s lush rainforest, known for its serene atmosphere and frequent sightings of wild monkeys. Conclude with Tanah Lot Temple, a breathtaking coastal shrine perched on a rocky outcrop, renowned for its dramatic ocean views and unforgettable sunsets."
          ]
        },
        {
          "Day 4: Day at Leisure - Bali": [
            "Breakfast at hotel. Today is free at your own leisure. Overnight stay at hotel"
          ]
        },
        {
          "Day 5: Kintamani Tour, Bali Swing & Ubud Exploration": [
            "Begin the day with a private transfer to Ubud. Head towards Kintamani for a scenic view of Mount and Lake Batur, passing through Legong Batik, Celuk Village (famous for silver and gold works), and Mas Village (known for wood carving). Later, enjoy a romantic experience on the Bali Swing, soaring high above the jungle with panoramic views. Continue to the Tegalalang Rice Terrace, where you can admire the iconic layered paddies and take a short but invigorating trek. End the day at Ubud Art Market, a vibrant spot for handcrafted goods like silk scarves, wooden crafts, and souvenirs made in nearby artisan villages."
          ]
        },
        {
          "Day 6: Day at Leisure - Bali": [
            "Day free at leisure, enjoy by your own"
          ]
        },
        {
          "Day 7: Departure from Ubud Hotel - Bali Denpasar Airport": [
            "Take a bag full of memories to cherish. Check out from your hotel and transfer to Denpasar Airport for your return flight home."
          ]
        }

      ],
      inclusions: [
        "Git Git Waterfall ",
        "West Nusa Penida",
        "Kintamani Tour with Ubud village",
        "Ubud Art Market",
        "Flower Garland At Airport During Arrival",
        "Tanah lot temple"
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience the best of Bali and Ubud with our Enchanting Bali Package. Visit Kelingking Beach, Broken Beach, and snorkel around Gili’s underwater statues. Enjoy stunning beaches, crystal-clear waters, and seamless transfers for the perfect island escape! 🌴✨",
      },
      country: "Indonesia",
      tableData: {
        tab1: [
          {
            star4: "Swiss-Belhotel Rainforest, The One Legion, Golden Tulip Jineng Resort Kuta Central",
            star5: "Bintang Bali Resort, Royal Tulip Springhill Resort, Pullman Bali Legian Beach",
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
      destinationCovered: "Hanoi-1N -- Halong Bay-1N -- Da nang-2N -- Ho chi Minh-2N",
      highlights: [
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,00,999/- Onwards",

      packageImage:
        "https://static.toiimg.com/photo/109784668.cms",

      itinerary: [
        {
          "Day 1: Hanoi Arrival & Half-Day City Tour": [
            "Arrive in Hanoi, Vietnam’s vibrant capital. Enjoy a private airport transfer with a stop for traditional Vietnamese lunch (vegetarian options available). Visit Tran Quoc Pagoda, the city’s oldest pagoda, followed by the Temple of Literature, Vietnam’s first university. Explore Hoa Lo Prison, a colonial-era site turned museum. Check in at your hotel and enjoy free time. Overnight in Hanoi."
          ]
        },
        {
          "Day 2: Hanoi to Ha Long Bay (Overnight Cruise)": [
            "After breakfast and hotel check-out, travel from Hanoi to Ha Long Bay. At Tuan Chau Harbor, board the Verdure Lotus Cruise, enjoy a welcome drink, and receive a cruise briefing. Savor a seafood or vegetarian lunch while cruising through Halong–Lan Ha Bay. In the afternoon, relax on the sundeck or kayak in the Ba Trai Dao – Tra Bau area. Later, join Happy Hour and a cooking class. Enjoy dinner onboard, then try squid fishing or unwind on deck. Overnight on the cruise."
          ]
        },
        {
          "Day 3: Halong Departure - Arrival in Da nang": [
            "Begin the day with sunrise Tai Chi on the sundeck, followed by breakfast with bay views. Explore Dark and Light Cave by kayak or bamboo boat. After cabin check-out, enjoy lunch while cruising back to Tuan Chau Port. Transfer to Noi Bai Airport for your flight to Da Nang. Upon arrival, check in and relax."
          ]
        },
        {
          "Day 4: Ba Na Hills with Golden Bridge": [
            "After breakfast, travel to Ba Na Hills via cable car. Visit the iconic Golden Bridge, French Village, Linh Ung Pagoda, and enjoy thrilling rides at Fantasy Park. Savor a buffet lunch with panoramic views. Spend the afternoon exploring and taking photos. Return to Da Nang in the evening for leisure time and an overnight stay at the hotel."
          ]
        },
        {
          "Day 5: Da Nang Departure – Ho Chi Minh Arrival & Cu Chi Tunnels Tour": [
            "After breakfast, check out and fly from Da Nang to Ho Chi Minh City. Upon arrival, store your luggage and head to the Cu Chi Tunnels, a 220 km underground network used during the Vietnam War. Explore hidden tunnels, try wartime food, and optional AK-47 shooting. Return to the hotel for check-in. Free leisure and overnight stay."
          ]
        },
        {
          "Day 6: Mekong Delta Tour": [
            "After breakfast, depart from Ho Chi Minh City for a scenic drive to My Tho. Cruise along the Mekong River, visiting Dragon, Unicorn, Phoenix, and Turtle Islands. Explore a bee farm, enjoy honey wine, take a rowing boat ride, visit a coconut candy workshop, and enjoy a local lunch. Return by evening. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 7: Departure - Ho chi minh": [
            "Have breakfast at hotel, Do hotel check-out, Our driver will take you directly to the Tan Son Nhat International Airport as your departure flight"
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore Vietnam’s culture, nature, and history through Hanoi, Ha Long Bay, Da Nang, and Ho Chi Minh in 7 unforgettable days.",
      },
      country: "Indonesia",
      inclusions: [
        "Hanoi Half Day City Tour - SIC",
        "Daily Breakfast at Hotel Accommodation",
        "Flower Garland At Airport During Arrival",
        "Ba Na Hills with Golden Bridge",
        "English Speaking Driver during Tours and Transfers",
        "Ba Na Hills Cable Car"
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",

      ],
      tableData: {
        tab1: [
          {
            star4: "Hanoian Central Hotel & Spa, Verdure Lotus Cruise, Eden Ocean Da Nang Hotel",
            star5: "Melia Hanoi Hotel, La Regina Legend Cruise, DLG Da Nang Hotel",
          },
        ],
      },
    },
    vietnam2: {
      packageId: "S04390",
      packageName: "Vietnam Explorer",
      totalGuests: 2,
      nights: 7,
      days: 8,
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 7-night, 8-day journey through Vietnam, from Hanoi’s charm to Halong Bay’s beauty, Da Nang’s beaches, and Ho Chi Minh City’s vibrant energy. A perfect mix of relaxation, adventure, and culture!",
      },
      country: "Indonesia",
      theme: "Mumbai",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      destinationCovered: "Hanoi-1N -- Halong Bay-1N -- Da nang-3N -- Ho chi Minh-2N",
      totalPackagePrice: "INR ₹ 1,04,599/- Onwards",

      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",

      itinerary: [
        {
          "Day 1: Hanoi Arrival & Half-Day City Tour": [
            "Arrive in Hanoi, Vietnam’s vibrant capital. Enjoy a private airport transfer with a stop for traditional Vietnamese lunch (vegetarian options available). Visit Tran Quoc Pagoda, the city’s oldest pagoda, followed by the Temple of Literature, Vietnam’s first university. Explore Hoa Lo Prison, a colonial-era site turned museum. Check in at your hotel and enjoy free time. Overnight in Hanoi."
          ]
        },
        {
          "Day 2: Hanoi to Ha Long Bay – Overnight on Cruise": [
            "have breakfast at hotel, travel from Hanoi to Ha Long Bay. Board the Verdure Lotus Cruise, enjoy a welcome drink, and settle in. Relish a Vietnamese lunch while cruising through Lan Ha Bay. Spend the afternoon kayaking or relaxing on the sundeck. Join the Happy Hour and cooking class. After dinner, try squid fishing or relax onboard. Overnight on cruise."
          ]
        },
        {
          "Day 3: Halong Bay – Da Nang": [
            "Start your day with sunrise Tai Chi on the sundeck, followed by breakfast with stunning bay views. Explore the Dark and Light Cave by kayak or bamboo boat. Return to your cabin to prepare for checkout, then enjoy lunch as the cruise heads back to Tuan Chau Port. Transfer to Hanoi Airport for your flight to Da Nang. Upon arrival, check in and relax. Overnight in Da Nang."
          ]
        },
        {
          "Day 4: Ba Na Hills & Golden Bridge Tour": [
            "After breakfast, depart for Ba Na Hills via a scenic coastal drive. Ride the record-breaking cable car and admire views of Mo Stream and Toc Tien Waterfall. Explore Ba Na’s highlights including the iconic Golden Bridge, French gardens, Linh Ung Pagoda, and Buddha Statue. Enjoy a buffet lunch, visit Fantasy Park, and take in panoramic views before returning to Da Nang. Overnight in Da Nang."
          ]
        },
        {
          "Day 5: Son Tra Peninsula, Marble Mountain & Hoi An Ancient Town": [
            "Enjoy a leisurely morning. In the afternoon, visit Linh Ung Pagoda on Son Tra Peninsula. Explore Marble Mountain’s caves, pagodas, and sculpture village. Head to Hoi An for a delicious local dinner, then stroll through the lantern-lit streets of the ancient town, visiting highlights like the Japanese Bridge. Return to Da Nang. Overnight in Da Nang."
          ]
        },
        {
          "Day 6: Da Nang to Ho Chi Minh City – Cu Chi Tunnels Tour": [
            "After breakfast, check out and transfer to Da Nang Airport for your flight to Ho Chi Minh City. Upon arrival, transfer to the hotel for check-in and baggage storage. In the afternoon, visit the historic Cu Chi Tunnels, a 220 km underground network from the Vietnam War. Return by evening. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 7: Mekong Delta Exploration": [
            "After breakfast, depart from Ho Chi Minh City for a scenic drive to the Mekong Delta. Cruise through Dragon, Unicorn, Phoenix, and Turtle Islands by motorboat. Visit a bee farm, enjoy local wines, and take a rowing boat ride through coconut canals. Explore Ben Tre’s coconut candy workshop, savor a Vietnamese lunch, and enjoy tropical fruits with traditional music. Return by evening. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 8: Departure - Ho chi minh": [
            "Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the airport to board your return flight back home."
          ]
        },
      ],
      inclusions: [
        "Hanoi Half Day City Tour - SIC",
        "Cu Chi Tunnels tour",
        "Flower Garland At Airport During Arrival",
        "Ba Na Hills with Golden Bridge",
        "English Speaking Driver during Tours and Transfers",
        "Mekong Boating"
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Hanoian Central Hotel & Spa, Verdure Lotus Cruise, Eden Ocean Da Nang Hotel",
            star5: "Melia Hanoi Hotel, La Regina Legend Cruise, DLG Da Nang Hotel",
          },
        ],
      },
    },
    vietnam3: {
      packageId: "S04390",
      packageName: "Vietnam Wonders",
      totalGuests: 2,
      nights: 8,
      days: 9,
      theme: "Mumbai",
      destinationCovered: "Hanoi-2N -- Halong Bay-1N -- Da nang-3N -- Ho chi Minh-2N",
      totalPackagePrice: "INR ₹1,10,499/- Onwards",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience the best of Vietnam on this 9-day tour, exploring the bustling streets of Hanoi, the serene beauty of Halong Bay, the historical charm of Da Nang, and the tropical paradise.. Stay in deluxe accommodations throughout the journey, ensuring comfort and relaxation as you uncover the rich culture, history, and natural beauty of this stunning country.",
      },
      country: "Indonesia",
      packageImage:
        "https://www.odysseytravels.net/uploads/package/map_pic/the-wonders-of-vietnam--cambodia-232.jpg",
      itinerary: [
        {
          "Day 1:Hanoi Arrival & Half-Day City Tour": [
            "Arrive in Hanoi and transfer to the hotel for baggage storage. Enjoy lunch with Vietnamese cuisine. Visit Tran Quoc Pagoda, Temple of Literature, and Hoa Lo Prison to explore Hanoi’s history and culture. Return to the hotel for check-in. Free leisure and overnight stay in Hanoi."
          ]
        },
        {
          "Day 2: Ninh Binh Tour (Hoa Lu – Trang An – Mua Cave)": [
            "After breakfast, depart for Ninh Binh. Visit the ancient capital of Hoa Lu and the temples of King Dinh and King Le. Enjoy a countryside cycling tour and a buffet lunch. Explore the scenic Trang An caves by boat, then hike up Mua Cave for panoramic views. Return to Hanoi in the evening. Overnight in Hanoi."
          ]
        },
        {
          "Day 3: Ha Noi to Ha Long Bay (Overnight Cruise)": [
            "Depart for Ha Long Bay. Board the Verdure Lotus Cruise and enjoy a welcome drink and safety briefing. Savor a Vietnamese lunch while cruising through Lan Ha Bay. In the afternoon, kayak or relax at Ba Trai Dao area. Join the onboard Happy Hour and cooking class. Dinner and overnight on the cruise."
          ]
        },
        {
          "Day 4: Halong Departure & Arrival in Da Nang": [
            "Start the day with sunrise Tai Chi on the sundeck, followed by breakfast. Explore the Dark and Light Cave by kayak or bamboo boat. Return to the cruise, check out, and enjoy lunch while cruising back to the harbor. Transfer to Noi Bai Airport for your flight to Da Nang. On arrival, Free leisure and overnight in Da Nang."
          ]
        },
        {
          "Day 5: Ba Na Hills & Golden Bridge Tour": [
            "Depart for Ba Na Hills via a scenic seaside road. Ride the record-breaking cable car to enjoy views of Mo Stream and Toc Tien Waterfall. Visit the iconic Golden Bridge, French gardens, Linh Ung Pagoda, and Buddha Statue. Continue to Nui Chua Peak for buffet lunch and explore Fantasy Park. Return to Da Nang by evening."
          ]
        },
        {
          "Day 6:  Son Tra Peninsula, Marble Mountains & Hoi An Ancient Town": [
            "Enjoy a relaxed morning in Da Nang. In the afternoon, visit Linh Ung Pagoda on Son Tra Peninsula and explore the Marble Mountains’ caves, pagodas, and stone carving village. Head to Hoi An in the evening for a traditional dinner and stroll through lantern-lit streets. Visit the Japanese Bridge before returning to Da Nang for an overnight stay."
          ]
        },
        {
          "Day 7:Da Nang to Ho Chi Minh City & Cu Chi Tunnels": [
            "Check out and fly to Ho Chi Minh City. On arrival, transfer to the hotel. In the afternoon, explore the historic Cu Chi Tunnels, learn about wartime life, and try hands-on activities. Return to the hotel in the evening. Enjoy free leisure time and overnight stay in Ho Chi Minh City."
          ]
        },
        {
          "Day 8: Mekong Delta Tour": [
            "Drive to My Tho through lush rice fields and local villages. Cruise by boat through the Mekong’s islands, visit a honey farm, and enjoy a rowing boat ride through coconut canals. Explore a coconut candy workshop in Ben Tre and enjoy lunch. End the day with tropical fruits and traditional music before returning to Ho Chi Minh City."
          ]
        },
        {
          "Day 9: Departure - Ho chi minh": [
            "Have breakfast at hotel, Take a bag full of memories to cherish Check out from the hotel and meet the representative who will take you to the airport to board your return flight back home."
          ]
        },
      ],
      inclusions: [
        "Hanoi Half Day City Tour - SIC",
        "Cu Chi Tunnels tour",
        "Flower Garland At Airport During Arrival",
        "Ba Na Hills with Golden Bridge",
        "English Speaking Driver during Tours and Transfers",
        "Mekong Boating"
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Hanoian Central Hotel & Spa, Verdure lotus cruise,Eden Ocean Da nang Hotel, Alagon Saigoan Hotel & Spa",
            star5: "Melia Hanoi Hotel, La Regina Legend Cruise, DLG Da Nang Hotel, La Siesta Premium Saigon Hotel",
          },
        ],
      },
    },
    vietnam4: {
      packageId: "S04390",
      packageName: "Classic Vietnam",
      totalGuests: 2,
      nights: 5,
      days: 6,
      highlights: [
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Breakfast", icon: Utensils },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi-1N -- Sapa-1N -- Halong Bay-1N -- Da nang-2N",
      totalPackagePrice: "INR 92,599",
      overviewData: {
        title: "Package Overview",
        content: "Explore Hanoi, Halong Bay, and Ninh Binh in 6 days. Enjoy a Halong Bay cruise, visit Hoa Lu Ancient Capital, and discover the caves and landscapes of Trang An. Hike to Mua Cave for stunning views and cycle through local villages, blending nature, culture, and adventure.",
      },
      country: "Indonesia",
      packageImage:
        "https://www.vjv.com/media/y4rhjy5j/tran-quoc-pagoda-the-oldest-temple-in-hanoi-vietnam.jpg?width=1920&height=1080&quality=60",
      itinerary: [
        {
          "Day 1: Hanoi Arrival & Half-Day City Tour": [
            "Arrive in Hanoi, Vietnam’s vibrant capital. Enjoy a private airport transfer with a stop for traditional Vietnamese lunch (vegetarian options available). Visit Tran Quoc Pagoda, the city’s oldest pagoda, followed by the Temple of Literature, Vietnam’s first university. Explore Hoa Lo Prison, a colonial-era site turned museum. Check in at your hotel and enjoy free time. Overnight in Hanoi."
          ]
        },
        {
          "Day 2: Hanoi to Sapa & Cat Cat Village": [
            "Travel to Sapa by sleeping bus, enjoying scenic views along the way. Arrive and check-in. In the afternoon, hike to Cat Cat Village to explore the Black H’mong tribe, visit the French-built hydroelectric station, and enjoy views of rice paddies and waterfalls. Evening free for exploration. Overnight in Sapa."
          ]
        },
        {
          "Day 3: Tour to Ninh Binh (Hoa Lu, Trang An, Mua Cave)": [
            "After breakfast, depart for Ninh Binh, visiting Hoa Lu Ancient Capital, home to the temples of King Dinh and King Le. Take a 45-minute cycle around the village. Enjoy a boat trip through the UNESCO-listed Trang An, exploring caves like Sang Cave and Toi Cave. Continue to Mua Cave, hike 500 steps for panoramic views of Tam Coc. Return to Hanoi for an overnight stay."
          ]
        },
        {
          "Day 4: Da Nang Arrival, Marble Mountain & Hoi An": [
            "After breakfast and check-out, fly to Da Nang. Upon arrival, check-in at the hotel. In the afternoon, visit Marble Mountain, explore its caves, pagodas, and stone sculptures. Then, head to Hoi An for dinner and a stroll through the lantern-lit streets, visiting the Japanese Bridge. Return to Da Nang for overnight stay."
          ]
        },
        {
          "Day 5: Ba Na Hills with Golden Bridge": [
            "After breakfast, depart for Ba Na Hills, enjoying the scenic coastal drive. Experience the world-record cable car ride, visit the Golden Bridge held by giant hands, explore French architecture, Linh Ung Pagoda, and Nui Chua Peak. Enjoy Fantasy Park and panoramic views of Da Nang. Return to the hotel for leisure and overnight stay."
          ]
        },
        {
          "Day 6: Departure - Ho chi minh": [
            "Have breakfast at hotel, Take a bag full of memories to cherish Check out from the hotel and meet the representative who will take you to the airport to board your return flight back home."
          ]
        },
      ],
      inclusions: [
        "Hanoi Half Day City Tour - SIC",
        "Cu Chi Tunnels tour",
        "Flower Garland At Airport During Arrival",
        "Ba Na Hills with Golden Bridge",
        "English Speaking Driver during Tours and Transfers",
        "Mekong Boating"
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Hanoian Central Hotel & Spa, Verdure lotus cruise,Eden Ocean Da nang Hotel, Alagon Saigoan Hotel & Spa",
            star5: "Melia Hanoi Hotel, La Regina Legend Cruise, DLG Da Nang Hotel, La Siesta Premium Saigon Hotel",
          },
        ],
      },
    },
    vietnam5: {
      packageId: "S04390",
      packageName: "Vietnam with sapa",
      totalGuests: 2,
      nights: 9,
      days: 10,
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi-2N -- Sapa-1N -- Halong Bay-1N -- Da nang-3N -- Ho chi minh-2N",
      totalPackagePrice: "INR 1,22,999",
      overviewData: {
        title: "Package Overview",
        content: "Discover the charm of Vietnam on a 9 days and 10 nights journey through Hanoi, Sapa, Ha Long Bay, Da Nang, and Ho Chi Minh City — featuring mountain treks, cultural gems, scenic cruises, and unforgettable local experiences."
      },
      country: "Indonesia",
      packageImage:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/01/Sapa-Valley-feature.jpg",
      itinerary: [
        {
          "Day 1: Hanoi Arrival & Half-Day City Tour": [
            "Arrive in Hanoi, Vietnam’s vibrant capital. Enjoy a private airport transfer with a stop for traditional Vietnamese lunch (vegetarian options available). Visit Tran Quoc Pagoda, the city’s oldest pagoda, followed by the Temple of Literature, Vietnam’s first university. Explore Hoa Lo Prison, a colonial-era site turned museum. Check in at your hotel and enjoy free time. Overnight in Hanoi."
          ]
        },
        {
          "Day 2: Journey to Sapa & Explore Cat Cat Village": [
            "After breakfast, check out and depart for Sapa, enjoying scenic views of mountains and terraced fields. Arrive and check-in at the hotel. In the afternoon, hike to Cat Cat Village to explore the Black H'mong tribe's culture, terraced fields, waterfalls, and traditional crafts. Return to the hotel and enjoy free time to explore Sapa at night. Overnight in Sapa."
          ]
        },
        {
          "Day 3: Conquer Fansipan & Return to Hanoi": [
            "Head to Fansipan Cable Car Station to begin your journey to the top of Fansipan, the roof of Indochina, at 3,143 meters above sea level. Afterward, return to Sapa, collect your luggage, and travel back to Hanoi by sleeping bus. Upon arrival, enjoy dinner and check in at your hotel. Free time for leisure in Hanoi."
          ]
        },
        {
          "Day 4: Ha Noi to Ha Long Bay - 1 Night Cruise": [
            "Depart Hanoi for Ha Long Bay. Arrive at Tuan Chau harbor and board the Verdure Lotus Cruise. Enjoy a seafood lunch while cruising through Halong – Lan Ha Bay. Explore Ba Trai Dao and experience kayaking. Participate in a cooking class and relax before dinner. Optional activities include squid fishing and enjoying drinks on the sundeck. Overnight on the boat."
          ]
        },
        {
          "Day 5: Ha Long Departure – Da Nang Arrival": [
            "Enjoy morning activities on the cruise with Tai Chi, breakfast, and exploration of the Dark and Light Cave. After checking out, enjoy lunch while cruising back. Arrive at Tuan Chau port and head to the airport for your flight to Da Nang. Upon arrival, check-in at your hotel and enjoy free time. Overnight in Da Nang."
          ]
        },
        {
          "Day 6: Da Nang – Son Tra Peninsula – Marble Mountain – Hoi An": [
            "In the afternoon, visit Linh Ung Pagoda, then explore Marble Mountain and the beautiful stone carvings. Afterward, visit Hoi An Ancient Town, enjoy local dishes, and explore the town with its iconic Japanese Bridge and colorful lanterns. Return to your hotel in Da Nang. Overnight in Da Nang."
          ]
        },
        {
          "Day 7: Da Nang – Ba Na Hills with Golden Bridge": [
            "Take a cable car to Ba Na Hills, see the Golden Bridge held by giant hands, visit L’Jardin and Linh Ung Pagoda, and enjoy panoramic views. After a buffet lunch, visit Fantasy Park, and explore Chua Linh Tu Temple. Return to Da Nang for free leisure time. Overnight in Da Nang."
          ]
        },
        {
          "Day 8: Da Nang Departure – Ho Chi Minh Arrival": [
            "Depart for the Da Nang Airport to fly to Ho Chi Minh City. On arrival, check in at your hotel, store baggage, and embark on a city tour to the Independence Palace, Central Post Office, and War Remnants Museum. In the afternoon, take a trip to Cu Chi Tunnels. Return to your hotel for leisure time. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 9: Mekong Delta Tour": [
            "Depart for the Mekong Delta. Ride a boat to explore the islands, visit a bee farm, and enjoy tropical fruits. Explore the village life and visit a coconut candy workshop. Have lunch in a local restaurant before returning to Ho Chi Minh City. Free time for the rest of the day. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 7: Departure - Ho chi minh": [
            "Have breakfast at hotel, Do hotel check-out, Our driver will take you directly to the Tan Son Nhat International Airport as your departure flight"
          ]
        }
      ],
      inclusions: [
        "Hanoi Half Day City Tour - SIC",
        "Cu Chi Tunnels tour",
        "Flower Garland At Airport During Arrival",
        "Ba Na Hills with Golden Bridge",
        "English Speaking Driver during Tours and Transfers",
        "Mekong Boating"
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Hanoian Central Hotel & Spa, Verdure lotus cruise,Eden Ocean Da nang Hotel, Alagon Saigoan Hotel & Spa",
            star5: "Melia Hanoi Hotel, La Regina Legend Cruise, DLG Da Nang Hotel, La Siesta Premium Saigon Hotel",
          },
        ],
      },

    },
    vietnam6: {
      packageId: "S04390",
      packageName: "Vietnam with Phu Quoc",
      totalGuests: 2,
      nights: 9,
      days: 10,
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi-2N -- Phu Quac-1N -- Halong Bay-1N -- Da nang-3N -- Ho chi minh-2N",
      totalPackagePrice: "INR 1,15,999",
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 10 days and 9 night adventure in Vietnam that includes phu quac, da nang beautiful views and luxury accommodations.",
      },
      country: "Indonesia",
      packageImage:
        "https://image.vietnam.travel/sites/default/files/styles/article_photo_large/public/2021-05/Topas%20Ecolodge%20Sapa%20Vietnam%20Tourism.jpg?itok=aNzS8Kss",
      itinerary: [
        {
          "Day 1: Hanoi Arrival & Half-Day City Tour": [
            "Arrive in Hanoi, Vietnam’s vibrant capital. Enjoy a private airport transfer with a stop for traditional Vietnamese lunch (vegetarian options available). Visit Tran Quoc Pagoda, the city’s oldest pagoda, followed by the Temple of Literature, Vietnam’s first university. Explore Hoa Lo Prison, a colonial-era site turned museum. Check in at your hotel and enjoy free time. Overnight in Hanoi."
          ]
        },
        {
          "Day 2: Journey to Phu Quoc & Relax on the Beach": [
            "After breakfast, check out and head to the airport for a flight to Phu Quoc. Upon arrival, check in at your hotel and enjoy free time to relax on the beach or explore the island at your leisure. Overnight in Phu Quoc."
          ]
        },
        {
          "Day 3: Explore Phu Quoc & Visit Vinpearl Safari": [
            "After breakfast, visit Vinpearl Safari, a wildlife conservation park home to a wide range of animals. Enjoy exploring the park and learn about conservation efforts. In the afternoon, relax on Phu Quoc’s pristine beaches or visit a local market. Return to your hotel for a free evening. Overnight in Phu Quoc."
          ]
        },
        {
          "Day 4: Phu Quoc to Ha Long Bay – 1 Night Cruise": [
            "Depart Phu Quoc and return to Hanoi. Upon arrival, transfer to Ha Long Bay. Arrive at Tuan Chau harbor and board the Verdure Lotus Cruise. Enjoy a seafood lunch while cruising through Halong – Lan Ha Bay. Explore Ba Trai Dao and experience kayaking. Participate in a cooking class and relax before dinner. Optional activities include squid fishing and enjoying drinks on the sundeck. Overnight on the boat."
          ]
        },
        {
          "Day 5: Ha Long Departure – Da Nang Arrival": [
            "Enjoy morning activities on the cruise with Tai Chi, breakfast, and exploration of the Dark and Light Cave. After checking out, enjoy lunch while cruising back. Arrive at Tuan Chau port and head to the airport for your flight to Da Nang. Upon arrival, check-in at your hotel and enjoy free time. Overnight in Da Nang."
          ]
        },
        {
          "Day 6: Da Nang – Son Tra Peninsula – Marble Mountain – Hoi An": [
            "In the afternoon, visit Linh Ung Pagoda, then explore Marble Mountain and the beautiful stone carvings. Afterward, visit Hoi An Ancient Town, enjoy local dishes, and explore the town with its iconic Japanese Bridge and colorful lanterns. Return to your hotel in Da Nang. Overnight in Da Nang."
          ]
        },
        {
          "Day 7: Da Nang – Ba Na Hills with Golden Bridge": [
            "Take a cable car to Ba Na Hills, see the Golden Bridge held by giant hands, visit L’Jardin and Linh Ung Pagoda, and enjoy panoramic views. After a buffet lunch, visit Fantasy Park, and explore Chua Linh Tu Temple. Return to Da Nang for free leisure time. Overnight in Da Nang."
          ]
        },
        {
          "Day 8: Da Nang Departure – Ho Chi Minh Arrival": [
            "Depart for the Da Nang Airport to fly to Ho Chi Minh City. On arrival, check in at your hotel, store baggage, and embark on a city tour to the Independence Palace, Central Post Office, and War Remnants Museum. In the afternoon, take a trip to Cu Chi Tunnels. Return to your hotel for leisure time. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 9: Mekong Delta Tour": [
            "Depart for the Mekong Delta. Ride a boat to explore the islands, visit a bee farm, and enjoy tropical fruits. Explore the village life and visit a coconut candy workshop. Have lunch in a local restaurant before returning to Ho Chi Minh City. Free time for the rest of the day. Overnight in Ho Chi Minh City."
          ]
        },
        {
          "Day 10: Departure – Ho Chi Minh": [
            "Have breakfast at hotel, check out, and our driver will take you directly to Tan Son Nhat International Airport for your departure flight."
          ]
        }
      ],

      inclusions: [
        "Hanoi Half Day City Tour - SIC",
        "Cu Chi Tunnels tour",
        "Flower Garland At Airport During Arrival",
        "Ba Na Hills with Golden Bridge",
        "English Speaking Driver during Tours and Transfers",
        "Mekong Boating"
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Hanoian Central Hotel & Spa, Verdure lotus cruise,Eden Ocean Da nang Hotel, Alagon Saigoan Hotel & Spa",
            star5: "Melia Hanoi Hotel, La Regina Legend Cruise, DLG Da Nang Hotel, La Siesta Premium Saigon Hotel",
          },
        ],
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹87,399/- Onwards",

      packageImage:
        "https://www.salamair.com/images/gyd.jpg.jpg",

      itinerary: [
        {
          "Day 1: Arrival in Baku": [
            "Arrive at Baku Airport and enjoy a private transfer to your hotel. After check-in, take time to relax or explore the local surroundings at your leisure. Overnight in Baku."
          ]
        },
        {
          "Day 2: Baku Panoramic Tour": [
            "Begin your day at Highland Park and the Alley of Martyrs, offering panoramic views of Baku. See the iconic Flame Towers and the National Assembly. Enjoy a walk along the scenic Baku Boulevard by the Caspian Sea. Evening is free for you to experience Baku’s vibrant nightlife. Overnight in Baku."
          ]
        },
        {
          "Day 3: Baku City Exploration": [
            "Explore Baku’s Old City (Icherisheher), including UNESCO-listed sites like the Palace of the Shirvanshahs and Maiden Tower. Stroll down Nizami Street, known for shopping and cafes. Later, visit the stunning Heydar Aliyev Center, a modern architectural masterpiece. Enjoy free time before returning to your hotel. Overnight in Baku."
          ]
        },
        {
          "Day 4: Fire Tour – Ateshgah & Yanardag": [
            "After breakfast, visit Ateshgah Fire Temple, an ancient Zoroastrian site. Continue to Yanardag, the legendary ‘Burning Mountain’ where flames rise from the earth. Return to Baku and enjoy your evening at leisure. Overnight in Baku."
          ]
        },
        {
          "Day 5: Full-Day Gabala Excursion": [
            "Depart for Gabala, a scenic mountain town about 3 hours from Baku. Visit the Tufandaq Winter-Summer Tourism Complex for activities like cable car rides and skiing (seasonal). Continue to tranquil Nohur Lake for stunning views and relaxation. Return to Baku in the evening. Overnight in Baku."
          ]
        },
        {
          "Day 6: Departure from Baku": [
            "Enjoy breakfast at the hotel before checking out. Transfer to Baku Airport for your departure flight."
          ]
        }

      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 6-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      country: "Indonesia",
      inclusions: [
        "Panoramic Tour",
        "Baku City Tour",
        "5N Accommodation in Baku and 1N Gabala",
        "Mud Volcanoes & Gobustan Tour",
        "Shahdag Tour",
        "Cable Car Ticket for Gabala Tour",
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Grand Europe, Gabala garden, Grand Europe",
            star5: "Marriott Boulevard Baku Hotel, Gabala garden, Marriott Boulevard Baku Hotel",
          },
        ],
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,20,199/- Onwards",

      packageImage:
        "https://www.swiss.com/aircore/media/65/eyJpZGVudGlmaWVyIjozMjY0MjksInR5cGUiOiJhc3NldCJ9.png",

      itinerary: [
        {
          "Day 1: Arrival in Baku": [
            "Arrive at Baku Airport and transfer to your hotel for check-in. After settling in, enjoy free time to explore Baku at your leisure. Overnight in Baku."
          ]
        },
        {
          "Day 2: Baku Panoramic Tour": [
            "Start your day at Highland Park and the Alley of Martyrs for panoramic views of Baku. Visit the National Assembly (Milli Majlis) and the iconic Flame Towers. Enjoy a walk along Baku Boulevard by the Caspian Sea. In the evening, take time to explore the city’s lively nightlife. Overnight in Baku."
          ]
        },
        {
          "Day 3: Baku City Tour": [
            "Explore the Old City (Icherisheher), home to the Palace of the Shirvanshahs and Maiden Tower, both UNESCO-listed landmarks. Stroll along Nizami Street, a popular shopping and cultural avenue. Later, visit the Heydar Aliyev Center, a modern architectural masterpiece by Zaha Hadid. Overnight in Baku."
          ]
        },
        {
          "Day 4: Shahdag Mountain & Candy Cane Mountain": [
            "Embark on a scenic journey to Shahdag Mountain in the Caucasus range. On the way, stop at Candy Cane Mountain, a colorful striped natural formation ideal for photos. Continue exploring Shahdag’s stunning alpine landscapes and enjoy optional activities in the area. Return and overnight in Baku."
          ]
        },
        {
          "Day 5: Gobustan & Mud Volcanoes Tour": [
            "Visit Gobustan Rock Art Museum, a UNESCO World Heritage Site featuring over 6,000 ancient petroglyphs. Continue to the nearby Mud Volcanoes, a rare geological phenomenon where natural gas causes bubbling mud pools. Experience the unique terrain and return to Baku for the night. Overnight in Baku."
          ]
        },
        {
          "Day 6: Baku to Gabala with Enroute Stops": [
            "After breakfast, check out and begin your journey to Gabala. Enroute, stop in Shamakhi to visit the Diri Baba Mausoleum and historic Juma Mosque. Optional visits include an Alpaca Farm or Meysari Winery for a local wine-tasting experience. Arrive in Gabala and check in at your hotel. Overnight in Gabala."
          ]
        },
        {
          "Day 7: Gabala Tour & Departure": [
            "In the morning, visit Tufandaq Winter-Summer Tourism Complex for scenic cable car rides and entertainment. Continue to Nohur Lake, nestled in the mountains, for peaceful views and relaxation. After the tour, return to Baku and transfer to the airport for your departure flight."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 7-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },

      country: "Indonesia",
      inclusions: [
        "Panoramic Tour",
        "Baku City Tour",
        "5N Accommodation in Baku and 1N Gabala",
        "Mud Volcanoes & Gobustan Tour",
        "Shahdag Tour",
        "Cable Car Ticket for Gabala Tour",
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Grand Europe, Gabala garden, Grand Europe",
            star5: "Marriott Boulevard Baku Hotel, Gabala garden, Marriott Boulevard Baku Hotel",
          },
        ],
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,22,599/- Onwards",

      packageImage:
        "https://cdn.rt.emap.com/wp-content/uploads/sites/4/2014/01/30051846/HAC_Exterior_Photo_by_Hufton_Crow__1__1-1.jpg",

      itinerary: [
        {
          "Day 1 - Arrival in Baku & Panoramic Tour": [
            "Arrive in Baku and check in to your hotel. Later, enjoy a panoramic tour including Highland Park, the Alley of Martyrs, National Assembly, Flame Towers, and a walk along Baku Boulevard. Enjoy the evening at leisure. Overnight in Baku."
          ]
        },
        {
          "Day 2 - Baku City Tour": [
            "Explore the Old City including the Shirvanshahs’ Palace and Maiden Tower. Visit Nizami Street for shopping and end with a photo stop at the Heydar Aliyev Center. Overnight in Baku."
          ]
        },
        {
          "Day 3 - Shahdag Tour": [
            "Take a scenic drive to Shahdag Mountain Resort with a photo stop at Candy Cane Mountain. Enjoy alpine landscapes and outdoor activities. Return to Baku for overnight stay."
          ]
        },
        {
          "Day 4 - Absheron + Gobustan & Mud Volcanoes Tour": [
            "Visit the Ateshgah Fire Temple and Yanar Dag in the Absheron Peninsula. Continue to Gobustan to see ancient petroglyphs and the Mud Volcanoes. Return for overnight in Baku."
          ]
        },
        {
          "Day 5 - Transfer to Gabala via Shamakhi": [
            "Transfer to Gabala with stops at Diri Baba Mausoleum and Juma Mosque in Shamakhi. Optional visits to the Alpaca Farm or Meysari Winery. Check in and overnight in Gabala."
          ]
        },
        {
          "Day 6 - Gabala Tour": [
            "Visit Nohur Lake, the 7 Gozel Waterfall, and the Tufandag Mountain Resort with cable car rides and scenic views. Overnight in Gabala."
          ]
        },
        {
          "Day 7 - Gabala to Baku & Departure": [
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
      country: "Indonesia",

      inclusions: [
        "Panoramic Tour",
        "Baku City Tour",
        "5N Accommodation in Baku and 1N Gabala",
        "Mud Volcanoes & Gobustan Tour",
        "Shahdag Tour",
        "Cable Car Ticket for Gabala Tour",
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Grand Europe, Gabala garden, Grand Europe",
            star5: "Marriott Boulevard Baku Hotel, Gabala garden, Marriott Boulevard Baku Hotel",
          },
        ],
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,26,999/- Onwards",

      packageImage:
        "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/11/Modern-skyscraper-in-Baku-Azerbaijan.jpg",

      itinerary: [
        {
          "Day 1 - Arrival in Baku & Panoramic Tour": [
            "Arrive in Baku and check in to your hotel. Later, enjoy a panoramic tour including Highland Park, the Alley of Martyrs, National Assembly, Flame Towers, and a walk along Baku Boulevard. Enjoy the evening at leisure. Overnight in Baku."
          ]
        },
        {
          "Day 2 - Baku City Tour": [
            "Explore the Old City including the Shirvanshahs’ Palace and Maiden Tower. Visit Nizami Street for shopping and end with a photo stop at the Heydar Aliyev Center. Overnight in Baku."
          ]
        },
        {
          "Day 3 - Shahdag Tour": [
            "Take a scenic drive to Shahdag Mountain Resort with a photo stop at Candy Cane Mountain. Enjoy alpine landscapes and outdoor activities. Return to Baku for overnight stay."
          ]
        },
        {
          "Day 4 - Absheron + Gobustan & Mud Volcanoes Tour": [
            "Visit the Ateshgah Fire Temple and Yanar Dag in the Absheron Peninsula. Continue to Gobustan to see ancient petroglyphs and the Mud Volcanoes. Return for overnight in Baku."
          ]
        },
        {
          "Day 5 - Transfer to Gabala via Shamakhi": [
            "Transfer to Gabala with stops at Diri Baba Mausoleum and Juma Mosque in Shamakhi. Optional visits to the Alpaca Farm or Meysari Winery. Check in and overnight in Gabala."
          ]
        },
        {
          "Day 6 - Gabala Tour": [
            "Visit Nohur Lake, the 7 Gozel Waterfall, and the Tufandag Mountain Resort with cable car rides and scenic views. Overnight in Gabala."
          ]
        },
        {
          "Day 7 - Gabala to Baku & Departure": [
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
      country: "Indonesia",
      inclusions: [
        "Panoramic Tour",
        "Baku City Tour",
        "5N Accommodation in Baku and 1N Gabala",
        "Mud Volcanoes & Gobustan Tour",
        "Shahdag Tour",
        "Cable Car Ticket for Gabala Tour",
      ],
      exclusions: [
        "Any Optional Tours and Services",
        "All rates are subject to availability at the time of booking.",
        "Early check-in and late check-out at hotels",
        "Personal expenses (laundry, drinks, phone calls, etc.)",
        "Optional tours and activities not mentioned in the itinerary",
      ],
      tableData: {
        tab1: [
          {
            star4: "Grand Europe, Gabala garden, Grand Europe",
            star5: "Marriott Boulevard Baku Hotel, Gabala garden, Marriott Boulevard Baku Hotel",
          },
        ],
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
        "Breakfast included in tour price",
        "English Speaking certified drivers",
        "Daily curated itineraries for a stress-free experience",
        "Seamless airport transfers for hassle-free travel"
      ],
      includes: [
        { name: "Flights", icon: Plane },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹82,999/- Onwards",
      packageImage:
        "https://i0.wp.com/reconasia.csis.org/wp-content/uploads/2017/01/chasing_the_dubai_dreamii-e1619813205979.jpeg?fit=2000%2C1333&ssl=1",

      itinerary: [
        {
          "Day 1: Arrival in Dubai & Evening Marina Dhow Cruise": [
            "Arrive at Dubai International Airport and enjoy private transfer to your hotel for check-in. In the evening, enjoy a Marina Dhow Cruise with dinner, offering views of the illuminated Dubai Marina skyline and iconic architecture. Overnight in Dubai."
          ]
        },
        {
          "Day 2: Dubai City Tour & Burj Khalifa Visit": [
            "Begin with a half-day city tour covering Gold Souk, Jumeirah Mosque, Burj Al Arab, and Atlantis photo stops. Later, visit Dubai Mall and ascend to the 124th floor of Burj Khalifa for breathtaking views. End the evening with the magical Dubai Fountain show. Overnight in Dubai.",
          ]
        },
        {
          "Day 3: Desert Safari with BBQ Dinner": [
            "Morning free for leisure or optional activities, Afternoon Desert Safari with dune bashing, camel ride, BBQ dinner and live entertainment",

          ]
        },
        {
          "Day 4:  Abu Dhabi City Tour & Ferrari World": [
            "Begin the day with a scenic drive to Abu Dhabi. Visit the stunning Sheikh Zayed Grand Mosque and admire the city's mix of modern architecture and green spaces. Later, head to Ferrari World on Yas Island, home to Formula Rossa—the world’s fastest roller coaster. Return to Dubai in the evening."
          ]
        },
        {
          "Day 5: Day at Leisure": [
            "Day at leisure - relax or explore Dubai on your own. Optional - Visit Museum of the Future, Global Village, or enjoy beach time at La Mer",
          ]
        },
        {
          "Day 6: Dubai Departure": [
            "Have a filling breakfast at your hotel and proceed for the airport. Board your flight back home with beautiful memories of your amazing holiday in Dubai."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 6-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      country: "Indonesia",
      inclusions: [
        "Evening Marina Dhow cruise",
        "Burj Khalifa 124th Floor Non Prime time( Subject to Availibilty)Airport transfers (SIC basis)",
        "Marina Dhow Cruise with dinner",
        "Dubai City Tour (Half-day)",
        "Desert Safari with BBQ dinner",
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
      tableData: {
        tab1: [
          {
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹91,499/- Onwards",

      packageImage:
        "https://asset.providentestate.com/x/1000x/Dubai_vs_Abu_Dhabi_Where_Should_International_Buyers_Invest_for_Maximum_Returns_e1b4651020.webp",

      itinerary: [
        {
          "Day 1: Arrival in Dubai & Evening Marina Dhow Cruise": [
            "Arrive at Dubai International Airport and enjoy private transfer to your hotel for check-in. In the evening, enjoy a Marina Dhow Cruise with dinner, offering views of the illuminated Dubai Marina skyline and iconic architecture. Overnight in Dubai."
          ]
        },
        {
          "Day 2: Dubai City Tour & Burj Khalifa Visit": [
            "Begin with a half-day city tour covering Gold Souk, Jumeirah Mosque, Burj Al Arab, and Atlantis photo stops. Later, visit Dubai Mall and ascend to the 124th floor of Burj Khalifa for breathtaking views. End the evening with the magical Dubai Fountain show. Overnight in Dubai.",
          ]
        },
        {
          "Day 3: Desert Safari with BBQ Dinner": [
            "Morning free for leisure or optional activities, Afternoon Desert Safari with dune bashing, camel ride, BBQ dinner and live entertainment",

          ]
        },
        {
          "Day 4:  Abu Dhabi City Tour & Ferrari World": [
            "Begin the day with a scenic drive to Abu Dhabi. Visit the stunning Sheikh Zayed Grand Mosque and admire the city's mix of modern architecture and green spaces. Later, head to Ferrari World on Yas Island, home to Formula Rossa—the world’s fastest roller coaster. Return to Dubai in the evening."
          ]
        },
        {
          "Day 5: Day at Leisure": [
            "Day at leisure - relax or explore Dubai on your own. Optional - Visit Museum of the Future, Global Village, or enjoy beach time at La Mer",
          ]
        },
        {
          "Day 6: Dubai Departure": [
            "Have a filling breakfast at your hotel and proceed for the airport. Board your flight back home with beautiful memories of your amazing holiday in Dubai."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the best of Dubai and Abu Dhabi in this 5-night getaway. Cruise along Dubai Marina, visit the Burj Khalifa, enjoy a thrilling desert safari, and experience the wonders of the Museum of the Future.",
      },
      country: "Indonesia",
      inclusions: [
        "Evening Marina Dhow cruise",
        "Burj Khalifa 124th Floor Non Prime time( Subject to Availibilty)Airport transfers (SIC basis)",
        "Marina Dhow Cruise with dinner",
        "Dubai City Tour (Half-day)",
        "Desert Safari with BBQ dinner",
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
      tableData: {
        tab1: [
          {
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,01,499/- Onwards",

      packageImage:
        "https://cdn.rt.emap.com/wp-content/uploads/sites/4/2014/01/30051846/HAC_Exterior_Photo_by_Hufton_Crow__1__1-1.jpg",

      itinerary: [
        {
          "Day 1: Arrival in Dubai & Evening Marina Dhow Cruise": [
            "Arrive at Dubai International Airport and transfer to your hotel for check-in. In the evening, enjoy a Marina Dhow Cruise with dinner, offering views of the illuminated Dubai Marina skyline and iconic architecture. Overnight in Dubai."
          ]
        },
        {
          "Day 2: Dubai City Tour & Burj Khalifa Visit": [
            "Begin with a half-day city tour covering Gold Souk, Jumeirah Mosque, Burj Al Arab, and Atlantis photo stops. Later, visit Dubai Mall and ascend to the 124th floor of Burj Khalifa for breathtaking views. End the evening with the magical Dubai Fountain show. Overnight in Dubai.",
          ]
        },
        {
          "Day 3: Desert Safari with BBQ Dinner": [
            "Morning free for leisure or optional activities, Afternoon Desert Safari with dune bashing, camel ride, BBQ dinner and live entertainment",

          ]
        },
        {
          "Day 4: Abu Dhabi City Tour": [
            "Full-day Abu Dhabi City Tour - drive past Jebel Ali Port, visit Sheikh Zayed Grand Mosque, explore the city’s skyline and greenery. Visit Ferrari World - world's first Ferrari-themed indoor amusement park",
            "Return to Dubai and overnight stay"
          ]
        },
        {
          "Day 5: Day at Leisure": [
            "Day at leisure - relax or explore Dubai on your own",
            "Optional: Visit Museum of the Future, Global Village, or enjoy beach time at La Mer",
            "Overnight in Dubai"
          ]
        },
        {
          "Day 6: Sea view": [
            "Sea view at your place",
            "Hotel check-out",
            "Transfer to Dubai International Airport for departure"
          ]
        },
        {
          "Day 7: Dubai Departure": [
            "Breakfast at hotel",
            "Hotel check-out",
            "Transfer to Dubai International Airport for departure"
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Discover Dubai & Abu Dhabi in 6 nights – iconic landmarks, thrilling experiences, and cultural wonders, all in one unforgettable trip.",
      },
      country: "Indonesia",
      inclusions: [
        "Evening Marina Dhow cruise",
        "Burj Khalifa 124th Floor Non Prime time( Subject to Availibilty)Airport transfers (SIC basis)",
        "Marina Dhow Cruise with dinner",
        "Dubai City Tour (Half-day)",
        "Desert Safari with BBQ dinner",
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
      tableData: {
        tab1: [
          {
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹77,599/- Onwards",

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
      country: "Indonesia",
      inclusions: [
        "Evening Marina Dhow cruise",
        "Burj Khalifa 124th Floor Non Prime time( Subject to Availibilty)",
        "Marina Dhow Cruise with dinner",
        "Dubai City Tour (Half-day)",
        "Desert Safari with BBQ dinner",
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
      tableData: {
        tab1: [
          {
            star4: "Omega Hotel Bur Dubai, Ascot Hotel Bur Dubai, Park Inn by Radisson Yas Island, Crowne Plaz Abu Dhabi Yas Island or similar",
            star5: "Park Regis Kris Kin Hotel Dubai, The Canvas Hotel MGallery, Park Inn by Radisson Yas Island, Crowne Plaza Abu Dhabi Yas Island, or similar",
          },
        ],
      },
    },
  },
  singapore: {
    singapore1: {
      packageId: "S04390",
      packageName: "Singapore Highlights",
      totalGuests: 2,
      nights: 4,
      days: 5,
      theme: "Mumbai",
      destinationCovered: "Singapore-4N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹76,499/- Onwards",

      packageImage:
        "https://www.vistra.com/sites/default/files/2019-03/Singapore.jpg",

      itinerary: [
        {
          "Day 1: Arrival & Night Safari": [
            "Arrive at Singapore Airport and meet our representative for your transfer to the hotel. After check-in and some rest, get ready for a thrilling experience at the Night Safari – the world’s first nocturnal wildlife park. Set in 40 hectares of lush forest, this unique adventure lets you explore the jungle and observe wildlife in their natural nighttime habitats."
          ]
        },
        {
          "Day 2: City Tour & Sentosa Island": [
            "Explore Singapore’s top highlights with a half-day city tour covering Orchard Road, Little India, Chinatown, Merlion Park, and Marina Bay views. Later, enjoy Sentosa Island via cable car, visit Madame Tussauds 5-in-1 experience including Marvel 4D and Images of Singapore, and end your day with the stunning Wings of Time show. A perfect mix of culture and fun!",
          ]
        },
        {
          "Day 3: Full Day Universal Studios Tour": [
            "Enjoy a full day at Universal Studios Singapore with thrilling rides and shows based on blockbuster films. Experience Shrek’s 4D adventure at Far Far Away Castle, face mummies on the Revenge of the Mummy ride, and explore themed zones like Madagascar, Hollywood, Sci-Fi City, and The Lost World—fun and excitement for all ages!",

          ]
        },
        {
          "Day 4: Marina Bay Sands": [
            "Visit Marina Bay Sands SkyPark for breathtaking panoramic views of Singapore’s skyline. Then explore Gardens by the Bay, a stunning nature park featuring the futuristic Cloud Forest and the Supertree Observatory—an iconic blend of nature and innovation, making it a must-see attraction in the heart of the city."
          ]
        },
        {
          "Day 5: Departure from Singapore": [
            "After breakfast at hotel, check out from hotel and transfer to Airport"
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Discover Singapore’s best with a night safari, city tour, Sentosa fun, and Universal Studios thrills. Enjoy skyline views from Marina Bay Sands and explore the beauty of Gardens by the Bay.",
      },
      country: "Indonesia",
      inclusions: [
        "Night Safari",
        "Orchard Road",
        "Little India",
        "Chinatown",
        "Merlion Park",
        "Marina Bay",
        "Sentosa Island",
      ],
      exclusions: [
        "Travel insurance",
        "All rates are subject to availability at the time of booking.",
        "5% TCS (refundable)",
        "Personal expenses",
        "Optional tours & activities",
        "Early check-in / late check-out"
      ],
      tableData: {
        tab1: [
          {
            star3: "Value Thomsono Hotel or similar",
            star4: "Hotel Boss, or similar",
          },
        ],
      },
    },
    singapore2: {
      packageId: "S04390",
      packageName: "Enchanting Singapore",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "Singapore-5N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹81,499/- Onwards",

      packageImage:
        "https://www.vistra.com/sites/default/files/2019-03/Singapore.jpg",

      itinerary: [
        {
          "Day 1: Arrival & Night Safari": [
            "Arrive at Singapore Airport and meet our representative for your transfer to the hotel. After check-in and some rest, get ready for a thrilling experience at the Night Safari – the world’s first nocturnal wildlife park. Set in 40 hectares of lush forest, this unique adventure lets you explore the jungle and observe wildlife in their natural nighttime habitats."
          ]
        },
        {
          "Day 2: City Tour & Sentosa Island": [
            "Explore Singapore’s top highlights with a half-day city tour covering Orchard Road, Little India, Chinatown, Merlion Park, and Marina Bay views. Later, enjoy Sentosa Island via cable car, visit Madame Tussauds 5-in-1 experience including Marvel 4D and Images of Singapore, and end your day with the stunning Wings of Time show. A perfect mix of culture and fun!",
          ]
        },
        {
          "Day 3: Full Day Universal Studios Tour": [
            "Enjoy a full day at Universal Studios Singapore with thrilling rides and shows based on blockbuster films. Experience Shrek’s 4D adventure at Far Far Away Castle, face mummies on the Revenge of the Mummy ride, and explore themed zones like Madagascar, Hollywood, Sci-Fi City, and The Lost World—fun and excitement for all ages!",

          ]
        },
        {
          "Day 4: Marina Bay Sands": [
            "Visit Marina Bay Sands SkyPark for breathtaking panoramic views of Singapore’s skyline. Then explore Gardens by the Bay, a stunning nature park featuring the futuristic Cloud Forest and the Supertree Observatory—an iconic blend of nature and innovation, making it a must-see attraction in the heart of the city."
          ]
        },
        {
          "Day 5:Day at Leisure - Shopping": [
            "You can spend your day doing shopping and exploring Singapore"
          ]
        },
        {
          "Day 6:Departure from Singapore": [
            "After breakfast at hotel, check out from hotel and transfer to Airport"
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience Singapore’s top highlights with Night Safari, Sentosa Island, Universal Studios, Marina Bay Sands, and Gardens by the Bay. A perfect mix of adventure and city charm!",
      },
      country: "Indonesia",
      inclusions: [
        "Night Safari",
        "Orchard Road",
        "Little India",
        "Chinatown",
        "Merlion Park",
        "Marina Bay",
        "Sentosa Island",
      ],
      exclusions: [
        "Travel insurance",
        "All rates are subject to availability at the time of booking.",
        "5% TCS (refundable)",
        "Personal expenses",
        "Optional tours & activities",
        "Early check-in / late check-out"
      ],
      tableData: {
        tab1: [
          {
            star3: "Value Thomsono Hotel or similar",
            star4: "Hotel Boss, or similar",
          },
        ],
      },
    },
    singapore3: {
      packageId: "S04390",
      packageName: "Singapore Malaysia Delights",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Singapore-4N -- Malaysis-2N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹95,199/- Onwards",

      packageImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/13/full/1734081378-1884.jpg",

      itinerary: [
        {
          "Day 1: Arrival & Night Safari": [
            "Arrive at Singapore Airport and meet our representative for your transfer to the hotel. After check-in and some rest, get ready for a thrilling experience at the Night Safari – the world’s first nocturnal wildlife park. Set in 40 hectares of lush forest, this unique adventure lets you explore the jungle and observe wildlife in their natural nighttime habitats."
          ]
        },
        {
          "Day 2: City Tour & Sentosa Island": [
            "Explore Singapore’s top highlights with a half-day city tour covering Orchard Road, Little India, Chinatown, Merlion Park, and Marina Bay views. Later, enjoy Sentosa Island via cable car, visit Madame Tussauds 5-in-1 experience including Marvel 4D and Images of Singapore, and end your day with the stunning Wings of Time show. A perfect mix of culture and fun!",
          ]
        },
        {
          "Day 3: Full Day Universal Studios Tour": [
            "Enjoy a full day at Universal Studios Singapore with thrilling rides and shows based on blockbuster films. Experience Shrek’s 4D adventure at Far Far Away Castle, face mummies on the Revenge of the Mummy ride, and explore themed zones like Madagascar, Hollywood, Sci-Fi City, and The Lost World—fun and excitement for all ages!",

          ]
        },
        {
          "Day 4: Singapore to Kuala Lumpur(Malaysia)": [
            "After breakfast, check out from your hotel in Singapore and transfer to the airport. Upon arrival in Kuala Lumpur in malaysia, meet our representative and proceed to your hotel for check-in."
          ]
        },
        {
          "Day 5: Kuala Lumpur City Tour with KL Tower": [
            "Visit the iconic Batu Caves en route to Genting Highlands. Enjoy a scenic cable car ride (subject to weather) and explore the attractions at 2,000 meters above sea level. Return to Kuala Lumpur after a fun-filled day."
          ]
        },
        {
          "Day 6: Putrajaya Tour & Departure": [
            "Explore Putrajaya’s modern architecture and visit the beautiful Putra Mosque. Later, check out and transfer to the airport for your departure."
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience Singapore’s top highlights with Night Safari, Sentosa Island, Universal Studios, Marina Bay Sands, and Gardens by the Bay. A perfect mix of adventure and city charm!",
      },
      country: "Indonesia",
      inclusions: [
        "Night Safari",
        "Orchard Road",
        "Little India",
        "Chinatown",
        "Merlion Park",
        "Marina Bay",
        "Sentosa Island",
      ],
      exclusions: [
        "Travel insurance",
        "All rates are subject to availability at the time of booking.",
        "5% TCS (refundable)",
        "Personal expenses",
        "Optional tours & activities",
        "Early check-in / late check-out"
      ],
      tableData: {
        tab1: [
          {
            star3: "Value Thomsono Hotel, Ramada Encore - First World Hotel or similar",
            star4: "Hotel Boss, Verdant Hill or similar",
          },
        ],
      },
    },
    singapore4: {
      packageId: "S04390",
      packageName: "Singapore and Malaysia",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Singapore-4N -- Malaysia-2N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹97,999/- Onwards",

      packageImage:
        "https://www.budgetholidaytours.com/public/assets/admin/assets/img/package/inside_667be466641dd.webp",

      itinerary: [
        {
          "Day 1: Arrival & Night Safari": [
            "Arrive at Singapore Airport and meet our representative for your transfer to the hotel. After check-in and some rest, get ready for a thrilling experience at the Night Safari – the world’s first nocturnal wildlife park. Set in 40 hectares of lush forest, this unique adventure lets you explore the jungle and observe wildlife in their natural nighttime habitats."
          ]
        },
        {
          "Day 2: City Tour & Sentosa Island": [
            "Explore Singapore’s top highlights with a half-day city tour covering Orchard Road, Little India, Chinatown, Merlion Park, and Marina Bay views. Later, enjoy Sentosa Island via cable car, visit Madame Tussauds 5-in-1 experience including Marvel 4D and Images of Singapore, and end your day with the stunning Wings of Time show. A perfect mix of culture and fun!",
          ]
        },
        {
          "Day 3: Full Day Universal Studios Tour": [
            "Enjoy a full day at Universal Studios Singapore with thrilling rides and shows based on blockbuster films. Experience Shrek’s 4D adventure at Far Far Away Castle, face mummies on the Revenge of the Mummy ride, and explore themed zones like Madagascar, Hollywood, Sci-Fi City, and The Lost World—fun and excitement for all ages!",

          ]
        },
        {
          "Day 4: Marina Bay Sands & Gardens by the Bay": [
            "Begin with panoramic city views from the Marina Bay Sands SkyPark. Then explore Gardens by the Bay’s Flower Dome and Cloud Forest, featuring exotic plants and unique climates inspired by Mediterranean and tropical regions. A perfect mix of modern architecture and natural beauty awaits on this scenic day in Singapore."
          ]
        },
        {
          "Day 5: Departure from Singapore & Arrival in Kuala Lumpur": [
            "After breakfast, check out from your hotel and transfer to the airport for your flight to Kuala Lumpur. Upon arrival at KUL Airport, proceed to your hotel for check-in and settle in for the next leg of your journey."
          ]
        },
        {
          "Day 6: Putrajaya Tour & Departure": [
            "Explore Putrajaya’s modern architecture and visit the beautiful Putra Mosque. Later, check out and transfer to the airport for your departure."
          ]
        },
        {
          "Day7: Genting Highlands Tour with Batu Caves": [
            "After breakfast, visit the iconic Batu Caves for a quick photostop. Then, head to Genting Highlands via Skyway cable car (subject to weather). Enjoy a fun-filled day at the hilltop resort before returning to Kuala Lumpur. (Includes 2-way cable car ride)."
          ]
        },
        {
          "Day 8: Kuala Lumpur Departure": [
            "After breakfast check-out from the hotel. Later you will be transfered to the airport to catch your flight back home."
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience Singapore’s top highlights with Night Safari, Sentosa Island, Universal Studios, Marina Bay Sands, and Gardens by the Bay. A perfect mix of adventure and city charm!",
      },
      country: "Indonesia",
      inclusions: [
        "Night Safari",
        "Orchard Road",
        "Little India",
        "Chinatown",
        "Merlion Park",
        "Marina Bay",
        "Sentosa Island",
      ],
      exclusions: [
        "Travel insurance",
        "All rates are subject to availability at the time of booking.",
        "5% TCS (refundable)",
        "Personal expenses",
        "Optional tours & activities",
        "Early check-in / late check-out"
      ],
      tableData: {
        tab1: [
          {
            star3: "Value Thomsono Hotel, Ramada Encore - First World Hotel or similar",
            star4: "Hotel Boss, Verdant Hill or similar",
          },
        ],
      },
    },
  },
  turkey: {
    turkey1: {
      packageId: "S04802",
      packageName: "Mystical Turkey",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Istanbul-4N--Cappadocia-2N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,23,699/- Onwards",
      packageImage:
        "https://img.freepik.com/free-photo/hot-air-balloon-adventure_23-2151762971.jpg?t=st=1744282158~exp=1744285758~hmac=3aa201726915f3b387ac2c6bbf096b13cda01642f8b5dee3b56447c63ad99c4d&w=1380",

      itinerary: [
        {
          "Day 1:Arrival to Istanbul": [
            "Arrive at Dubai International Airport and transfer to your hotel for check-in. In the evening, enjoy a Marina Dhow Cruise with dinner, offering views of the illuminated Dubai Marina skyline and iconic architecture. Overnight in Dubai."
          ]
        },
        {
          "Day 2: Istanbul Old city Tour": [
            "Begin with a half-day city tour covering Gold Souk, Jumeirah Mosque, Burj Al Arab, and Atlantis photo stops. Later, visit Dubai Mall and ascend to the 124th floor of Burj Khalifa for breathtaking views. End the evening with the magical Dubai Fountain show. Overnight in Dubai.",
          ]
        },
        {
          "Day 3: Istanbul Bosphorus , Spice Market & Fener Balat, Pierre Loti Hill Tour": [
            "Morning free for leisure or optional activities, Afternoon Desert Safari with dune bashing, camel ride, BBQ dinner and live entertainment",

          ]
        },
        {
          "Day 4: Princess Islands": [
            "Take a relaxing ferry ride to Buyukada, the largest of the Princes’ Islands. Enjoy views of historic landmarks and pass charming Ottoman homes. On the island, explore elegant wooden mansions and lush scenery with an electric vehicle tour. A peaceful escape from the city, offering a blend of history, nature, and local charm."
          ]
        },
        {
          "Day 5: Istanbul to Cappadocia- Flight": [
            "Day at leisure - relax or explore Dubai on your own",
            "Optional: Visit Museum of the Future, Global Village, or enjoy beach time at La Mer",
            "Overnight in Dubai"
          ]
        },
        {
          "Day 6: Cappadocia Tour": [
            "Explore Devrent Valley’s unique fairy chimneys, then visit Pasabag (Monk’s Valley) with its iconic rock formations. Enjoy lunch in Avanos, known for pottery and the Red River. Continue to the Goreme Open-Air Museum to see ancient cave churches with stunning frescoes. End the day at Uchisar Castle. Overnight in Cappadocia."
          ]
        },
        {
          "Day 7: Return to Istanbul": [
            "After breakfast, transfer to the airport for your flight to Istanbul. Tour ends on arrival."
          ]
        }

      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore the vibrant city of Baku and surrounding gems with this 6-day itinerary including city tours, nature excursions, cultural experiences, and architectural marvels. Perfect for those looking to experience the mix of history, modernity, and natural beauty Azerbaijan has to offer.",
      },
      country: "Indonesia",
      inclusions: [
        "Istanbul Old City",
        "Bosphorus",
        "Spice Market",
        "Fener Balat",
        "Pierre Loti Hill",
        "Princess Islands",
        "Cappadocia",
      ]
      ,
      exclusions: [
        "All rates are subject to availability at the time of booking.",
        "Personal meals and personal expenses like entry tickets, telephone, laundry etc.",
        "Anything other than mentioned in inclusions",
        "Meals other than mentioned in the itinerary",
        "Early Check in & Late Check Out. Standard Check in time Normally is 1400 Hours and Check out time is 1100 Hours."
      ],
      tableData: {
        tab1: [
          {
            star4: "Four Side Taksim Lion, Metropolitan Taksim, 1811 Cave Hotel, Dedeli Konak Cave, or similar",
            star5: "Hilton Double Tree Piyalepasa Hotel, MDC Cave Hotel, Hanedan Cave Hotel, Acer Cave Hotel, or similar",
          },
        ],
      },
    },
    turkey2: {
      packageId: "S04390",
      packageName: "Turkish Wonders",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Istanbul-2N -- Cappadocia-2N -- Kusadasi-2N",
      highlights: [

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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1.36,299/- Onwards",

      packageImage:
        "https://img.freepik.com/free-photo/panoramic-istanbul-city-twilight-turkey_335224-1278.jpg?t=st=1744282100~exp=1744285700~hmac=f9e4b1ac0cbd40cc919c68ad27daa6ddac58b5084982c5119cac59ad279c14ec&w=1380",

      itinerary: [
        {
          "Day 1: Arrival in Istanbul": [
            "Arrive in Istanbul and transfer to your hotel. The rest of the day is free to relax or explore the local area. Overnight in Istanbul."
          ]
        },
        {
          "Day 2: Istanbul City Tour": [
            "Explore the historical heart of Istanbul with visits to Hagia Sophia, Blue Mosque, Hippodrome, and Grand Bazaar. Enjoy the city's rich heritage. Overnight in Istanbul."
          ]
        },
        {
          "Day 3: Flight to Cappadocia": [
            "Transfer to the airport and fly to Cappadocia. Upon arrival, transfer to your hotel. Free time to explore or relax. Overnight in Cappadocia."
          ]
        },
        {
          "Day 4: Cappadocia Tour": [
            "Visit Devrent Valley, Pasabag (Monk Valley), Avanos for pottery, and the Open Air Museum. End the day with a visit to Uchisar Castle. Overnight in Cappadocia."
          ]
        },
        {
          "Day 5: Flight to Kusadasi": [
            "Transfer to the airport for your flight to Izmir. Upon arrival, drive to Kusadasi and check into your hotel. Overnight in Kusadasi."
          ]
        },
        {
          "Day 6: Ephesus Tour": [
            "Explore ancient Ephesus including the Library of Celsus and the Great Theatre. Visit the House of Virgin Mary. Overnight in Kusadasi."
          ]
        },
        {
          "Day 7: Departure from Turkey": [
            "Check out from the hotel and transfer to the airport for your departure flight."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience the highlights of Dubai and Abu Dhabi in this 5-night escape. Marvel at the cityscape from Burj Khalifa, relax on a scenic Marina Dhow Cruise, dive into adventure with a desert safari, and explore innovation at the Museum of the Future. A perfect blend of culture, luxury, and unforgettable sights awaits.",
      },
      country: "Indonesia",
      inclusions: [
        "Cappadocia",
        "Hierapolis Ancient City",
        "Istanbul Old City",
        "Pamukkale"
      ],
      exclusions: [

        "Early Check in & Late Check Out. Standard Check in time Normally is 1400 Hours and Check out time is 1100 Hours",
        "All rates are subject to availability at the time of booking",
        "Anything other than mentioned in inclusions",
        "Personal meals and personal expenses like entry tickets, telephone, laundry etc.",
        "Any Optional Tours and Services"
      ],
      tableData: {
        tab1: [
          {
            star4: "Four Sides Taksim Lion Hotel, Erboy Hotel, 1811 Cave Hotel, Dedeli Konak Cave, Efe Boutique Hotel, Suhan Seaport Boutique, or similar",
            star5: "Hilton Double Tree Piyalepasa Hotel, MDC Cave Hotel, Hanedan Cave Hotel, Acer Cave Hotel, Ramada Suites Hotel, Charisma Deluxe & Spa Hotel, or similar",
          },
        ],
      },
    },
    turkey3: {
      packageId: "S04390",
      packageName: "Turkish Delight",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Istanbul-2N--Cappadocia-2N--Antalya-3N",
      highlights: [

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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,42,799/- Onwards",

      packageImage:
        "https://img.freepik.com/free-photo/majestic-mosque-islamic-new-year-celebration-with-fantasy-architecture_23-2151457467.jpg?t=st=1744282231~exp=1744285831~hmac=5c0ea8e801bfb0dd4d33f8f0a1254f69878f37e7ac34b49639c8c3a2e99eddbe&w=996",

      itinerary: [
        {
          "Day 1: Arrival to Istanbul & Istanbul Old city Tour": [
            "Arrive in Istanbul and transfer to your hotel in the Old City with a welcome package provided. Enjoy free time to relax. The next day, explore Istanbul on a guided tour visiting Hagia Sophia (exterior), Blue Mosque, Hippodrome, Topkapi Palace, and Grand Bazaar. Overnight in Istanbul. (*Topkapi Palace closed Tuesdays; Grand Bazaar closed Sundays—alternatives provided.)"
          ]
        },
        {
          "Day 2: Istanbul to Cappadocia- Flight": [
            "You'll be picked up from your Istanbul hotel and transferred to the airport for a one-hour direct flight to Cappadocia. Upon arrival, a representative will greet you with a name board and transfer you to your hotel. Enjoy the rest of the day at leisure to explore the beautiful region at your own pace. Overnight stay in Cappadocia.",
          ]
        },
        {
          "Day 3: Cappadocia Tour": [
            "After breakfast, begin your Cappadocia tour with Devrent Valley’s unique fairy chimneys, followed by Pasabag (Monk Valley) featuring double and triple-headed rock formations. Enjoy lunch in Avanos, known for pottery and the Red River. Visit the famous Open-Air Museum with 10th-century Christian frescoes, then explore Uchisar Castle, the region’s tallest fairy chimney. Overnight in Cappadocia.",

          ]
        },
        {
          "Day 4: Cappadocia to Antalya -Flight": [
            " Upon arrival to Antalya airport, welcomed and transferred to your hotel in Antalya. Overnight in Antalya."
          ]
        },
        {
          "Day 5: Pamukkale & Hierapolis Ancient City": [
            " Explore its vast necropolis, Great Baths, Frontinus Street, Theatre, Martyrion of St. Philip, and Cleopatra’s antique pool. End the tour at Pamukkale’s stunning white travertine terraces, where you can enjoy a relaxing barefoot walk across the unique mineral-rich formations."
          ]
        },
        {
          "Day 6: Antalya City Tour": [
            "Visit Karpuzkaldıran Waterfalls, enjoy a photo break at Konyaalti Beach, and explore Kaleiçi’s old town featuring Hadrian’s Gate, Clock Tower, Fluted Minaret, Palm Street, and the ancient harbor. Continue to Kurşunlu Waterfalls for some free time before returning to the hotel. Overnight in Antalya."
          ]
        },
        {
          "Day 7: Istanbul - Departure": [
            "you will be transferred to the airport for your flight to Istanbul and our tour concludes upon arrival in Istanbul. You can connect to your outbound flight."
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore Turkey in 7 nights with guided tours of Istanbul, Cappadocia, Pamukkale, and Antalya. Enjoy historical sites, scenic landscapes, cultural experiences, and seamless transfers with expert guidance.",
      },
      country: "Indonesia",
      inclusions: [
        "Istanbul Old City Tour",
        "Istanbul to Cappadocia – Flight",
        "Cappadocia Tour",
        "Cappadocia to Antalya – Flight",
        "Pamukkale & Hierapolis Ancient City",
        "Antalya City Tour"
      ]
      ,
      exclusions: [
        "5% TCS Shall Be Extra (Which is refundable at the time of Filing your CY ITR)",
        "All rates are subject to availability at the time of booking.",
        "Personal meals and personal expenses like entry tickets, telephone, laundry etc",
        "Early Check in & Late Check Out."
      ],
      tableData: {
        tab1: [
          {
            star4: "Four Sides Taksim Lion Hotel, Erboy Hotel, 1811 Cave Hotel, Dedeli Konak Cave, Ring Down Town Hotel, Prime Hotel, BW Khan Hotel, or similar",
            star5: "Hilton Double Tree Piyalepasa Hotel, MDC Cave Hotel, Hanedan Cave Hotel, Acer Cave Hotel, Ramada Plaza Hotel, Hilton Double Tree City Center, or similar",
          },
        ],
      },
    },
    turkey4: {
      packageId: "S04390",
      packageName: "Turkey Highlights",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Istanbul-2N--Cappadocia-2N--Kusadasi-3N",
      highlights: [

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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹1,42,799/- Onwards",

      packageImage:
        "https://img.freepik.com/free-photo/fantastic-mosque-architecture-islamic-new-year-celebration_23-2151457366.jpg?t=st=1744282268~exp=1744285868~hmac=35ee7694e781a6e5d096c7b0f0bbfaa938d86633ae74958d300778dcd1e6181f&w=996",

      itinerary: [
        {
          "Day 1: Arrival to Istanbul & Istanbul Old city Tour": [
            "Upon arrival in Istanbul, you'll be transferred to your hotel in the Old City with a welcome package. The next morning, enjoy a full-day guided tour covering the Hagia Sophia (exterior), Blue Mosque, Hippodrome, Topkapi Palace, and Grand Bazaar. Overnight in Istanbul. (*Topkapi Palace closed Tuesdays—replaced by Underground Cistern or Islamic Arts Museum; Grand Bazaar closed Sundays—replaced by Spice Bazaar.)"
          ]
        },
        {
          "Day 2:Istanbul to Cappadocia- Flight": [
            "You'll be picked up from your Istanbul hotel and transferred to the airport for a direct one-hour flight to Cappadocia. Upon arrival, a representative will greet you with your name at the airport exit and escort you to your hotel. Enjoy the rest of the day at leisure to explore the unique surroundings. Overnight stay in Cappadocia.",
          ]
        },
        {
          "Day 3:Cappadocia Tour ": [
            "You'll be picked up from your hotel for a tour of Devrent Valley’s fairy chimneys and Pasabag’s unique rock formations. Enjoy lunch in Avanos, known for pottery and the Red River. Visit the Open-Air Museum, famous for 10th-century Christian frescoes, then explore Uchisar Castle, Cappadocia’s largest fairy chimney. Overnight stay in Cappadocia.",

          ]
        },
        {
          "Day 4: Cappadocia to Kusadasi": [
            "After breakfast, transfer to the airport for a flight to Izmir. Upon arrival, you'll be welcomed and driven to your hotel in Kusadasi. The next day, enjoy a guided tour of ancient Ephesus, visiting highlights like the Temple of Hadrian and Celsius Library, followed by a visit to Sirince village. Return and overnight stay in Kusadasi."
          ]
        },
        {
          "Day 5: Ephesus Tour & Pamukkale & Hierapolis Ancient City": [
            "After breakfast, visit Hierapolis, the ancient Greco-Roman city atop natural hot springs. Explore its necropolis, Great Baths, Theatre, Martyrion of St. Phillip, and Cleopatra’s Antique Pool. End the tour with a walk on the stunning white travertine terraces formed by mineral-rich waters—an unforgettable natural wonder. Enjoy this unique barefoot experience."
          ]
        },
        {
          "Day 6:Istanbul - Departure": [
            "After breakfast, you will be transferred to the airport for your flight to Istanbul and our tour concludes upon arrival in Istanbul. You can connect to your outbound flight."
          ]
        },

      ],
      overviewData: {
        title: "Package Overview",
        content: "Explore Istanbul, Cappadocia, Ephesus, and Pamukkale in 8 days with guided tours, flights, hotels, meals, and transfers included—an unforgettable journey through Turkey’s rich history and landscapes.",
      },
      country: "Indonesia",
      inclusions: [
        "Istanbul Old city Tour ",
        "Istanbul to Cappadocia- Flight",
        "Cappadocia Tour  ",
        "Ephesus Tour",
        "Pamukkale & Hierapolis Ancient City",

      ],
      exclusions: [
        "All rates are subject to availability at the time of booking.",
        "Early Check in & Late Check Out",
        "Meals other than mentioned in the itinerary",

        "5% TCS Shall Be Extra (Which is refundable at the time of Filing your CY ITR)",

      ],
      tableData: {
        tab1: [
          {
            star4: "Four Sides Taksim Lion Hotel, Erboy Hotel, 1811 Cave Hotel, Dedeli Konak Cave, Efe Boutique Hotel, Suhan Seaport Boutique, or similar",
            star5: "Hilton Double Tree Piyalepasa Hotel, MDC Cave Hotel, Hanedan Cave Hotel, Acer Cave Hotel, Ramada Suites Hotel, Charisma Deluxe & Spa Hotel, or similar",
          },
        ],
      },
    },
  },
  thailand: {
    thailand1: {
      packageId: "S04390",
      packageName: "Vibrant Thailand",
      totalGuests: 2,
      nights: 4,
      days: 5,
      theme: "Mumbai",
      destinationCovered: "Pattaya-4N -- Bankok-2N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹49,399/- Onwards",

      packageImage:
        "https://etimg.etb2bimg.com/photo/92912550.cms",

      itinerary: [
        {
          "Day 1: Arrival in Bangkok - Transfer to Pattaya": [
            "Upon arrival at Bangkok, meet our representative at airport. You will be transfered to your hotel in Pattaya. Check-in."
          ]
        },
        {
          "Day 2: Coral Island Tour": [
            "Coral Island, 10 km south of Phuket, features white sandy beaches, crystal-clear waters, and colorful coral reefs. Enjoy by own a short speedboat ride to the island for relaxing, swimming, and snorkeling among tropical fish.",
          ]
        },
        {
          "Day 3: Transfer to Bangkok & City Temple Tour": [
            "After checking out from your Pattaya hotel, you’ll be transferred to Bangkok for check-in. Later, explore Bangkok's spiritual landmarks including Wat Traimit, home to the 5.5-ton Golden Buddha, and Mahaputram Temple, known for its small reclining Buddha.",

          ]
        },
        {
          "Day 4: Safari World Tour with Indian Lunch": [
            "Experience a full-day visit to Bangkok’s Safari World, featuring Safari Park and Marine Park. Spot lions, zebras, and more during the safari tour, enjoy a jungle cruise, and watch entertaining shows with dolphins, sea lions, and orangutans. Includes Indian buffet lunch and transfers."
          ]
        },
        {
          "Day 5: Departure from Thailand": [
            "Take a bag full of memories to cherish. Check out from your hotel and transfer to Denpasar Airport for your return flight home."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Experience the best of Thailand with vibrant city tours, tropical island escapes, and rich cultural sights. Explore Bangkok’s temples, enjoy Pattaya’s beaches and nightlife, and unwind with island adventures and scenic beauty.",
      },
      country: "Indonesia",
      inclusions: [
        "Accommodation in Season Siam Hotel",
        "Golden Buddha",
        "Mahaputaram Temple",
        "Full Day Safari World ",
        "Coral Island Tour - Full Day - Shared Transfers (Including Lunch)",

      ],
      exclusions: [
        "5% TCS Shall Be Extra (Which is refundable at the time of Filing your CY ITR)",
        "Early Check in & Late Check Out.",
        "Meals other than mentioned in the itinerary",
        "Optional tours & activities",
        "Early check-in / late check-out",
        "All rates are subject to availability at the time of booking"
      ],
      tableData: {
        tab1: [
          {
            star3: "Vista pataya, Golden Tulip Mandison Suite or similar",
            star4: "Movenpick Sukhumvit, Royal Cliff Beach Hotel Pattaya or similar",
          },
        ],
      },
    },
    thailand2: {
      packageId: "S04390",
      packageName: "Fun and Fiesta Thailand",
      totalGuests: 2,
      nights: 4,
      days: 5,
      theme: "Mumbai",
      destinationCovered: "Pattaya-3N -- Bankok-1N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹46,999/- Onwards",

      packageImage:
        "https://images.herzindagi.info/image/2022/Jul/places-to-visit-in-thailand.jpg",

      itinerary: [
        {
          "Day 1: Arrival in Bangkok - Transfer to Pattaya": [
            "Upon arrival at Bangkok, meet our representative at airport. You will be transfered to your hotel in Pattaya. Check-in."
          ]
        },
        {
          "Day 2: Coral Island Tour": [
            "Coral Island, 10 km south of Phuket, features white sandy beaches, crystal-clear waters, and colorful coral reefs. Enjoy by own a short speedboat ride to the island for relaxing, swimming, and snorkeling among tropical fish.",
          ]
        },
        {
          "Day 3: Transfer to Bangkok & City Temple Tour": [
            "After checking out from your Pattaya hotel, you’ll be transferred to Bangkok for check-in. Later, explore Bangkok's spiritual landmarks including Wat Traimit, home to the 5.5-ton Golden Buddha, and Mahaputram Temple, known for its small reclining Buddha.",

          ]
        },
        {
          "Day 4: Safari World Tour with Indian Lunch": [
            "Experience a full-day visit to Bangkok’s Safari World, featuring Safari Park and Marine Park. Spot lions, zebras, and more during the safari tour, enjoy a jungle cruise, and watch entertaining shows with dolphins, sea lions, and orangutans. Includes Indian buffet lunch and transfers."
          ]
        },
        {
          "Day 5: Departure from Thailand": [
            "Take a bag full of memories to cherish. Check out from your hotel and transfer to Denpasar Airport for your return flight home."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Discover Thailand’s charm with a relaxing Pattaya getaway, Coral Island adventure, iconic Bangkok temple tour, thrilling Safari World experience, and vibrant city vibes—all in one unforgettable trip!",
      },
      country: "Indonesia",
      inclusions: [
        "Accommodation in Season Siam Hotel",
        "Golden Buddha",
        "Mahaputaram Temple",
        "Full Day Safari World ",
        "Coral Island Tour - Full Day - Shared Transfers (Including Lunch)",

      ],
      exclusions: [
        "5% TCS Shall Be Extra (Which is refundable at the time of Filing your CY ITR)",
        "Early Check in & Late Check Out.",
        "Meals other than mentioned in the itinerary",
        "Optional tours & activities",
        "Early check-in / late check-out",
        "All rates are subject to availability at the time of booking"
      ],
      tableData: {
        tab1: [
          {
            star3: "Vista pataya, Golden Tulip Mandison Suite or similar",
            star4: "Movenpick Sukhumvit, Royal Cliff Beach Hotel Pattaya or similar",
          },
        ],
      },
    },
    thailand3: {
      packageId: "S03904",
      packageName: "Krabi and Phuket",
      totalGuests: 2,
      nights: 5,
      days: 6,
      theme: "Mumbai",
      destinationCovered: "krabi-2N -- Phuket-3N",
      highlights: [
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
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹46,999/- Onwards",

      packageImage:
        "https://images.herzindagi.info/image/2022/Jul/places-to-visit-in-thailand.jpg",

      itinerary: [
        {
          "Day 1: Arrival at Phuket - Transfer to Krabi": [
            "Upon arrival at Bangkok, meet our representative at airport. You will be transfered to your hotel in Pattaya. Check-in."
          ]
        },
        {
          "Day 2: Krabi Four Island Tour": [
            "Explore Krabi's Four Islands on a day trip to Koh Tup, Koh Gai, Koh Poda, and Phra Nang Cave Beach. Walk along the tidal sandbank at Koh Tup, snorkel at Koh Gai, enjoy a picnic on Koh Poda’s white sands, and end the day swimming and exploring caves at Phra Nang Beach.",
          ]
        },
        {
          "Day 3: Transfer from Krabi to Phuket City Tour": [
            "After checking out from your hotel in Krabi, proceed with a scenic transfer to Phuket. Later, enjoy a half-day city tour covering Karon and Kata Beaches, the Karon Viewpoint, Chalong Temple, colonial Phuket Town, Cashew Nut Factory, Big Buddha, and the Gems Gallery. Return to your hotel and relax.",

          ]
        },
        {
          "Day 4: Phi Phi Island Tour": [
            "Explore Phi Phi Islands on a full-day tour from Phuket. Visit Maya Bay, Monkey Beach, Pileh Cove, Viking Cave, and Loh Samah Bay. Enjoy a buffet lunch at Phi Phi Don, go snorkeling, and unwind at Khai Island. Optional water sports are available. End the day with a transfer back to your hotel."
          ]
        },
        {
          "Day 5: Day at Leisure - Shopping": [
            "You can spend your day doing shopping and exploring Thailand"
          ]
        },
        {
          "Day 6: Departure from Phuket": [
            "After breakfast, checkout from your hotel. You will be picked up and transferred to the airport to catch your flight back home. Your trip ends with sweet memories."
          ]
        }
      ],
      overviewData: {
        title: "Package Overview",
        content: "Unwind on a tropical escape to Phuket and Krabi. From the stunning Four Island Tour in Krabi to Phuket’s vibrant cityscapes and iconic Phi Phi Islands, this journey blends beach bliss with cultural charm. Enjoy scenic views, island adventures, shopping time, and laid-back vibes, wrapped in a memorable 6-day getaway.",
      },
      country: "Indonesia",
      inclusions: [
        "Phuket Airport to Krabi - Private Transfer by Road",
        "Return Airport and Inter-Hotel Transfers on Private Basis",
        "Half-Day Phuket City Tour",
        "Daily Breakfast (Except on Day of Arrival)",
        "2 Nights Accommodation in Krabi",
        "3 Nights Accommodation in Phuket"
      ],
      exclusions: [
        "5% TCS extra",
        "Early check-in/late check-out",
        "Optional tours & meals",
        "Personal expenses",
        "Price changes due to taxes or fuel",
        "Anything not in inclusions"
      ],
      tableData: {
        tab1: [
          {
            star3: "Deevana Krabi Resort, ASHLEE Plaza Patong Hotel & Spa or similar",
            star4: "Holiday Ao Nang Beach Resort, Crest Resort & Pool Villas or similar",
          },
        ],
      },
    },
  }
};
export default Finaldata;
