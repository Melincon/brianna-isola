import type { NextPage } from 'next';
import Layout from '../components/layout';
import Landing from '../components/landing';

const Home: NextPage = () => {
  return (
    <main className=''>
      <Layout>
        <Landing />
      </Layout>
    </main>
  );
};

export default Home;
