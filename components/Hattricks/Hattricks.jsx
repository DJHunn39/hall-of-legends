import React from 'react';
import HighlightGrid from '../HighlightGrid/HighlightGrid';
import Hattrick from './Hattrick/Hattrick';

const Hattricks = ({ hattricks }) => (
  <HighlightGrid>
    {hattricks.map((hattrick, index) => (
      <Hattrick key={`hattrick-${index}`} hattrick={hattrick} />
    ))}
  </HighlightGrid>
);
export default Hattricks;
