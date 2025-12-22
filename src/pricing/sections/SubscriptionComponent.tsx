import React from "react";
import clsx from "clsx";
import { TiTick } from "react-icons/ti";
import { PiCurrencyDollarBold } from "react-icons/pi";

interface Benefit {
  text: string;
  amount?: string;
}

export interface SubscriptionCardProps {
  headingText?: string;
  title?: string;
  subtitle?: string;
  price: string;
  priceLabel: string;
  benefits: Benefit[];
  buttonText?: string;
  onButtonClick?: () => void;
  isPopular?: boolean;
  learnMoreText?: string;
  onLearnMoreClick?: () => void;
}

interface SubscriptionSectionProps {
  heading?: string;
  cards: SubscriptionCardProps[];
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  headingText,
  title,
  subtitle,
  price,
  benefits,
  buttonText = "Select Plan",
  onButtonClick,
  isPopular = false,
}) => {
  return (
    <div
      className={clsx(
        "relative w-full max-w-[350px] rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-102 ease-in-out",
        isPopular
          ? "bg-ts-white text-ts-black border border-ts-grey/20"
          : "bg-ts-white text-ts-black border border-ts-grey/20"
      )}
    >
      <div
        className={clsx(
          isPopular ? "w-full absolute top-3 left-0 pr-3" : "hidden"
        )}
      >
        <div className="w-full bg-linear-to-r from-ts-fire to-ts-brown-dark">
          <p className="w-full text-ts-white text-xs  font-semibold py-2 px-6 ">
            Most popular
          </p>
        </div>
      </div>
      <div className=" mb-6 flex flex-col justify-center mt-5">
        <h1
          className={clsx(
            "text-2xl font-semibold mb-1",
            isPopular ? "text-white" : "text-akti-black"
          )}
        >
          {headingText}
        </h1>
        <h3
          className={clsx(
            "text-2xl font-semibold mb-1",
            isPopular ? "text-ts-blue-light" : "text-ts-blue-light"
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "text-xs mb-4 font-semibold",
            isPopular ? "text-ts-blue-light/80" : "text-ts-blue-light/80"
          )}
        >
          {subtitle}
        </p>
        <div className="w-full flex">
          <div
            className={clsx(
              " text-xl",
              isPopular ? "text-ts-blue" : "text-ts-orange"
            )}
          >
            <PiCurrencyDollarBold />
          </div>
          <div
            className={clsx(
              "text-6xl font-medium italic",
              isPopular ? "text-ts-blue " : "text-ts-orange"
            )}
          >
            {price}
          </div>
          <div className="flex flex-col justify-end items-end">
            <p
              className={clsx(
                "text-xs font-semibold px-2",
                isPopular ? "text-ts-blue-light/80" : "text-ts-orange"
              )}
            >
              /Mo
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center items-center">
        <button
          onClick={onButtonClick}
          className={clsx(
            "w-full py-3 rounded-full font-semibold hover:cursor-pointer text-sm transition-all duration-300",
            isPopular
              ? "bg-ts-blue text-white hover:bg-akti-black"
              : "bg-ts-blue text-white hover:bg-akti-black"
          )}
        >
          {buttonText}
        </button>
      </div>

      <div className="mb-6 flex flex-col justify-center">
        <h4
          className={clsx(
            "text-sm font-semibold mb-4",
            isPopular ? "text-ts-blue-light/80" : "text-ts-blue-light/80"
          )}
        >
          INCLUDES
        </h4>
        <div className="space-y-3 flex flex-col justify-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <TiTick
                className={clsx(
                  "shrink-0 mt-0.5",
                  isPopular ? "text-ts-blue" : "text-ts-blue"
                )}
                size={20}
              />
              <div className="flex-1 flex items-center">
                <p
                  className={clsx(
                    "text-xs leading-relaxed font-semibold",
                    isPopular ? "text-ts-blue-dark" : "text-ts-blue-dark "
                  )}
                >
                  {benefit.text}
                  {benefit.amount && (
                    <span className="font-medium"> {benefit.amount}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  heading,
  cards,
}) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-2 px-4">
      <h1 className="text-2xl md:text-4xl text-black font-bold mb-12 text-center">
        {heading}
      </h1>

      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-6 justify-items-center">
        {cards.map((card, index) => (
          <SubscriptionCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
