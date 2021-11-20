import { FC } from "react";
import SocialNav from "../social-nav";
import { PersonInterface } from "../../lib/contentful/interfaces";

export interface ProfileCardProps {
  person: PersonInterface;
}

const ProfileCard: FC<ProfileCardProps> = ({ person }) => {
  const {
    image,
    name,
    caption,
    email,
    header,
    externalLinkLabel,
    externalLink,
  } = person;

  return (
    <div className="text-center">
      <img className="block mx-auto rounded-full w-48 h-48 mb-6" src={image.src} alt={image.alt} />
      <h1 className="block text-4xl">{name}</h1>
      <h2 className="block text-xl mb-3">{caption}</h2>
      <div className="border-b w-40 block mx-auto mb-9" />
      <span className="block mb-3">{email}</span>
      <SocialNav />
      <div className=" border-b w-72 block mx-auto mt-3" />
      <span className="block text-xl mt-3">{header}</span>
      <a className="block text-xl mb-3" href={externalLink} target="_blank" rel="noreferrer" >{externalLinkLabel}</a>
    </div>
  );
};

export default ProfileCard;
