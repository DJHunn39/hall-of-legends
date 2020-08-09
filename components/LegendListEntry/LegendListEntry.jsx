import { Flex, Text, Link, Card, Image, Heading } from 'rebass';
import NextLink from 'next/link';
import Nation from '../Nation/Nation';

const LegendListEntry = ({ legend }) => {
  const {
    _id,
    clubRank,
    general: { fullName, nation, position, pictureUrl },
  } = legend;

  return (
    <Card variant="block">
      <NextLink href="/players/[id]" as={`/players/${_id}`} passHref>
        <Link p={0} fontSize={[1, 2, 3]} variant="blockLink">
          <Image src={pictureUrl} />
          <Heading>
            {clubRank}. {fullName}
          </Heading>
          <Flex p={1} flexDirection="column" width={[1, 1, 1, 1]}>
            <Text fontSize={[1, 2, 3]}>{position}</Text>
            <Flex flexDirection="row" alignItems="flex-start">
              <Nation nation={nation} />
            </Flex>
          </Flex>
        </Link>
      </NextLink>
    </Card>
  );
};

export default LegendListEntry;
