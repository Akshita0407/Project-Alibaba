import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";

const Apparel = () => {
  return (
    <>
      <ReadMain
        leftCardOne={
          <ReadCardOne
            description="Sourcing insights and market trends for the apparel and accessories industry."
            title="Apparel & Accessories
"
          />
        }
        leftCardsTwo={
          <>
            <ReadCardTwo
              link=""
              minutes="6"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/12/Three-people-wearing-male-graduation-caps-on-campus.jpg?x-oss-process=style%2Fmedium_large"
              title="5 Epic Ways to Style Male Graduation Caps in 2026"
              by="Krista Plociennik"
              description="Do guys really like to decorate their grad caps? Here’s a look at some popular ways that male graduation caps are being styled in 2026."
            />
            <ReadCardTwo
              link=""
              minutes="6"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/12/Straw-beach-bag-on-towel-next-to-straw-sun-hat.jpg?x-oss-process=style%2Fmedium_large"
              title="How to Choose the Best Materials for Beach Bags"
              by="Krista Plociennik"
              description="Every material that beach bags are designed with comes with their own pros and cons. Read on to find out more about each style and their features."
            />
            <ReadCardTwo
              link=""
              minutes="6"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/11/Wide-angle-view-of-an-empty-fashion-studio.jpg?x-oss-process=style%2Fmedium_large"
              title="Choosing Mannequins for Clothing Design Models: A Complete Guide"
              by="Anoshia Riaz"
              description="If you’re into clothing design models, your mannequin game better be strong. Here’s your quick guide."
            />
            <ReadCardTwo
              link=""
              minutes="6"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/10/a-woman-standing-in-front-of-a-graffiti-covered-wall.jpg?x-oss-process=style%2Fmedium_large"
              title="Review analysis of Amazon’s hottest selling women’s down coats in USA in 2025"
              by="Krista Plociennik"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling women’s down coats in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="15"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/09/Young-Woman-in-a-Denim-Jacket.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Plus Size Women’s Jackets in the USA"
              by="Lela"
              description="An in-depth analysis of the top-selling plus-size women’s jackets on Amazon USA, based on customer reviews. Discover product strengths, consumer preferences, and market trends to inform brand selection and marketing strategies."
            />
            <ReadCardTwo
              link=""
              minutes="13"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/09/Gloves-for-Cold-Weather.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Nylon Gloves and Mittens in the USA"
              by="Willa"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling nylon gloves and mittens in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="14"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/09/A-Woman-Standing-on-Snow-Covered-Ground.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Neckerchiefs in the USA"
              by="Anoshia Riaz"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling neckerchiefs in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="12"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/09/Fashionable-Woman-with-Eyeglasses-Smiling.jpg?x-oss-process=style%2Fmedium_large"
              title="Climate-Proof Prints: How Spring/Summer 2027 Designs Adapt to a World of Weather Extremes"
              by="Krista Plociennik"
              description="Discover how women’s prints are evolving with transitional florals, eco-friendly materials, and bold designs that blend culture, sustainability, and versatility."
            />
          </>
        }
      />
    </>
  );
};

export default Apparel;
