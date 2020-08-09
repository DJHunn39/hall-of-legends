// example grid layout component
import React from 'react';
import { Box } from 'rebass';

export default (props) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      alignItems: 'stretch',
      gridGap: 3, // theme.space[3]
    }}
  >
    {props.children}
  </Box>
);
