import Image from 'next/image';

const VisionSection = ({ vision }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{vision.title}</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/2">
          {vision.qa.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold mb-2 text-gray-900">{item.question}</h3>
              <p className="normal-case tracking-wide leading-6 text-gray-800">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2">
          <Image
            src={vision.image}
            alt={vision.title}
            width={450} // Adjust the width based on your design requirements
            height={300} // Adjust the height based on your design requirements
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
