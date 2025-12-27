interface ButtonContent {
  to?: string;
  buttonText: string;
  image?: boolean;
}

const ProButton = ({ image, buttonText }: ButtonContent) => {
  return (
    <button className="cursor-pointer w-[230px] h-[42px] px-4 border border-transparent rounded-[30px] bg-[#333] text-[#f2cb8e] text-[16px] flex items-center justify-center gap-2">
      <span>{buttonText}</span>

      {image && (
        <img
          src="//s.alicdn.com/@img/tfs/TB1LMju0.T1gK0jSZFrXXcNCXXa-306-102.png"
          alt="pro-buyer"
          className="w-15 h-auto object-contain"
        />
      )}
    </button>
  );
};

export default ProButton;
