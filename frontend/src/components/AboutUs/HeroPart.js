import { IoIosArrowForward } from "react-icons/io";
import HistorySection from "./HistorySection";
import VisionSection from "./VisionSection";




const HeroPart = () => {
  const company = {
    mission: "Our mission is to provide exceptional service and create unforgettable experiences. The Himalayas include some of the most stunning scenery on earth. Ace the Himalaya has painstakingly created one-of-a-kind outdoor adventures for you to explore the highlights of four compelling, yet noticeably dissimilar, cultural wonderlands—Nepal, Bhutan, and Tibet. With hiking, mountain biking, peak-climbing, mountaineering, rafting, animal safaris, cultural excursions, and more, Ace has an activity for every kind of outdoor enthusiast.",
    history: "Our company was founded in 2010 with the goal of offering unique guided tours. Over the years, we've grown into a trusted name in the industry, known for our attention to detail and customer satisfaction.",
    vision: "Our vision is to lead the industry by continuously innovating and improving our services, ensuring every customer leaves with a smile.",
  };


  const historyData = {
    title: "Our History",
    data: [
      {
        text: "Our company was founded in 2010 with the goal of offering unique guided tours. Over the years, we've grown into a trusted name in the industry, known for our attention to detail and customer satisfaction.Most tourists visit the Everest Region to do the Everest Base Camp Trek. Billed as one of the world's best walking adventures by renowned adventure journals like Lonely Planet and National Geographic, the EBC Trek takes you to the foot of Mount Everest via the rural settlements of the Sherpas. The trails to the Hinku and the Hongku Valleys and the Three High Passes – Cho La, Renjo La, and  Kongma La are also quite popular among the trekking community. Everest Region is also a major mountaineering hub. The most popular peaks for mountaineering expeditions are Mount Everest, Island Peak, Mera Peak, Ama Dablam, Lhotse, and Lobuche. Luxury tours like the Everest Base Camp Helicopter Tour and Heli Trekking have made this beautiful region accessible for those with busy schedules and poor health conditions.",
        image: "/assets/images/event/event-3.jpg",
      },
      {
        text: "The ascent to the top of Renjo La will offer you more spectacular views of the Himalayan giants. The crossing of the high mountain pass of Renjo La is the chief highlight of your trip. Later, walk down and return to Namche via the Sherpa Heritage Trail. En route, hike past isolated hamlets and the Sherpa heritage villages of Thame, Thamo, and Samde, where villagers have preserved their traditional way of life. Your trek ends with a descent to Lukla via the gorgeous pine and rhododendron forests. From Lukla, you will board a mountain flight from one of the world’s most extreme airports and fly to Kathmandu.",
        image: "/assets/images/event/event-4.jpg",
      },
      
    ],
  };

  const visionData = {
    title: "Our Vision",

    qa: [
      {
        question: "What is our vision for the future?",
        answer: "Our vision is to lead the industry by continuously innovating and improving our services, ensuring every customer leaves with a smile.",
      },
      {
        question: "How do we plan to achieve our vision?",
        answer: "We plan to achieve our vision by focusing on customer satisfaction, investing in new technologies, and continuously training our team to provide the best service possible.",
      },
      {
        question: "What is a vision statement?",
        answer: "A vision statement is a written declaration clarifying your business’s meaning and purpose for stakeholders, especially employees. It describes the desired long-term results of your company’s efforts. For example, an early Microsoft vision statement was “a computer on every desk and in every home.”“ “It serves a somewhat lofty purpose – to harness all the company’s foresight into one impactful statement.” ",
      },
    ],
    image: "/assets/images/event/event-7.jpg",
  };

  const teamData = {
    title: "Meet Our Experienced Guides",
    guides: [
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
    ],
  };

  return (
    <div className="mt-[100px] mb-[200px]">
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="tracking-wide leading-6 normal-case text-gray-900">{company.mission}</p>
        </div>
        <HistorySection history={historyData} />
        <VisionSection vision={visionData} />
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4  text-center text-gray-900">Our Team</h2>
          <h3 className="text-lg font-semibold mt-9 mb-9 text-gray-700 text-center">{teamData.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.guides.map((guide) => (
              <div key={guide.id} className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900">{guide.name}</h3>
                <p className="text-center tracking-wide leading-6 text-gray-800">{guide.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart;
