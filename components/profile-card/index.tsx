import { FC } from "react";
import SocialNav from "../social-nav";
import { PersonInterface } from "../../lib/contentful/interfaces";

export interface ProfileCardProps {
  person: PersonInterface;
}

const ProfileCard: FC<ProfileCardProps> = ({ person }) => {
  const {
    profileImage,
    name,
    caption,
    email,
    header,
    externalLink,
  } = person;

  return (
    <div className="text-center">
      <img className="block mx-auto w-5/6 h-auto rounded-full mb-6" src={profileImage.fields.file.url} alt={profileImage.fields.description} />
      <h1 className="block text-4xl">{name}</h1>
      <h2 className="block text-xl mb-3">{caption}</h2>
      <div className="border-b w-40 block mx-auto mb-9" />
      <span className="block mb-3">{email}</span>
      <SocialNav />
      <div className=" border-b w-72 block mx-auto mt-3" />
      <span className="block text-xl mt-3">{header}</span>
      <a className="block text-xl mb-3" href={externalLink.fields.link} target="_blank" rel="noreferrer" >{externalLink.fields.linkLabel}</a>
    </div>
  );
};

export default ProfileCard;
