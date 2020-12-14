import React from 'react';
import { Box } from 'rebass';

export default ({image, content}) => (
  <>
    <Box height={['auto', '230px', '230px']} display="flex" justifyContent="center">{image}</Box>
    <Box display="flex" justifyContent="center">
      {content}
    </Box>
  </>
);
