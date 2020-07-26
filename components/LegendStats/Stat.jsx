import { Flex, Text, Image } from 'rebass';

const Stat = ({ stat, value, image, card = '' }) => (
  <Flex flexDirection="column" width={[1, 1, 1, 1]} textAlign="center">
    {image && <Image src={`/${image}Icon.png`} width={[20, 20, 20, 40]} />}
    <Text fontSize={[3, 3, 4, 5]} fontWeight="bold">
      {value}
    </Text>
    <Text fontSize={[1, 1, 1, 2]}>{stat}</Text>
    {card && <Text fontSize={[1, 1, 1, 1]}>{card}</Text>}
  </Flex>
);

export default Stat;
