import React from "react";

const magazineHeadsDetails = [
  {
    name: "Kashmira Chaoji",
    imageUrl:
      "https://res.cloudinary.com/priyanshukayarkar/image/upload/v1737388121/WhatsApp_Image_2025-01-13_at_10.08.07_PM_ejcfj5.jpg",
    branch: "CSD",
    year: "3rd",
  },
  {
    name: "Taniya Borkar",
    imageUrl:
      "https://res.cloudinary.com/priyanshukayarkar/image/upload/v1737388295/WhatsApp_Image_2025-01-13_at_10.08.08_PM_rrkqw2.jpg",
    branch: "CSD",
    year: "3rd",
  },
  {
    name: "Somesh Sharma",
    imageUrl:
      "https://res.cloudinary.com/priyanshukayarkar/image/upload/v1737391141/WhatsApp_Image_2025-01-20_at_10.01.58_PM_u1cee3.jpg",
    branch: "CSD",
    year: "3rd",
  },
];

const MagazineHead = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
        Our Heads
      </h1>
      <div className="w-full h-auto rounded-3xl bg-[#111111] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-6 tracking-wide ">
        {magazineHeadsDetails.map((head, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-xl bg-secondary shadow-lg"
          >
            <img
              className="w-80 h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl"
              src={head.imageUrl}
              alt={head.name}
            />
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mt-4">
              {head.name}
            </h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              {head.branch} - {head.year} Year
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineHead;
