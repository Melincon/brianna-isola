export interface PersonInterface {
  image: ImageInterface;
  name: string;
  caption: string;
  email: string;
  header: string;
  externalLinkLabel: string;
  externalLink: string;
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