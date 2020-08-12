import React from 'react';
import Season from './Season/Season';

const CardsBreakdown = ({ seasons }) =>
  seasons.map((season, index) => (
    <Season key={`season-${index}`} season={season} />
  ));
export default CardsBreakdown;
