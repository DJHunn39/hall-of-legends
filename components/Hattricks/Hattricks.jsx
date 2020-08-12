import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import Hattrick from './Hattrick/Hattrick';

const Hattricks = ({ hattricks }) => {
  console.log(hattricks);
  return (
    <CardGrid>
      {hattricks.map((hattrick, index) => (
        <Hattrick key={`hattrick-${index}`} hattrick={hattrick} />
      ))}
    </CardGrid>
  );
};
export default Hattricks;
