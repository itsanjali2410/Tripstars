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
      star4?: string;
      star5?: string;

    }[];
  };
}

const Finaldata: Record<string, Record<string, PackageData>> = {
  bali: {
    bali1: {
      packageId: "S04390",
      packageName: "Ultimate Bali & Nusa Penida Adventure",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Kuta4N -- Ubud2N",
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
      packageName: "Bali & Gili",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Kuta4N -- Gili1N -- Ubud2N",
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
        content: "Enjoy 8 days in Bali with 4 nights in lively Kuta, 1 night on the serene Gili Island, and 2 nights in peaceful Ubud. A perfect escape with beaches, culture, island adventure, and scenic wonders! 🌊🌴",
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
      destinationCovered: "Kuta-4N -- Ubud-2N",
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
      packageName: "Enchanting Bali Getaway without Nusa Penida",
      nights: 6,
      days: 7,
      totalGuests: 2,
      theme: "Mumbai",
      destinationCovered: "Bali -- Kuta -- Ubud",
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
      destinationCovered: "Hanoi--Halong Bay--Da nang--Ho chi Minh  ",
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

      totalPackagePrice: "INR ₹1,00,999/-",

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

      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      totalPackagePrice: "INR ₹ 1,04,599/-",

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
      destinationCovered: "Hanoi--Halong Bay--Da nang--Ho chi Minh",
      totalPackagePrice: "INR ₹1,10,499/-",
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
        { name: "Breakfast", icon: Utensils },
      ],
      theme: "Mumbai",
      destinationCovered: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      totalPackagePrice: "INR 92,599",
      overviewData: {
        title: "Package Overview",
        content: "Explore Hanoi, Halong Bay, and Ninh Binh in 7 days. Enjoy a Halong Bay cruise, visit Hoa Lu Ancient Capital, and discover the caves and landscapes of Trang An. Hike to Mua Cave for stunning views and cycle through local villages, blending nature, culture, and adventure.",
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
      destinationCovered: "Hanoi -- Halong Bay -- Da nang -- Sapa",
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
      packageName: "Vietnam with Phu quac",
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
      destinationCovered: "Hanoi -- Halong Bay -- Da nang -- Phu Quoc",
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

      totalPackagePrice: "INR ₹87,399/-",

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

      totalPackagePrice: "INR ₹1,20,199/-",

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

      totalPackagePrice: "INR ₹1,22,599/-",

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

      totalPackagePrice: "INR ₹1,26,999/-",

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
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transport", icon: Bus },
        { name: "Hotel", icon: Hotel },
        { name: "Breakfast", icon: Utensils },
      ],

      totalPackagePrice: "INR ₹82,999/-",
      packageImage:
        "https://i0.wp.com/reconasia.csis.org/wp-content/uploads/2017/01/chasing_the_dubai_dreamii-e1619813205979.jpeg?fit=2000%2C1333&ssl=1",

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
          "Day 6: Dubai Departure": [
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

      totalPackagePrice: "INR ₹91,499/-",

      packageImage:
        "https://asset.providentestate.com/x/1000x/Dubai_vs_Abu_Dhabi_Where_Should_International_Buyers_Invest_for_Maximum_Returns_e1b4651020.webp",

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
          "Day 6: Dubai Departure": [
            "Breakfast at hotel",
            "Hotel check-out",
            "Transfer to Dubai International Airport for departure"
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

      totalPackagePrice: "INR ₹1,01,499/-",

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
      packageName: "Singapore",
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

      totalPackagePrice: "INR ₹1,01,499/-",

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
  },
};
export default Finaldata;
