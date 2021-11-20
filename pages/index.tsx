import type { NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/landing";
import { getAllLandingContent, getPerson } from "../lib/contentful/api";
import { LandingContentInterface, PersonInterface } from "../lib/contentful/interfaces";
import { GetStaticProps } from "next";

export interface HomePageProps {
  person: PersonInterface;
  landingContent: LandingContentInterface;
}

const Home: NextPage<HomePageProps> = ({ person, landingContent }) => {
  return (
    <main className="">
      <Layout>
        <Landing person={person} landingContent={landingContent} />
      </Layout>
    </main>
  );
};

export const getStaticProps: GetStaticProps = (): {
  props: HomePageProps;
} => {
  const person = getPerson();
  const landingContent = getAllLandingContent();
  return {
    props: {
      person: person,
      landingContent: landingContent,
    },
  };
};

export default Home;
