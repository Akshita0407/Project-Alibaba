import BusinessOne from "./sections/BusinessOne";
import BusinessTwo from "./sections/BusinessTwo";

const Business = () => {
  return (
    <div className="flex flex-col gap-10">
      <BusinessOne />

      <BusinessTwo />
    </div>
  );
};

export default Business;
