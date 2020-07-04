import React from 'react';
import { Box } from 'rebass';

export default ({
  paddingTop,
  paddingBottom,
  children,
}) => (
  <Box
    width={['auto', 'auto', '1024px']}
    mx="auto"
    px={['6.7%', '3.1%', '0%']}
    pt={paddingTop}
    pb={paddingBottom}
  >
    { children }
  </Box>
);
