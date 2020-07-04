import React from 'react';
import { Box, Heading } from 'rebass';
import Card from './Card';
 
export default () => (
  <Box width="100%" id="about_me">
    <Heading variant="heading" py="100px">About me</Heading>
    <Card />
  </Box>
)