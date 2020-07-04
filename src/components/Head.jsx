import React from 'react';
import { Box } from 'rebass';

export default ({ content, height }) => (
  <Box
    bg="rgba(96, 0, 155, 0.5)"
    height={ height }
    textAlign="center"
    display="flex"
    justifyContent="center"
  >
    {content}
  </Box>
)
