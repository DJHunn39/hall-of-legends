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
      gridTemplateRows: 'fit-content(40%)',
      alignItems: 'stretch',
      gridGap: 3,
    }}
  >
    {props.children}
  </Box>
);
