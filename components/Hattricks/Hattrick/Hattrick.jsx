import React from 'react';
import { Image, Box, Text } from 'rebass';

const Hattrick = ({ hattrick: { name, picUrl } }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignItems: 'stretch',
      ' .overlay': {
        opacity: 0,
        transition: '.5s ease',
        bg: 'rgba(0, 0, 0, 0.4)',
        gridRowStart: 1,
        gridColumnStart: 1,
      },
      ':hover .overlay,:active .overlay,:focus .overlay': {
        opacity: 1,
      },
      ' div': {
        gridRowStart: 1,
        gridColumnStart: 1,
      },
    }}
  >
    <Image
      src={picUrl}
      sx={{
        gridRowStart: 1,
        gridColumnStart: 1,
      }}
    />
    <div class="overlay">
      <Text my={4} textAlign="center">
        {name}
      </Text>
    </div>
  </Box>
);

export default Hattrick;
