/** @jsx jsx */
import getAllLegends from '../database/getAllLegends';
import { useState } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import { Flex, Box, Image, Text } from 'rebass';
import LegendListEntry from '../components/LegendListEntry/LegendListEntry';

const KEYS_TO_FILTER = ['general.fullName'];

const Home = ({ legends }) => {
  const parsedLegends = JSON.parse(legends);

  const [searchTerm, setSearchTerm] = useState('');

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  const filteredLegends = parsedLegends.filter(
    createFilter(searchTerm, KEYS_TO_FILTER),
  );

  return (
    <div className="container">
      <Head>
        <title>Home - The Hall of Legends</title>
      </Head>
      <main>
        <Box flexGrow={2} p={3} width={1}>
          <h1>
            <Image
              src="/HallOfLegendsLogoAlt.png"
              alt="The Hall of Legends"
              sx={
                {
                  // objectFit: 'cover',
                  // animationName: (theme) => theme.animations.fadeIn[0],
                  // animationTimingFunction: 'ease-in',
                  // animationDuration: '500ms',
                }
              }
            />
          </h1>
        </Box>
        <Flex flexDirection="column" width={[1, 1, 1, 1]}>
          <SearchInput
            className="search-input"
            onChange={searchUpdated}
            sx={{
              '.search-input': {
                background: 'blue',
              },
            }}
          />
          <Flex
            m={1}
            flexDirection="row"
            alignItems="center"
            width={[1, 1, 1, 1]}
          >
            <Text width={1 / 3} fontSize={[1, 2, 3]} fontWeight="bold">
              Name
            </Text>
            <Text fontSize={[1, 2, 3]} width={1 / 8}>
              Position
            </Text>
            <Text fontSize={[1, 2, 3]} width={1 / 4}>
              Nation
            </Text>
          </Flex>
          {filteredLegends.map((legend, index) => (
            <LegendListEntry
              key={legend._id}
              legend={legend}
              bg={
                index % 2 === 0
                  ? 'rgba(209, 203, 203, 0.4)'
                  : 'rgba(209, 203, 203, 0)'
              }
            />
          ))}
        </Flex>
      </main>
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
