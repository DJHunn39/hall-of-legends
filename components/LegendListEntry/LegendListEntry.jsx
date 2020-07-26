import { Flex, Box, Text, Image, Link } from 'rebass';
import NextLink from 'next/link';
import countryCodes from '../../constants/countryCodes.js';

const LegendListEntry = ({ legend, bg }) => {
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
    <NextLink href="/players/[id]" as={`/players/${_id}`} passHref>
      <Link
        p={0}
        fontSize={[1, 2, 3]}
        variant="block"
        sx={{
          transition: 'all 0.2s linear',
        }}
      >
        <Flex
          p={1}
          flexDirection="row"
          alignItems="center"
          width={[1, 1, 1, 1]}
          bg={bg}
        >
          <Text fontSize={[1, 2, 3]} width={1 / 3}>
            {fullName}
          </Text>
          <Text fontSize={[1, 2, 3]} width={1 / 8}>
            {position}
          </Text>
          <Flex flexDirection="row" alignItems="center" width={1 / 4}>
            <Image src={flagSource} mr={1} />
            <Text fontSize={[1, 2, 3]}>{nation}</Text>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default LegendListEntry;
