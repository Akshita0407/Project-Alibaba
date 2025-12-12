interface ButtonContent {
  buttonText: string;
  style?: string;
}

const Button = ({ buttonText, style }: ButtonContent) => {
  return (
    <>
      <button
        className={` w-[250px]
           h-10 flex justify-center items-center text-center py-3 p-2 bg-[#004fe8] text-[20px] font-semibold text-white border border-transparent rounded-[5px]  hover:bg-[#0037a4] cursor-pointer my-4
        ${style} `}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
