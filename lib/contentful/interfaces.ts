export interface PersonInterface {
  image: string;
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
