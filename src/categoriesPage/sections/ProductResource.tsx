import ReadMain from "../../components/ReadMain";
import ReadCardOne from "../../components/ReadCardOne";
import ReadCardTwo from "../../components/ReadCardTwo";

const ProductResource = () => {
  return (
    <div>
      <ReadMain
        leftCardOne={
          <ReadCardOne

            title="Products Sourcing"
            description="Transform your look with trending light blue hair colors, from icy pastels to dimensional aqua hues. Master colorist-approved techniques and find your perfect shade in this comprehensive guide."
          />
        }
        leftCardsTwo={
          <>
            <ReadCardTwo
              link=""
              minutes="11"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/12/Marine-Pumps.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Marine Pumps in the USA"
              by="Vivian"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="6"
              id={2}
              imgSrc="https://img.baba-blog.com/2025/12/best-mousse-for-curly-hair.jpg?x-oss-process=style%2Fmedium_large"
              title="Professional Guide: Best Mousses for Every Curl Pattern"
              by="Oriana"
              description="Transform your curls from frizzy to fabulous with the perfect mousse for your texture. Expert-backed recommendations for all curl types, from loose waves to tight coils, plus application tips for salon-worthy results."
            />
            <ReadCardTwo
              link=""
              minutes="8"
              id={3}
              imgSrc="https://img.baba-blog.com/2025/12/Boat-Anchor.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA"
              by="Vivian"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="11"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/12/Black-and-Silver-Car-Stereo-with-Bluetooth.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Marine Pumps in the USA"
              by="Vivian"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="6"
              id={2}
              imgSrc="https://img.baba-blog.com/2025/12/Light-Strawberry-Blonde.jpg?x-oss-process=style%2Fmedium_large"
              title="Professional Guide: Best Mousses for Every Curl Pattern"
              by="Oriana"
              description="Transform your curls from frizzy to fabulous with the perfect mousse for your texture. Expert-backed recommendations for all curl types, from loose waves to tight coils, plus application tips for salon-worthy results."
            />
            <ReadCardTwo
              link=""
              minutes="8"
              id={3}
              imgSrc="https://img.baba-blog.com/2025/12/Woman-in-a-Hair-Salon.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA"
              by="Vivian"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA."
            />{" "}
            <ReadCardTwo
              link=""
              minutes="11"
              id={1}
              imgSrc="https://img.baba-blog.com/2025/12/Split-Dye-Hair.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Marine Pumps in the USA"
              by="Vivian"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA."
            />
            <ReadCardTwo
              link=""
              minutes="6"
              id={2}
              imgSrc="https://img.baba-blog.com/2025/12/best-mousse-for-curly-hair.jpg?x-oss-process=style%2Fmedium_large"
              title="Professional Guide: Best Mousses for Every Curl Pattern"
              by="Oriana"
              description="Transform your curls from frizzy to fabulous with the perfect mousse for your texture. Expert-backed recommendations for all curl types, from loose waves to tight coils, plus application tips for salon-worthy results."
            />
            <ReadCardTwo
              link=""
              minutes="8"
              id={3}
              imgSrc="https://img.baba-blog.com/2025/12/Boat-Cover.jpg?x-oss-process=style%2Fmedium_large"
              title="Review Analysis of Amazon’s Hottest Selling Boat Anchors in the USA"
              by="Vivian"
              description="We analyzed thousands of product reviews, and here’s what we learned about the top-selling boat covers in the USA."
            />
          </>
        }
        rightContent={null}
      />
    </div>
  );
};

export default ProductResource;
