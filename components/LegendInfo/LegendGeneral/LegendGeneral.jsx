import { Flex, Box, Text, Image } from 'rebass';
import { ultimateTeams } from '../../../constants/futConstants';
import countryCodes from '../../../constants/countryCodes.js';

const { HUNNSNAL } = ultimateTeams;

const localFlags = ['england', 'wales', 'scotland', 'northernireland'];

const LegendGeneral = ({ general, club, cards }) => {
  const { fullName, nation, position, knownAs } = general;

  const crestSource =
    club === HUNNSNAL ? '/hunnsnalBadge.png' : '/borussiaBadge.png';

  const flagSource = countryCodes[nation]
    ? `https://www.countryflags.io/${countryCodes[nation]}/shiny/24.png`
    : localFlags.includes(nation.toLowerCase())
    ? `/${nation.toLowerCase()}.png`
    : '/unitednations.png';

  return (
    <Flex py={1} flexDirection="row" alignItems="center" width={[1, 1, 1, 1]}>
      <Box width={1 / 5}>
        <Image src={crestSource} />
      </Box>
      <Box ml={4} py={1} width={4 / 5}>
        <Text fontSize={[2, 4, 6]} fontWeight="bold">
          {knownAs ? knownAs : fullName}
        </Text>
        <Flex
          py={1}
          alignItems="center"
          flexDirection="row"
          width={[1, 1, 1, 1]}
        >
          <Text
            display="inline"
            ml={1}
            mr={3}
            fontSize={[1, 2, 3]}
            fontWeight="bold"
          >
            {cards} {cards > 1 ? 'cards' : 'card'}
          </Text>
          <Text
            display="inline"
            ml={1}
            mr={3}
            fontSize={[1, 2, 3]}
            fontWeight="bold"
          >
            {position}
          </Text>
          <Image mx={2} src={flagSource} />
          <Text fontSize={[1, 2, 3]} fontWeight="bold">
            {nation}
          </Text>
          {knownAs && (
            <Text mx={2} fontSize={[1, 2, 3]} fontWeight="bold">
              {fullName}
            </Text>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default LegendGeneral;
