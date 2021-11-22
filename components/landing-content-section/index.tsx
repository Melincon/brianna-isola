import { FC } from "react";
import { LandingContentSectionInterface } from "../../lib/contentful/interfaces";

export interface LandingContentSectionProps {
  contentSection: LandingContentSectionInterface;
}

const LandingContentSection: FC<LandingContentSectionProps> = ({contentSection}) => {
  const { header, paragraph, headerLink } = contentSection;
  return (
    <div className=" mb-6">
      <h3 className=" text-3xl text-colorTwo">{header}</h3>
      <div className="border-b mb-3 border-lineColor"></div>
      {headerLink && (
        <a className="" href={headerLink.fields.link} target="_blank" rel="noreferrer">{headerLink.fields.linkLabel}</a>
      )}
      <p className="mt-2 text-colorThree">
        {paragraph}
      </p>
    </div>
  );
};

export default LandingContentSection;
