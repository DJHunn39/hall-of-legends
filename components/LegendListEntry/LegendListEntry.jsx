import { Flex, Text, Link } from 'rebass';
import NextLink from 'next/link';
import Nation from '../Nation/Nation';

const LegendListEntry = ({ legend, bg }) => {
  const {
    _id,
    general: { fullName, nation, position },
  } = legend;

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
          <Text fontSize={[1, 2, 3]} width={1 / 5}>
            {position}
          </Text>
          <Flex flexDirection="row" alignItems="center" width={1 / 5}>
            <Nation nation={nation} />
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default LegendListEntry;
