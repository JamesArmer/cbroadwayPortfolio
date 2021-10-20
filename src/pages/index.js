import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents/indexStyles';

const HomePage = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Work />
    </Layout>
  );
};

export default HomePage;
