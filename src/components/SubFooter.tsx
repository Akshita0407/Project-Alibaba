import { Link } from "react-router-dom";

const images = [
  { id: 1, src: "/placeholder.png" },
  { id: 2, src: "/placeholder.png" },
  { id: 3, src: "/placeholder.png" },
  { id: 4, src: "/placeholder.png" },
];

const Subfooter = () => {
  return (
    <>
      <div className="w-full p-6 md:p-15 flex lg:flex-row flex-col gap-2 justify-between items-center">
        <div className="flex justify-center items-center gap-5 text-[14px] md:text-[16px]">
          <Link to="">Terms of Service</Link>
          <Link to="">Privacy Policy</Link>
        </div>

        <div className="flex gap-4 justify-center items-center">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt=""
              className="w-8 h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Subfooter;
