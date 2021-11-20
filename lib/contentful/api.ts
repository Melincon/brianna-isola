import { PersonInterface, ImageInterface } from "./interfaces";

const image: ImageInterface = {
  src: "https://via.placeholder.com/1920x1080.png",
  alt: "Headshot image for Brianna Isola",
}

const person: PersonInterface = {
  image: image,
  name: "Brianna Isola",
  caption: "Caption",
  email: "email[at]email.com",
  header: "Header",
  externalLink: "google.com",
  externalLinkLabel: "External Link",
};

export const getPerson = (): PersonInterface => {
  return person;
};
