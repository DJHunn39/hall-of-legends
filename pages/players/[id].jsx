import getAllLegends from '../../database/getAllLegends';
import getAllIds from '../../database/getAllIds';
import { Flex, Box, Image, Text } from 'rebass';
import { useRouter } from 'next/router';
import LegendInfo from '../../components/LegendInfo/LegendInfo';

const HallOfLegends = ({ legends }) => {
  const router = useRouter();
  const { id } = router.query;
  const parsedLegends = JSON.parse(legends);
  const legend =
    parsedLegends.filter((legend) => legend._id === id)[0] || legends[0];

  const realPicUrl = legend.general.pictureUrl;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      alignDirection="center"
      width={[1, 1, 1, 1]}
    >
      <Flex flexDirection={['column', 'row']} width={[1, 1, 1, 1]}>
        <Box p={3} width={[1, 1, 1 / 2, 1 / 2]}>
          <Image
            src={realPicUrl}
            sx={{
              objectFit: 'cover',
              height: ['250px', '300px', '400px', '500px'],
              animationName: (theme) => theme.animations.fadeIn[0],
              animationTimingFunction: 'ease-in',
              animationDuration: '500ms',
            }}
          />
        </Box>
        <Box p={[1, 3]} width={[1, 1, 1 / 2, 1 / 2]}>
          <LegendInfo legend={legend} />
        </Box>
      </Flex>
      <Box
        pb={2}
        sx={{
          animationName: (theme) => theme.animations.fadeIn[2],
          animationTimingFunction: 'ease-in',
          animationDuration: '1000ms',
        }}
      >
        <Text fontSize={[1, 1, 2, 3]} maxWidth={['100%', '100%', '75%', '75%']}>
          {legend.general.mainDesc.split('\\n').map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Text>
      </Box>
    </Flex>
  );
};

export async function getStaticPaths() {
  const data = await getAllIds();

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: data, fallback: false };
}

export async function getStaticProps() {
  const data = await getAllLegends();
  const legends = JSON.stringify(data);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      legends,
    },
  };
}

export default HallOfLegends;
