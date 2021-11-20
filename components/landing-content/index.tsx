import { FC } from "react";
import { LandingContentInterface, LandingContentSection } from "../../lib/contentful/interfaces";


export interface LandingContentProps {
  landingContent: LandingContentInterface;
}

const LandingContent: FC<LandingContentProps> = ({ landingContent }) => {
  const { content } = landingContent;
  return (
    <div className="block mx-12 mt-6 md:mt-0">
      {content.map((contentSection: LandingContentSection) => {
        return (
          <div className="">{contentSection.header}</div>
        )
      })}
    </div>
  );
};

export default LandingContent;
