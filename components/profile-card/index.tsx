import { FC } from "react";
import SocialNav from "../social-nav";
import { PersonInterface } from "../../lib/contentful/interfaces";
import Image from 'next/image';

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
    <div className="text-center sticky top-24">
      <div className="block mx-auto relative w-80 h-80 mb-6">
        <Image className="block mx-auto rounded-full w-full h-full" src={"https:" + profileImage.fields.file.url} alt={profileImage.fields.description} layout="fill" />
      </div>
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
