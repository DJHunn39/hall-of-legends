import { Flex, Box, Text, Image, Link } from 'rebass';
import NextLink from 'next/link';
import countryCodes from '../../constants/countryCodes.js';

const LegendListEntry = ({ legend }) => {
  const {
    _id,
    general: { fullName, nation, position },
  } = legend;

  const localFlags = ['england', 'wales', 'scotland', 'northernireland'];

  const flagSource = countryCodes[nation]
    ? `https://www.countryflags.io/${countryCodes[nation]}/shiny/24.png`
    : localFlags.includes(nation.toLowerCase())
    ? `/${nation.toLowerCase()}.png`
    : '/unitednations.png';

  return (
    <Flex
      my={3}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      width={[1, 1, 1, 1]}
    >
      <Box mx={3} width={1 / 3}>
        <NextLink href="/players/[id]" as={`/players/${_id}`} passHref>
          <Link
            fontSize={[1, 2, 3]}
            fontWeight="bold"
            variant="nav"
            sx={{
              transition: 'all 0.1s linear',
            }}
          >
            {fullName}
          </Link>
        </NextLink>
      </Box>
      <Text fontSize={[1, 2, 3]} mx={3} width={1 / 8}>
        {position}
      </Text>
      <Flex flexDirection="row" alignItems="center" mx={3} width={1 / 4}>
        <Image src={flagSource} mx={1} />
        <Text fontSize={[1, 2, 3]}>{nation}</Text>
      </Flex>
    </Flex>
  );
};

export default LegendListEntry;
