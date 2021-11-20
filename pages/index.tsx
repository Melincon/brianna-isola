import type { NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/landing";
import { getPerson } from "../lib/contentful/api";
import { PersonInterface } from "../lib/contentful/interfaces";
import { GetStaticProps } from "next";

export interface HomePageProps {
  person: PersonInterface;
}

const Home: NextPage<HomePageProps> = ({ person }) => {
  return (
    <main className="">
      <Layout>
        <Landing person={person} />
      </Layout>
    </main>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const personJSON = getPerson();

  return {
    props: {
      person: personJSON,
    },
  };
};

export default Home;
