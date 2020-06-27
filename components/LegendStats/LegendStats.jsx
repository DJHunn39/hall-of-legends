import { Flex, Box } from 'rebass';
import Stat from './Stat';

const parseToBaseTen = (string) => parseInt(string, 10);

const round = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

const getTotalStats = (seasons) => {
  const sumKeys = ['games', 'goals', 'assists'];

  const initialTotalStats = {
    best: {
      games: { card: 'N/A', value: 0 },
      goals: { card: 'N/A', value: 0 },
      assists: { card: 'N/A', value: 0 },
      goalRatio: { card: 'N/A', value: 0 },
    },
    games: 'N/A',
    goals: 'N/A',
    assists: 'N/A',
  };

  const totalStats = seasons.reduce((acc, curr) => {
    if (curr.year) {
      const card = `${curr.year}, OVR ${curr.data.overall}`;

      const goalRatio =
        curr.data.games !== ''
          ? round(
              parseToBaseTen(curr.data.goals) / parseToBaseTen(curr.data.games),
              2,
            )
          : 0;

      if (acc.best.goalRatio.value < goalRatio) {
        acc.best.goalRatio = {
          card,
          value: goalRatio,
        };
      }

      sumKeys.forEach((key) => {
        if (curr.data[key]) {
          const valueAsNum = parseToBaseTen(curr.data[key]);
          if (acc[key] === 'N/A' || acc.best[key].value < valueAsNum) {
            const newBest = {};
            newBest.card = card;
            newBest.value = valueAsNum;

            acc.best[key] = newBest;
          }
          acc[key] = acc[key] !== 'N/A' ? acc[key] + valueAsNum : valueAsNum;
        }
      });
    }

    return acc;
  }, initialTotalStats);

  return totalStats;
};

const LegendStats = ({ seasons }) => {
  const { best, games, goals, assists } = getTotalStats(seasons);

  const {
    goals: bestGoals,
    games: bestGames,
    assists: bestAssists,
    goalRatio: bestGoalRatio,
  } = best;

  return (
    <Flex py={1} flexDirection="column" width={[1, 1, 1, 1]}>
      <Box
        sx={{
          display: 'grid',
          gridGap: 2,
          gridTemplateColumns: 'repeat(12, minmax(10px, 1fr))',
          gridTemplateRows: 'repeat(2, minmax(30px, 1fr))',
        }}
      >
        <Box
          p={3}
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: 'span 4',
            gridRowStart: 1,
          }}
        >
          <Stat stat="Games" value={games} image="pitch" />
        </Box>
        <Box
          p={3}
          sx={{
            gridColumnStart: 5,
            gridColumnEnd: 'span 4',
            gridRowStart: 1,
          }}
        >
          <Stat stat="Goals" value={goals} image="football" />
        </Box>
        <Box
          p={3}
          sx={{
            gridColumnStart: 9,
            gridColumnEnd: 'span 4',
            gridRowStart: 1,
          }}
        >
          <Stat stat="Assists" value={assists} image="assist" />
        </Box>
        <Box
          p={3}
          sx={{
            gridColumnStart: 1,
            gridColumnEnd: 'span 3',
            gridRowStart: 2,
          }}
        >
          <Stat
            stat="Best games"
            value={bestGames.value}
            card={bestGames.card}
          />
        </Box>
        <Box
          p={3}
          sx={{
            gridColumnStart: 4,
            gridColumnEnd: 'span 3',
            gridRowStart: 2,
          }}
        >
          <Stat
            stat="Best goals"
            value={bestGoals.value}
            card={bestGoals.card}
          />
        </Box>
        <Box
          p={3}
          sx={{
            gridColumnStart: 7,
            gridColumnEnd: 'span 3',
            gridRowStart: 2,
          }}
        >
          <Stat
            stat="Best assists"
            value={bestAssists.value}
            card={bestAssists.card}
          />
        </Box>
        <Box
          p={3}
          sx={{
            gridColumnStart: 10,
            gridColumnEnd: 'span 3',
            gridRowStart: 2,
          }}
        >
          <Stat
            stat="Best GPG"
            value={bestGoalRatio.value}
            card={bestGoalRatio.card}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default LegendStats;
