import getAllLegends from '../../database/getAllLegends';
import getAllIds from '../../database/getAllIds';
import { Flex, Box, Image, Text, Heading } from 'rebass';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LegendInfo from '../../components/LegendInfo/LegendInfo';
import Hattricks from '../../components/Hattricks/Hattricks';

const HallOfLegends = ({ legends }) => {
  const router = useRouter();
  const { id } = router.query;
  const parsedLegends = JSON.parse(legends);
  const legend =
    parsedLegends.filter((legend) => legend._id === id)[0] || legends[0];

  const realPicUrl = legend.general.pictureUrl;

  return (
    <>
      <Head>
        <title>{legend.general.fullName} - The Hall of Legends</title>
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        alignDirection="center"
        width={[1, 1, 1, 1]}
      >
        <Flex
          alignContent="center"
          flexDirection={['column', 'row']}
          width={[1, 1, 1, 1]}
        >
          <Image
            p={3}
            width={[1, 1, 1 / 2, 1 / 2]}
            src={realPicUrl}
            mx="auto"
            sx={{
              height: ['250px', '300px', '400px', '500px'],
              maxWidth: ['250px', '300px', '400px', '500px'],
              animationName: (theme) => theme.animations.fadeIn[0],
              animationTimingFunction: 'ease-in',
              animationDuration: '500ms',
            }}
          />
          <Box p={[1, 3]} width={[1, 1, 1 / 2, 1 / 2]}>
            <LegendInfo legend={legend} />
          </Box>
        </Flex>
        <Box
          mb={2}
          width={['100%', '100%', '75%', '75%']}
          sx={{
            animationName: (theme) => theme.animations.fadeIn[2],
            animationTimingFunction: 'ease-in',
            animationDuration: '1000ms',
          }}
        >
          <Heading
            my={[1, 2, 2, 2]}
            as="h2"
            fontSize={[2, 2, 3, 4]}
            color="text"
          >
            Bio
          </Heading>
          <Text
            fontSize={[1, 1, 2, 3]}
            // maxWidth={['100%', '100%', '75%', '75%']}
          >
            {legend.general.mainDesc.split('\\n').map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </Text>
        </Box>
        <Box
          mb={2}
          width={['100%', '100%', '75%', '75%']}
          sx={{
            animationName: (theme) => theme.animations.fadeIn[2],
            animationTimingFunction: 'ease-in',
            animationDuration: '1000ms',
          }}
        >
          {legend.highlights.hattricks[0].name && (
            <>
              <Heading
                my={[1, 2, 2, 2]}
                as="h2"
                fontSize={[2, 2, 3, 4]}
                color="text"
              >
                Hat-tricks
              </Heading>
              <Hattricks hattricks={legend.highlights.hattricks} />
            </>
          )}
        </Box>
      </Flex>
    </>
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
