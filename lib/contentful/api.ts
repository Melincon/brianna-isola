import { PersonInterface, ImageInterface, Link, LandingContentInterface, LandingContentSectionInterface } from "./interfaces";
import { createClient, Entry } from "contentful";

//Filler data to mock contentful data
const externalLink: Link = {
  link: "https://www.google.com/",
  linkLabel: "External Link",
}

const landingContentSectionWithLink: LandingContentSectionInterface = {
  header: "Heading",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  headerLink: externalLink,
}

const landingContentSectionNoLink: LandingContentSectionInterface= {
  header: "Heading",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

const landingContent: LandingContentInterface = {
  content: [landingContentSectionNoLink,landingContentSectionNoLink,landingContentSectionWithLink],
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'some-id',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'some-token',
});

//Fetch contentful Person
export const getPersonById = async (id: string) => {
  const contentfulPersonData: Entry<PersonInterface> = await contentfulClient.getEntry(id);
  const person: PersonInterface = {...contentfulPersonData.fields}
  return person;
};

//Fetch all Contentful Landing Content
export const getAllLandingContent = (): LandingContentInterface => {
  return landingContent;
}