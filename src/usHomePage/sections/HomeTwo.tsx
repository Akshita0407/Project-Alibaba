const content = [
  { id: 1, number: "40M+", text: "active buyers" },
  { id: 2, number: "200+", text: "countries" },
  { id: 3, number: "300K+", text: "daily inquiries" },
  { id: 4, number: "5,900+", text: "categories" },
];

const HomeTwo = () => {
  return (
    <div className="w-full min-h-[300px] flex items-center justify-center p-6 md:p-15">
      <div className="w-full flex flex-col lg:flex-row min-h-[400px] border border-transparent rounded-[20px] bg-[#c7c5c5ec] shadow-2xl p-8 gap-8">
        <div className="w-full lg:w-[50%] grid grid-cols-2 text-white gap-6">
          {content.map((c) => (
            <div
              key={c.id}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <div className="lg:text-[55px] font-bold  mb-2">{c.number}</div>
              <p className="lg:text-[34px] ">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <img
            src="your-image-url"
            alt="Description"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
