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
  const HighlightedText = tw.span` text-orange-400 px-1 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`text-primary-500 px-6 transform -skew-y-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Custom designs that<HighlightedText>express your unique style</HighlightedText></>}
        description="Let us help make life’s celebrations and memorable moments special with a customized gift item!  We specialize in clothing, hats and tumblers, but we love the opportunity to discuss new ideas, too!  Whether it’s a gender reveal, gag gift, or a special holiday, birthday, anniversary, retirement, or ‘just because’ item, we have something for any occasion."
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
            description: "Anything from sweet & innocent to sassy & edgy",
            //url: "https://google.com"
          },
          {
            imageSrc: cupIconImageSrc,
            title: "Tumblers and Mugs",
            description: "Handcrafted and uniquely beautiful",
            //url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Everything Else",
            description: "The only limit is your imagination",
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
            A few of our recent <HighlightedText>projects.</HighlightedText>
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
