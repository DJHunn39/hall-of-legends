import { Flex, Text, Image } from 'rebass';

const Stat = ({ isMini, stat, value, image, card = '' }) => {
  const { fontSize, width } = isMini
    ? { fontSize: [2, 2, 3, 3], width: [10, 10, 10, 20] }
    : { fontSize: [3, 3, 4, 5], width: [20, 20, 20, 40] };
  return (
    <Flex flexDirection="column" width={[1, 1, 1, 1]} textAlign="center">
      {image && <Image src={`/${image}Icon.png`} width={width} />}
      <Text fontSize={fontSize} fontWeight="bold">
        {value}
      </Text>
      <Text fontSize={[1, 1, 1, 2]}>{stat}</Text>
      {card && <Text fontSize={[1, 1, 1, 1]}>{card}</Text>}
    </Flex>
  );
};

export default Stat;
