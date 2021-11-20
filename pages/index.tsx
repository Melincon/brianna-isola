import type { NextPage } from 'next';
import Layout from '../components/layout';
import Landing from '../components/landing';
import { getPerson } from '../lib/typescript/api';
import { PersonInterface } from '../lib/typescript/interfaces';

export interface HomePageProps {
  person: PersonInterface;
}

const Home: NextPage<HomePageProps> = ({ person }) => {
  
  return (
    <main className=''>
      <Layout>
        <Landing person={person}/>
      </Layout>
    </main>
  );
};

export const getStaticProps = () => {
  const personJSON = getPerson();

  return {
    props: {
      person: personJSON,
    }
  }
}

export default Home;
