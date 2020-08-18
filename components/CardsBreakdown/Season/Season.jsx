import React from 'react';
import { Box } from 'rebass';
import { leagues } from '../../../constants/futConstants';
import { roundStringIntsTwoDP } from '../../../utils/round';
import CustomCollapse from '../../CustomCollapse/CustomCollapse';
import Stat from '../../LegendStats/Stat';

const Season = ({
  season: {
    year,
    data: {
      club,
      league,
      games,
      goals,
      assists,
      overall,
      cardStats: { pac, dri, sho, def, pas, phy },
    },
  },
}) =>
  year && (
    <CustomCollapse triggerText={`${year} | ${overall}`}>
      <Box
        sx={{
          display: 'grid',
          gridGap: [1, 1, 1, 2],
          gridTemplateColumns: 'repeat(20, minmax(10px, 1fr))',
          gridTemplateRows: [
            'repeat(4, minmax(10px, 1fr))',
            'repeat(2, minmax(10px, 1fr))',
          ],
        }}
      >
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: ['span 6', 'span 4'],
            gridRowStart: 1,
          }}
        >
          <Stat isMini stat="Games" value={games} image="pitch" />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [8, 5],
            gridColumnEnd: ['span 6', 'span 4'],
            gridRowStart: 1,
          }}
        >
          <Stat isMini stat="Goals" value={goals} image="football" />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [15, 9],
            gridColumnEnd: ['span 6', 'span 4'],
            gridRowStart: 1,
          }}
        >
          <Stat isMini stat="Assists" value={assists} image="assist" />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [1, 13],
            gridColumnEnd: ['span 10', 'span 4'],
            gridRowStart: [2, 1],
          }}
        >
          <Stat
            isMini
            stat="Goals/game"
            value={roundStringIntsTwoDP(goals, games)}
            image="football"
          />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [11, 17],
            gridColumnEnd: ['span 10', 'span 4'],
            gridRowStart: [2, 1],
          }}
        >
          <Stat
            isMini
            stat="Assists/game"
            value={roundStringIntsTwoDP(assists, games)}
            image="assist"
          />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: ['span 10', 'span 5'],
            gridRowStart: [3, 2],
          }}
        >
          <Stat isMini stat="Overall" value={overall} />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [11, 6],
            gridColumnEnd: ['span 10', 'span 5'],
            gridRowStart: [3, 2],
          }}
        >
          <Stat isMini stat="Year" value={year} />
        </Box>

        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [1, 11],
            gridColumnEnd: ['span 10', 'span 5'],
            gridRowStart: [4, 2],
          }}
        >
          <Stat isMini stat="League" value={leagues[league]} />
        </Box>
        <Box
          p={[1, 1, 1, 3]}
          sx={{
            gridColumnStart: [11, 16],
            gridColumnEnd: ['span 10', 'span 5'],
            gridRowStart: [4, 2],
          }}
        >
          <Stat isMini stat="Club" value={club} />
        </Box>
      </Box>
      {pac > 0 && (
        <Flex flexDirection="row" flexWrap="wrap">
          <Box p={[1, 1, 1, 3]}>
            <Stat isMini stat="Pace" value={pac} />
          </Box>
          <Box p={[1, 1, 1, 3]}>
            <Stat isMini stat="Dribbling" value={dri} />
          </Box>
          <Box p={[1, 1, 1, 3]}>
            <Stat isMini stat="Shooting" value={sho} />
          </Box>
          <Box p={[1, 1, 1, 3]}>
            <Stat isMini stat="Defending" value={def} />
          </Box>
          <Box p={[1, 1, 1, 3]}>
            <Stat isMini stat="Passing" value={pas} />
          </Box>
          <Box p={[1, 1, 1, 3]}>
            <Stat isMini stat="Phyical" value={phy} />
          </Box>
        </Flex>
      )}
    </CustomCollapse>
  );
export default Season;
