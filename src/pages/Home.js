import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnCustom.js";
import Features from "components/features/ThreeColSimple.js";
import TabGrid from "components/cards/TabCardGridCustom.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";

import Footer from "components/footers/MiniCenteredFooter.js";

import shirtIconImageSrc from "images/shirt-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import cupIconImageSrc from "images/cup.svg";
import logo from "images/WJCLogo.png";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`text-orange-400 px-6 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`text-primary-500 px-6 transform -skew-y-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Custom Designs That<HighlightedText>Express your unique style</HighlightedText></>}
        description="We can customize clothing, bags, hats, cups, ect. Anything you need done for birthday celebrations, pictures, baby reveal,funny sayings. Something for every season or occasion."
        socialText = "Come join us in our Facebook group gpt for fun drawings and giveaways."
        imageSrc={logo}
        // imageSrc="https://wildjoy.s3.us-east-2.amazonaws.com/Logo2.jpg"
        // imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Get A Quote"
        
      />
            <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shirtIconImageSrc,
            title: "T-Shirts",
            description: "Funny sayings, cute and edgy designs",
            //url: "https://google.com"
          },
          {
            imageSrc: cupIconImageSrc,
            title: "Tumblers and Mugs",
            description: "High quality, custom and beautiful",
            //url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Everything Else",
            description: "If you can dream it up we can make it a reality",
            //url: "https://reddit.com"
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


      <Footer />
    </AnimationRevealPage>
  );
}
