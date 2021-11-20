import { PersonInterface, ImageInterface, Link, LandingContentInterface, LandingContentSection } from "./interfaces";

//Filler data to mock contentful data
const image: ImageInterface = {
  src: "https://via.placeholder.com/1920x1080.png",
  alt: "Headshot image for Brianna Isola",
}

const externalLink: Link = {
  link: "https://www.google.com/",
  linkLabel: "External Link",
}

const person: PersonInterface = {
  image: image,
  name: "Brianna Isola",
  caption: "Caption",
  email: "email[at]email.com",
  header: "Header",
  externalLink: externalLink
};

const landingContentSectionWithLink: LandingContentSection = {
  header: "Heading",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  headerLink: externalLink,
}

const landingContentSectionNoLink: LandingContentSection = {
  header: "Heading",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

const landingContent: LandingContentInterface = {
  content: [landingContentSectionNoLink,landingContentSectionNoLink,landingContentSectionWithLink],
}

//Fetch contentful Person
export const getPerson = (): PersonInterface => {
  return person;
};

//Fetch all Contentful Landing Content
export const getAllLandingContent = (): LandingContentInterface => {
  return landingContent;
}