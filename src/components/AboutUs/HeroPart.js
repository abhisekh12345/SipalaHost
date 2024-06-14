import { IoIosArrowForward } from "react-icons/io";
import HistorySection from "./HistorySection";




const HeroPart = () => {
  const company = {
    mission: "Our mission is to provide exceptional service and create unforgettable experiences. The Himalayas include some of the most stunning scenery on earth. Ace the Himalaya has painstakingly created one-of-a-kind outdoor adventures for you to explore the highlights of four compelling, yet noticeably dissimilar, cultural wonderlands—Nepal, Bhutan, and Tibet. With hiking, mountain biking, peak-climbing, mountaineering, rafting, animal safaris, cultural excursions, and more, Ace has an activity for every kind of outdoor enthusiast.",
    history: "Our company was founded in 2010 with the goal of offering unique guided tours. Over the years, we've grown into a trusted name in the industry, known for our attention to detail and customer satisfaction.",
    vision: "Our vision is to lead the industry by continuously innovating and improving our services, ensuring every customer leaves with a smile.",
  };

  const guides = [
    {
      id: 1,
      name: 'Guide One',
      experience: '10 years of experience in guiding tours through the mountains.',
      image: '/images/guide1.jpg',
    },
    {
      id: 2,
      name: 'Guide Two',
      experience: '5 years of experience in guiding historical city tours.',
      image: '/images/guide2.jpg',
    },
    {
      id: 3,
      name: 'Guide Three',
      experience: '8 years of experience in guiding wildlife safaris.',
      image: '/images/guide3.jpg',
    },
  ];

  const historyData = {
    title: "Our History",
    data: [
      {
        text: "Our company was founded in 2010 with the goal of offering unique guided tours. Over the years, we've grown into a trusted name in the industry, known for our attention to detail and customer satisfaction.",
        image: "/assets/images/event/event-3.jpg",
      },
      {
        text: "As we expanded our offerings, we included a variety of outdoor activities and cultural excursions. Our team is dedicated to providing the best possible experience for our customers.",
        image: "/assets/images/event/event-4.jpg",
      },
      
    ],
  };

  return (
    <div className="mt-[100px]">
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/bg/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <div className="flex items-center space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span><IoIosArrowForward /></span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto p-6">
        <div className=" mb-12">
          <p className="tracking-wide leading-6 normal-case text-gray-900">{company.mission}</p>
        </div>
        <HistorySection history={historyData} />
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Our History</h2>
          <p className=" tracking-wide leading-6 text-gray-800">{company.history}</p>
        </div>
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Our Vision</h2>
          <p className=" tracking-wide leading-6 text-gray-800">{company.vision}</p>
        </div>
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900">{guide.name}</h3>
                <p className=" text-center tracking-wide leading-6 text-gray-800">{guide.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart;
