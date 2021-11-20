import { FC } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export interface SocialNavProps {}

const SocialNav: FC<SocialNavProps> = () => {
  return (
    <div className="SocialNav">
      <div className="flex">
        <div className="mr-12">
          <VscGithubInverted size={36} />
        </div>
        <div className="">
          <FaLinkedin size={36} />
        </div>
      </div>
      <style jsx>{`
        .SocialNav {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default SocialNav;
