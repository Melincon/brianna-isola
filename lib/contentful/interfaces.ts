import { Asset, Entry, RichTextContent } from "contentful";

//Interfaces for contentful models
export interface PersonInterface {
  profileImage: Asset;
  name: string;
  caption: string;
  email: string;
  header: string;
  externalLink: Entry<Link>;
  socialLinks?: Entry<Link>[];
}

export interface LandingContentInterface {
  content: LandingContentSectionInterface[];
}

export interface LandingContentSectionInterface {
  header: string;
  markdown: RichTextContent;
  headerLink?: Entry<Link>;
}

export interface Link {
  link: string;
  linkLabel: string;
}