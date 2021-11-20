import { PersonInterface } from "./interfaces";

const personVariable: PersonInterface = {
    image: 'https://via.placeholder.com/1920x1080.png',
    name: 'Brianna Isola',
    caption: 'Caption',
    email: 'email[at]email.com',
    header: 'Header',
    externalLink: 'google.com',
    externalLinkLabel: 'External Link',
}

export const getPerson = (): PersonInterface => {
    return personVariable;
}