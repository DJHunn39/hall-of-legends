/** @jsx jsx */
import getAllLegends from '../database/getAllLegends';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import NextLink from 'next/link';
import { Flex, Box, Heading, Link } from 'rebass';

const Home = ({ legends }) => {
  const parsedLegends = JSON.parse(legends);
  return (
    <div className="container">
      <Head>
        <title>Home - The Hall of Legends</title>
      </Head>
      <main>
        <Flex flexDirection="column" width={[1, 1, 1, 1]}>
          <Box flexGrow={2} p={3} width={1}>
            <Heading fontSize={[5, 6, 7]}>The Hall of Legends</Heading>
          </Box>
          <Box p={3} width={1}>
            {parsedLegends.map((legend) => (
              <NextLink
                key={legend._id}
                href="/players/[id]"
                as={`/players/${legend._id}`}
                passHref
              >
                <Link
                  mx={3}
                  fontSize={[1, 2, 3]}
                  fontWeight="bold"
                  variant="nav"
                  sx={{
                    transition: 'all 0.1s linear',
                  }}
                >
                  {legend.general.fullName}
                </Link>
              </NextLink>
            ))}
          </Box>
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
