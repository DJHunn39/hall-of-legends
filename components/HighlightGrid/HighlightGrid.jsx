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
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
      ],
      alignItems: 'stretch',
      gridGap: 3,
    }}
  >
    {props.children}
  </Box>
);
