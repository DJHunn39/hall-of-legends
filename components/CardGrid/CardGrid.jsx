// example grid layout component
import React from 'react';
import { Box } from 'rebass';

export default (props) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
        'repeat(4, 1fr)',
      ],
      alignItems: 'stretch',
      gridGap: 3, // theme.space[3]
    }}
  >
    {props.children}
  </Box>
);
