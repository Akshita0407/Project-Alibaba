// import { Link } from "react-router-dom";

// interface BusinessCardProps {
//   image: string;
//   category: string;
//   title: string;
//   date: string;
//   readTime: string;
//   source: string;
//   description?: string;
//   link?: string;
//   style?: string;
// }

// const BusinessCard = ({
//   image,
//   category,
//   title,
//   date,
//   readTime,
//   source,
//   description,
//   style,
//   link = "",
// }: BusinessCardProps) => {
//   return (
//     <div className="w-full h-full flex lg:flex-row flex-col  justify-center items-center">
//       <div className="w-full  flex flex-col  rounded-[15px]">
//         <Link to={link}>
//           <div className="w-full h-fit">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-auto object-cover rounded-[15px]"
//             />
//           </div>
//         </Link>

//         <div
//           className={`flex flex-col flex-1 gap-4 p-4 bg-[#f5f8ff] rounded-[15px] -translate-y-15 ${
//             style || ""
//           }`}
//         >
//           <p className="text-[12px] font-medium">{category}</p>

//           <h3 className="text-[14px] md:text-[18px] font-bold line-clamp-2">
//             {title}
//           </h3>

//           {description && (
//             <p className="text-[14px] text-gray-600 line-clamp-2">
//               {description}
//             </p>
//           )}

//           <div className=" text-[12px] flex flex-col gap-1 text-gray-500">
//             <div className="flex items-center gap-2">
//               <p>{date}</p>
//               <span className="w-1 h-1 bg-gray-400 rounded-full" />
//               <p>{readTime}</p>
//             </div>
//             <p>{source}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessCard;
import { Link } from "react-router-dom";

interface BusinessCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  source: string;
  description?: string;
  link?: string;
  style?: string;
}

const BusinessCard = ({
  image,
  category,
  title,
  date,
  readTime,
  source,
  description,
  style,
  link = "",
}: BusinessCardProps) => {
  return (
    <div className="w-full  flex flex-col min-h-[400px]">
      <Link to={link} className="block">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-[15px]"
        />
      </Link>

      <div
        className={`flex flex-col lg:min-h-[200px] justify-between gap-4 p-4 bg-[#f5f8ff] rounded-[15px] -translate-y-6 ${
          style || ""
        }`}
      >
        <p className="text-[12px] font-medium">{category}</p>

        <h3 className="text-[14px] md:text-[18px] font-bold line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="text-[14px] text-gray-600 line-clamp-2">
            {description}
          </p>
        )}

        <div className="text-[12px]  flex flex-col gap-1 text-gray-500">
          <div className="flex items-center gap-2">
            <p>{date}</p>
            <span className="w-1 h-1 bg-gray-400 rounded-full" />
            <p>{readTime}</p>
          </div>
          <p>{source}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
