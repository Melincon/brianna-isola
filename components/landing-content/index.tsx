import { FC } from "react";
import { LandingContentInterface, LandingContentSectionInterface } from "../../lib/contentful/interfaces";
import LandingContentSection from "../landing-content-section";


export interface LandingContentProps {
  landingContent: LandingContentInterface;
}

const LandingContent: FC<LandingContentProps> = ({ landingContent }) => {
  const { content } = landingContent;
  
  return (
    <div className="block m-12 lg:pt-3 md:mt-0">
      {content.map((contentSection: LandingContentSectionInterface, index: number) => {
        return (
          <LandingContentSection contentSection={contentSection} key={index} />
        )
      })}
    </div>
  );
};

export default LandingContent;
