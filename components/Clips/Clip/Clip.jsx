import React from 'react';
import { Box } from 'rebass';

const Clip = ({ clip: { name, youtubeId } }) =>
  name && (
    <Box
      m={[2]}
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <iframe
        width="auto"
        height="auto"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allowFullScreen
      />
    </Box>
  );

export default Clip;
