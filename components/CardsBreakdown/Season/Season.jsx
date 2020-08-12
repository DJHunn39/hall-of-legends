import React from 'react';
import { Box } from 'rebass';
import { leagues } from '../../../constants/futConstants';
import CustomCollapse from '../../CustomCollapse/CustomCollapse';
import Stat from '../../LegendStats/Stat';

const Season = ({
  season: {
    year,
    data: { club, league, games, goals, assists, overall, cardStats },
  },
}) =>
  year && (
    <CustomCollapse triggerText={`${year} | ${overall}`}>
      <Box
        sx={{
          display: 'grid',
          gridGap: [1, 1, 1, 2],
          gridTemplateColumns: 'repeat(12, minmax(10px, 1fr))',
          gridTemplateRows: [
            'repeat(3, minmax(10px, 1fr))',
            'repeat(3, minmax(10px, 1fr))',
            'repeat(3, minmax(10px, 1fr))',
            'repeat(2, minmax(30px, 1fr))',
          ],
        }}
      >
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: 'span 4',
            gridRowStart: 1,
          }}
        >
          <Stat stat="Games" value={games} image="pitch" />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: 5,
            gridColumnEnd: 'span 4',
            gridRowStart: 1,
          }}
        >
          <Stat stat="Goals" value={goals} image="football" />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: 9,
            gridColumnEnd: 'span 4',
            gridRowStart: 1,
          }}
        >
          <Stat stat="Assists" value={assists} image="assist" />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: ['span 6', 'span 6', 'span 6', 'span 3'],
            gridRowStart: 2,
          }}
        >
          <Stat stat="Year" value={year} />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [7, 7, 7, 4],
            gridColumnEnd: ['span 6', 'span 6', 'span 6', 'span 3'],
            gridRowStart: 2,
          }}
        >
          <Stat stat="Overall" value={overall} />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [1, 1, 1, 7],
            gridColumnEnd: ['span 6', 'span 6', 'span 6', 'span 3'],
            gridRowStart: [3, 3, 3, 2],
          }}
        >
          <Stat stat="League" value={leagues[league]} />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [7, 7, 7, 10],
            gridColumnEnd: ['span 6', 'span 6', 'span 6', 'span 3'],
            gridRowStart: [3, 3, 3, 2],
          }}
        >
          <Stat stat="Club" value={club} />
        </Box>
      </Box>
    </CustomCollapse>
  );
export default Season;
