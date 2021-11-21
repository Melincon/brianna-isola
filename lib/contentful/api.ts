import { PersonInterface, LandingContentInterface, LandingContentSectionInterface } from "./interfaces";
import { createClient, Entry, EntryCollection } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'some-id',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'some-token',
});

//Fetch contentful Person
export const getPersonById = async (id: string): Promise<PersonInterface> => {
  const contentfulPersonData: Entry<PersonInterface> = await contentfulClient.getEntry(id);
  const person: PersonInterface = {...contentfulPersonData.fields}
  return person;
};

//Fetch all Contentful Landing Content
export const getAllLandingContent = async (): Promise<LandingContentInterface> => {
  const allLandingContent: EntryCollection<LandingContentSectionInterface> = await contentfulClient.getEntries({
    content_type: 'landingContentSection',
  })
  const landingContent: LandingContentSectionInterface[] = allLandingContent.items.map((item: Entry<LandingContentSectionInterface>) => {
    return {...item.fields}
  }, [])
  return {
    content: landingContent,
  };
}