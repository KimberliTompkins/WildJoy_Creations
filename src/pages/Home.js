import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnCustom.js";
import Features from "components/features/ThreeColSimple.js";
import TabGrid from "components/cards/TabCardGridCustom.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";

import Footer from "components/footers/MiniCenteredFooter.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import logo from "images/WJCLogo.png";
import mainImage from "images/shirts/praisethelord.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`text-orange-400 px-6 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`text-primary-500 px-6 transform -skew-y-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Custom Designs That<HighlightedText>Express your unique sytle</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={logo}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Get Quote"
        
      />
            <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            A few of my recent <HighlightedText>projects.</HighlightedText>
          </>
        }
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />


      {/* <Footer /> */}
    </AnimationRevealPage>
  );
}
