import BuyerText from "../components/BuyerLeftLayout";

const content = [
  { id: 1, image: "", step: "1", category: "Find products and sellers" },
  { id: 1, image: "", step: "2", category: "Connect with sellers" },
  { id: 1, image: "", step: "3", category: "Place and protect order" },
  { id: 1, image: "", step: "4", category: "Pay on Alibaba.com" },
  { id: 1, image: "", step: "5", category: "Ship and receive your goods" },
];

const BuyerFeatureTwo = () => {
  return (
    <>
      <div
        className="w-full p-6 md:p-15 flex justify-center items-center "
        id="newToSourcing"
      >
        <div className="w-full flex lg:flex-row flex-col gap-[4%]">
          <BuyerText
            description="Find everything you need in one place. From finding ready-to-ship products or a partner to customize the product you want, all the way through to ensuring quality and shipping your order to its final destination."
            button={true}
            title="New to sourcing on Alibaba.com?"
          />
          <div className="lg:w-[48%] w-full flex flex-col gap-8 justify-center items-center py-2 lg:pl-5 text-[#333]">
            {content.map((c) => (
              <div
                className="w-full flex gap-5 items-center justify-center "
                key={c.id}
              >
                <div className="w-[15%] ">
                  <div className="w-12 h-12 aspect-square rounded-full bg-[#ff6600] justify-center items-center">
                    <div>
                      <img src={c.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-[#ff6600] text-[14px] lg:text-[16px]">
                    Step {c.step}
                  </p>

                  <p className="lg:text-[18px] text-[14px]">{c.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerFeatureTwo;
