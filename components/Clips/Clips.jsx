import React from 'react';
import { Flex } from 'rebass';
import HighlightGrid from '../HighlightGrid/HighlightGrid';
import Clip from './Clip/Clip';

const Clips = ({ clips }) => (
  <HighlightGrid>
    {clips.map((clip, index) => (
      <Clip key={`clip-${index}`} clip={clip} />
    ))}
  </HighlightGrid>
);
export default Clips;
