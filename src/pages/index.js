import Hero from '../components/Hero/Hero';
import Projects from '../components/Work/Work';
import Technologies from '../components/About/About';
import Timeline from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents/indexStyles';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
