import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';
import styled from '@emotion/styled';

const Anchor = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ImagePanel = ({image, content}) => (
  <>
    <Box height={['auto', '230px', '230px']} display="flex" justifyContent="center">{image}</Box>
    <Box display="flex" justifyContent="center">
      {content}
    </Box>
  </>
);

const LinkPanel = ({image, content, href}) => (
  <Anchor to={href}>
    <Box height="230px" display="flex" justifyContent="center">{image}</Box>
    <Box display="flex" justifyContent="center" height="100px">
      {content}
    </Box>
  </Anchor>
);



export default ({
  image,
  content,
  padding,
  width,
  type,
  href,
}) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Box
      mb="30%"
      py={padding}
      width={width}
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px 0px rgba(70, 141, 219, 0.1)',
        borderRadius: '13px',
        }}
    >
    { type === "link" ? <LinkPanel image={image} content={content} href={href} /> :
    <ImagePanel image={image} content={content} /> }
    </Box>
  </Box>
);
