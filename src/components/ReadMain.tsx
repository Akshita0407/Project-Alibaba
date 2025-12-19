interface ReadMainProps {
  leftCardOne?: React.ReactNode;
  leftCardsTwo?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const ReadMain = ({
  leftCardOne,
  leftCardsTwo,
  rightContent,
}: ReadMainProps) => {
  return (
    <div className="w-full p-6 md:py-15">
      <div className="mx-auto lg:px-8">
        <div className="flex lg:flex-row flex-col gap-6 items-start">
          <div className="lg:w-[70%] w-full flex flex-col gap-10">
            {leftCardOne}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:p-8 p-4 bg-white">
              {leftCardsTwo}
            </div>
          </div>

          <div className="lg:w-[28%] w-full sticky top-0">
            <div className="h-screen overflow-y-auto p-6 bg-white rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMain;
