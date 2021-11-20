import { FC } from "react";
import { LandingContentSectionInterface } from "../../lib/contentful/interfaces";

export interface LandingContentSectionProps {
  contentSection: LandingContentSectionInterface;
}

const LandingContentSection: FC<LandingContentSectionProps> = ({contentSection}) => {
  const { header, paragraph, headerLink } = contentSection;
  
  return (
    <div className=" mb-6">
      <h3 className=" text-3xl">{header}</h3>
      <div className="border-b mb-3"></div>
      {headerLink && (
        <a className="" href={headerLink.link} target="_blank" rel="noreferrer">{headerLink.linkLabel}</a>
      )}
      <p className="mt-2">
        {paragraph}
      </p>
    </div>
  );
};

export default LandingContentSection;
