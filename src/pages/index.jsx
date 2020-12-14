import React from 'react';
import {Box, Heading} from 'rebass';
import Layout from '../Layout';
import Container from '../lib/Container';
import Head from '../components/template/Head';
import About from '../components/template/About';
import Skill from '../components/template/Skill';
import Work from '../components/template/Work';


const HeadingContent = () => (
  <Heading as="h1" variant="title">
    Miyamoto's
    <br/>
    Portfolio
  </Heading>
);

export default () => (
  <Layout>
    <Box bg="rgba(96, 0, 155, 0.3)">
      <Head content={HeadingContent()} height="850px" />
      <Container>
        <About />
        <Skill />
        <Work />
      </Container>
    </Box>
  </Layout>
);