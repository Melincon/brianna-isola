import { FC } from "react";
import ProfileCard from "../profile-card";
import LandingContent from "../landing-content";
import { LandingContentInterface, PersonInterface } from "../../lib/contentful/interfaces";

export interface LandingProps {
  person: PersonInterface;
  landingContent: LandingContentInterface
}

const Landing: FC<LandingProps> = ({ person, landingContent }) => {
  return (
    <div className="lg:flex m-auto">
      <div className="block">
        <ProfileCard person={person} />
      </div>
      <LandingContent landingContent={landingContent} />
    </div>
  );
};

export default Landing;
