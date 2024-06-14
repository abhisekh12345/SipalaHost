import Image from 'next/image';

const HistorySection = ({ history }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-gray-900">{history.title}</h2>
      {history.data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}  mb-8 gap-6`}
        >
          <div className="md:w-1/2 ">
            <p className="text-lg tracking-wide leading-6 text-gray-800">{item.text}</p>
          </div>
          <div className="md:w-1/2 ">
            <Image
              src={item.image}
              alt={item.title}
              width={450} // Adjust the width based on your design requirements
              height={300} // Adjust the height based on your design requirements
              className=" h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistorySection;
