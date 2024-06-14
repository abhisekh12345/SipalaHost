import ImageSlider from "@/components/ServiceDetails/ImageSlider";
import React from "react";
import LocationBox from "@/components/Allcomponents/LocationBox";
import TrekkingName from "@/components/ServiceDetails/TrekkingName";
import TripHighlights from "@/components/ServiceDetails/TripHighlights";
import TripOverview from "@/components/ServiceDetails/TripOverview";
import ShortItinerary from "@/components/ServiceDetails/ShortItinerary";
import Note from "@/components/ServiceDetails/Note";
import PriceIncludes from "@/components/ServiceDetails/PriceIncludes";
import DetailedItinerary from "@/components/ServiceDetails/DetailItinerarry";
import GearsEquipment from "@/components/ServiceDetails/GearsEquipment";
import ImportantInformation from "@/components/ServiceDetails/ImportantInformation";
import TripMap from "@/components/ServiceDetails/TripMap";
import Video from "@/components/ServiceDetails/Video";
import FAQs from "@/components/ServiceDetails/FAQs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssembleBooking from "@/components/ServiceDetails/AssembleBooking";



const page = () => {
  const data = {
    images: [
      "/assets/images/hero/hero-two_img-2.jpg",
      "/assets/images/hero/hero-two_img-3.jpg",
      "/assets/images/hero/hero-two_img-4.jpg",
    ],
    trek: {
      name: "Everest Panorama Trek",
      days: 9,
      shortdescription:
        "In this short and less and strenuous trek, walk in the foothills of Mt. Everest and experience the amazing views of the giant mountain surrounding the region.",
      highlights: [
        "Scenic mountain flight to and from Lukla.",
        "Experience Sherpa culture and lifestyle of mountain people in the heart of Himalaya.",
        "Visit Tengboche Monastery.",
        "Amazing views of Himalaya including Mt. Everest, Lhotse, Mt. Thamserku, Mt. Amadablam and many other peaks.",
      ],
      overview: {
        title: "Trip Overview",
        paragraphs: [
          "Everest Panorama Trek is a less strenuous trek in the foothills of Mount Everest region that starts with a 35-minutes flight from Kathmandu to Lukla’s tiny airstrip in the month of (Jan, Feb, Jun, Jul, Sep, and Dec) or 5 to 6 hours drive to Manthali/Ramechhap and 20 minutes flight in the month of (Mar, Apr, May, Oct, and Nov). This trekking follows the trail to Tengboche Monastery (3,860 m) via Lukla and Namche Bazaar.",
          "It is a short trek giving you a really superb view of the world’s highest snow-capped peaks, including Mt. Everest, Mt. Lhotse, Mt. Thamserku, and Mt. Amadablam. Visiting a succession of Sherpa villages, surrounded by fluttering prayer flags and glistening snow-capped peaks, the popular myth of ‘Shangri La’ will seem all too real.",
          "This trek definitely gives a great introduction to the Sherpa lifestyle and country culture along with beautiful mountain views. For first-time trekkers to Nepal, this trek is one of the most popular destinations. Moreover, the Everest panorama trek is suited for those people who haven’t had enough time for a longer trek into the high mountains.",
        ],
      },
      shortItinerary: [
        {
          day: "Day 01",
          description:
            "Arrival at Tribhuvan International Airport in Kathmandu (1,400 m) and transfer to hotel.",
        },
        {
          day: "Day 02",
          description:
            "Fly to Lukla (2,804 m) from Kathmandu – 35 minutes or drive to Manthali/Ramechhap – 5 to 6 hours and take – 20 minutes flight to Lukla, and then trek to Phakding (2,610 m) – 3 to 4 hours. Overnight at a guesthouse.",
        },
        {
          day: "Day 03",
          description:
            "Trek to Namche Bazaar (3,440 m) from Phakding – 5 to 6 hours. Overnight at a guesthouse.",
        },
        {
          day: "Day 04",
          description:
            "Acclimatization Day at Namche Bazaar. Hike to Hotel Everest View Hotel (3,880 m) and back. Overnight at a Guesthouse.",
        },
        {
          day: "Day 05",
          description:
            "Trek to Tengboche (3,860 m) – 5 to 6 hours. Overnight at a Guesthouse.",
        },
        {
          day: "Day 06",
          description:
            "Trek to Tengboche (3,860 m) – 5 to 6 hours. Overnight at a Guesthouse.",
        },
        {
          day: "Day 07",
          description:
            "Trek to Lukla (2,840 m) – 6 to 7 hrs. Overnight at a Guesthouse.",
        },
        {
          day: "Day 08",
          description:
            "Flight Back to Kathmandu or Manthali/Ramechhap and same-day 5 to 6 hours drive back to Kathmandu from Lukla. Overnight at a hotel in Kathmandu.",
        },
        {
          day: "Day 09",
          description:
            "Transfer to the International Airport for Your Final Flight Departure.",
        },

        // Add more days as needed
      ],
      notes: [
        {
          title: "Note 1",
          paragraphs: [
            "Our standard itinerary might differ slightly due to unpredictable happenings and events out of our control. Factors such as flight cancellation/delay, unfavorable weather, natural calamities, newly implemented government rules, political affairs, trekkers’ health condition, etc., are possible. Evaluating the situation’s possible solutions allow the trekking to resume as much as possible based on the best alternatives. In these times, we look for your cooperation and flexibility.",
            "It is advised you arrive a day before the trip start date so you can rest and it also gives you time to buy clothing equipment and gear required for the trek. Also, it is best if you book your international flights with spare days in Nepal before and after your trek in case of any flight delays or cancellations due to weather. Moreover, you have options to customize this trip where you can add on a sightseeing tour in Kathmandu, other adventure sports or day trips around the country before or after the trek.",
          ],
        },
        {
          title: "Lukla flight information",
          paragraphs: [
            "We would like to inform you regarding the Lukla flight details which may affect your itinerary. During peak seasons, (including March, April, May, October and November) the flight to Lukla will be operated from Ramechhap/Manthali due to air traffic expansion, which is about a 5 to 6-hour drive from Kathmandu. Whereas, during nonpeak seasons, (including January, February, June, July, August, September and December) the flight is operated from Kathmandu.",
            "Please be aware that the decision regarding the operation of flights solely depends on the airline and is influenced by the volume of travelers during the specific month.",
            "Unpleasant weather conditions, congested traffic in the Airport, unmanaged runway, topographical difficulties, etc., are the significant reasons for Lukla flight delay/cancellation. Therefore, if you intend on trekking in the land of Everest region, arranging additional one or two days in your trip is highly preferable. This will help in case of flight delay/cancellation and thus board on the pre-planned international flight.",
          ],
        },
        // Add more notes as needed
      ],
      priceIncludes: [
        "Airport transfers",
        "Accommodation in Kathmandu and during the trek",
        "All meals during the trek",
        "Experienced trekking guide and porters",
        "Standard twin-sharing/double accommodation in a 3-star hotel for 2 nights in Kathmandu including breakfast (Private room accommodation can be organized at an extra cost)",
        "Twin-sharing guesthouse accommodation during the trek for 6 nights in the Everest region with attached toilets in Lukla, Phakding & Namche",
        "All your standard meals during the trek (Breakfast, Lunch, and Dinner) including one hot drink and seasonal fruits",
        "Permits for Sagarmatha/Everest National Park and TIMS (Trekkers' Information Management System)",
        "Porters during the trek for carrying luggage (1 porter for every 2 clients)",
      ],
      detailedItinerary: [
        {
          title: "Arrive in Kathmandu (1,400 m/4,592 ft) and Trek Preparation",
          description: [
            "Fly into Kathmandu's Tribhuvan International Airport and make your way to the airport's terminal after the immigration process. Third Rock Adventures' guide will be waiting for you holding a placard with your name printed on it. After a warm welcome, he will drive you to your hotel. Enjoy a welcome drink while checking in. You can rest for a while before attending a trip briefing. Later in the day, you will meet your trekking guide, who will brief you about your upcoming trek. You can go over your final packing list with him and buy or rent gear from Thamel if needed.",
          ],
          image: "",
          imageLocation: "",
          overnightLocation: "Kathmandu",
        },
        {
          title: "Flight to Lukla and trek to Phakding",
          description: [
            " You will catch your flight to Lukla from either Kathmandu Airport or the Manthali Airport in Ramechhap District. Flights to Lukla during the busy peak seasons (spring and autumn) are rerouted to Manthali Airport because of the congestion at the domestic airport in Kathmandu. It takes around 4 or 5 hours to reach Manthali by road. Since Lukla flights are scheduled early in the morning, you will have to start your journey at around 2 a.m. if you are flying from Manthali.",
            "The flight to Tenzing Hillary Airport in Lukla is filled with great views and hair-raising thrills. The airport, which is built on the bluff of a rocky hill, is regarded as one of the most dangerous in the world. Only pilots who are specially trained to fly on this type of terrain are allowed to fly in this zone. The airport has a narrow runway with a slight tilt. Once you arrive at the airport, you will get your stuff, have some refreshments at one of the teahouses in Lukla, or begin your trek right away. The trail goes past the settlement and down to the Dudh Koshi River.",
          ],
          image: "/assets/images/place/place-4.jpg",
          imageLocation: "Lukla",
          overnightLocation: "Phakding",
        },
        {
          title:
            "Trek from Phakding to Namche Bazaar (3,440 m/11,284 ft) - 6 to 7 hours (10.5 km) trek",
          description: [
            "Your trek starts right after breakfast. Walk alongside the river and hike past stunning Buddhist art on stone (mani wall) and prayer wheels. There will be miniature Buddhist stupas (chortens) and prayer flags en route, protecting the trail from bad spirits. Your permits will be checked at the army checkpoint at the gate of the Sagarmatha National Park (a UNESCO World Heritage Site). Around midday, you will stop at a village en route for lunch.",
            "The flight to Tenzing Hillary Airport in Lukla is filled with great views and hair-raising thrills. The airport, which is built on the bluff of a rocky hill, is regarded as one of the most dangerous in the world. Only pilots who are specially trained to fly on this type of terrain are allowed to fly in this zone. The airport has a narrow runway with a slight tilt. Once you arrive at the airport, you will get your stuff, have some refreshments at one of the teahouses in Lukla, or begin your trek right away. The trail goes past the settlement and down to the Dudh Koshi River.",
            "Namche Bazaar is a large Sherpa town carved out on the side of a steep mountain face. The town stands like a natural amphitheater and offers gorgeous views of Tamserku, Khumbila, Kantega, and Kongde Ri. It is the most well-facilitated place in the region, with shops, restaurants, cafes, bakeries, spas, and banks lining its streets. If you are low on supplies (snacks, toilet paper rolls, medicines, etc.), you can get them from Namche. The busy town is also a trading hub for Sherpa villagers living close to Namche and Tibetans living close to the Nepal-Tibet border.",
          ],
          image: "/assets/images/place/place-5.jpg",
          imageLocation: "namche bazzar",
          overnightLocation: "Phakding",
        },
      ],
      gears: {
        paragraphs: [
          "Here is a list of what you might want to pack for the hike. Please take this as a starting point. You’ll need layers of warmer clothing during the winter. We provide a 75 liter duffel bag for you to use for the trek. It will be given to you during your pre-trip meeting in Kathmandu. The duffle bag is yours to keep. Also, you can rent a sleeping bag and down jacket with us at the additional fee of USD 35 for each once you are in Kathmandu.",
        ],
        list: [
          {
            icon: "/assets/images/shop/product-9.jpg",
            name: "Hiking Boots",
            list: [
              "Sun hat or cap (We'll provide you with a free Ace the Himalaya baseball cap.)",
              "echnical fabric short (2) and long sleeve (2) shirts",
              "Comfortable pants for inside the teahouses",
            ],
          },
          {
            icon: "/assets/images/shop/product-9.jpg",
            name: "Insulated Jacket",
            list: [
              "Technical fabric base layer (light for warmer months, heavy for colder months)",
              "Technical fabric short (2) and long sleeve (2) shirts",
            ],
          },
          // Add more gear as needed
        ],
      },

      importantInformation: [
        "We give you a free duffel bag and baseball cap during your pre-trip meeting in Kathmandu. The duffel bag will be used to pack your trekking supplies.",
        "For every two participants, we assign one porter. The duffel bag, which should weigh around 10 kg/22 lbs, will be carried by the porter throughout the walk.",
        "To carry your daily necessities like cash, crucial papers, a water bottle or bladder, a camera, toiletries, sunscreen, a notebook, clothing, etc., you must have your own daypack (with a waterproof cover).",
        "You can store your luggage (non- trekking items) at the hotel in Kathmandu.",
        "Total luggage allotment allowance for Kathmandu-Lukla flight is 15 Kg/33 lbs including both duffel (10 Kg/22 lbs.) and backpack (5Kg/11 lbs.)",
      ],
      mapImage: "/assets/images/Trip-map/Everest-Panoroma.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      faqs: [
        {
          question: "What is the best time for Everest Panorama Trek?",
          answer:
            "The best time for the trek is from March to May and September to November.",
        },
        {
          question: "Do I need travel insurance?",
          answer: "Yes, travel insurance is highly recommended.",
        },
        // Add more FAQs as needed
      ],
      availableDates: ["2024-06-15", "2024-06-20", "2024-06-25"], // Example dates
      unavailableDates: ["2024-06-10", "2024-06-11", "2024-06-12"], // Example dates
      tripDuration: 9,
      tripBooking : [
        { title: "Ktm to phokhara", price: 200 },
        { title: "phokhara to mustang", price: 800 },
        { title: "mustang to uppermustang", price: 1000 },
      ]
    },
  };

 

 

  return (
    <>

      <ImageSlider images={data.images} />
      <LocationBox />
      <div className="grid grid-cols-3 max-w-8xl mx-auto px-6 gap-10 ">
        <div className="col-span-2 border border-green-600">
          <TrekkingName
            name={data.trek.name}
            days={data.trek.days}
            shortdescription={data.trek.shortdescription}
          />
          <TripHighlights highlights={data.trek.highlights} />
          <TripOverview
            title={data.trek.overview.title}
            paragraphs={data.trek.overview.paragraphs}
          />
          <ShortItinerary itinerary={data.trek.shortItinerary} />
          {data.trek.notes.map((note, index) => (
            <Note key={index} title={note.title} paragraphs={note.paragraphs} />
          ))}
          <PriceIncludes includes={data.trek.priceIncludes} />
          <DetailedItinerary itinerary={data.trek.detailedItinerary} />
          <GearsEquipment gears={data.trek.gears} />
          <ImportantInformation information={data.trek.importantInformation} />
          <TripMap mapImage={data.trek.mapImage} />
          <Video videoUrl={data.trek.videoUrl} />
        </div>
        <div className=" border border-green-600">
            two
        </div>
      </div>
      <AssembleBooking  tourismInfo = {data.trek.tripBooking} />
      <FAQs faqs={data.trek.faqs} />
   
    </>
  );
};

export default page;
