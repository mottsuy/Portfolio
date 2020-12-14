import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';
import styled from '@emotion/styled';

const Anchor = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export default ({image, content, href}) => (
  <Anchor to={href}>
    <Box height="230px" display="flex" justifyContent="center">{image}</Box>
    <Box display="flex" justifyContent="center" height="100px">
      {content}
    </Box>
  </Anchor>
);