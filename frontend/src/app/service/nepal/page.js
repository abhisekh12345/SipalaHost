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
      shortdescription : "In this short and less and strenuous trek, walk in the foothills of Mt. Everest and experience the amazing views of the giant mountain surrounding the region.",
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
      note: "This is a physically demanding trek. Participants should be in good health.",
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
          title: "Arrival in Kathmandu",
          description:
            "Upon your arrival at Tribhuvan International Airport...",
          image: "/images/day1.jpg",
        },
        {
          title: "Flight to Lukla and trek to Phakding",
          description:
            "We take an early morning flight to Lukla and start our trek to Phakding...",
          image: "/images/day2.jpg",
        },
        // Add more days as needed
      ],
      gears: {
        paragraphs: [
          "For this trek, you will need the following gear and equipment...",
          "It is important to pack wisely to ensure comfort and safety during the trek...",
        ],
        list: [
          { icon: "/icons/boots.png", name: "Hiking Boots" },
          { icon: "/icons/jacket.png", name: "Insulated Jacket" },
          // Add more gear as needed
        ],
      },
      importantInformation: [
        "Ensure you have travel insurance.",
        "Acclimatization is essential to prevent altitude sickness.",
        "Carry sufficient cash as ATMs are not available in remote areas.",
      ],
      mapImage: "/images/map.jpg",
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
    },
  };

  return (
    <>
      <Header />
      <ImageSlider images={data.images} />
      <LocationBox />
      <div className="grid grid-cols-3 max-w-8xl mx-auto px-6 gap-10 mb-[120px]">
        <div className="col-span-2 border border-green-600">
          <TrekkingName name={data.trek.name} days={data.trek.days} shortdescription={data.trek.shortdescription} />
          <TripHighlights highlights={data.trek.highlights} />
          <TripOverview
            title={data.trek.overview.title}
            paragraphs={data.trek.overview.paragraphs}
          />
          <ShortItinerary itinerary={data.trek.shortItinerary} />
          <Note text={data.trek.note} />
          <PriceIncludes includes={data.trek.priceIncludes} />
          <DetailedItinerary itinerary={data.trek.detailedItinerary} />
          <GearsEquipment gears={data.trek.gears} />
          <ImportantInformation information={data.trek.importantInformation} />
          <TripMap mapImage={data.trek.mapImage} />
          <Video videoUrl={data.trek.videoUrl} />
          <FAQs faqs={data.trek.faqs} />
        </div>
        <div className=" border border-green-600">two</div>
      </div>
      <Footer />
    </>
  );
};

export default page;
