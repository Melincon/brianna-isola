//Interfaces for contentful models
export interface PersonInterface {
  image: ImageInterface;
  name: string;
  caption: string;
  email: string;
  header: string;
  externalLink: Link;
  socialLinks?: SocialLinkInterface[];
}

export interface SocialLinkInterface {
  icon: string;
  link: string;
}

export interface ImageInterface {
  src: string;
  alt: string;
}

export interface LandingContent {
  content: LandingContentSection[];
}

export interface LandingContentSection {
  header: string;
  paragraph: string;
  headerLink?: Link;
}

export interface Link {
  link: string;
  linkLabel: string;
}