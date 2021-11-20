import { FC } from "react";

export interface LandingContentSectionProps {}

const LandingContentSection: FC<LandingContentSectionProps> = () => {
  return (
    <div className=" mb-6">
      <h3 className=" text-3xl">Heading</h3>
      <div className="border-b mb-3"></div>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
    </div>
  );
};

export default LandingContentSection;
