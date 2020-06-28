/** @jsx jsx */
import getAllLegends from '../database/getAllLegends';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import { Flex, Box, Heading, Text } from 'rebass';
import LegendListEntry from '../components/LegendListEntry/LegendListEntry';

const Home = ({ legends }) => {
  const parsedLegends = JSON.parse(legends);
  return (
    <div className="container">
      <Head>
        <title>Home - The Hall of Legends</title>
      </Head>
      <main>
        <Box flexGrow={2} p={3} width={1}>
          <Heading fontSize={[5, 6, 7]}>The Hall of Legends</Heading>
        </Box>

        <Flex flexDirection="column" width={[1, 1, 1, 1]}>
          <Flex
            my={3}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            width={[1, 1, 1, 1]}
          >
            <Text mx={3} width={1 / 3} fontSize={[1, 2, 3]} fontWeight="bold">
              Name
            </Text>
            <Text fontSize={[1, 2, 3]} mx={3} width={1 / 8}>
              Position
            </Text>
            <Text fontSize={[1, 2, 3]} mx={3} width={1 / 4}>
              Nation
            </Text>
          </Flex>
          <ul>
            {parsedLegends.map((legend) => (
              <li
                key={legend._id}
                sx={{
                  listStyle: 'none',
                }}
              >
                <LegendListEntry legend={legend} />
              </li>
            ))}
          </ul>
        </Flex>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getAllLegends();
  const legends = JSON.stringify(data);

  // By returning { props: legends }, the Homepage component
  // will receive `legends` as a prop at build time
  return {
    props: {
      legends,
    },
  };
}

export default Home;
