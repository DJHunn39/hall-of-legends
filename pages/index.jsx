/** @jsx jsx */
import getAllLegends from '../database/getAllLegends';
import { useState } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import { Flex, Box, Image, Text } from 'rebass';
import { Label, Checkbox } from '@rebass/forms';
import LegendListEntry from '../components/LegendListEntry/LegendListEntry';

const KEYS_TO_FILTER = ['general.fullName'];

const POSITIONS = [
  'GK',
  'CB',
  'LB',
  'RB',
  'CDM',
  'CM',
  'CAM',
  'LM',
  'LW',
  'RM',
  'RW',
  'CF',
  'ST',
];

const createFilterByFacets = (facets) => {
  return (value) => {
    let nationMatch = true,
      positionMatch = true;

    if (facets.position || facets.nation) {
      if (facets.nation && value.general.nation !== facets.nation) {
        nationMatch = false;
      }
      if (
        facets.position.length > 0 &&
        !facets.position.reduce(
          (acc, curr) => (acc ? acc : value.general.position.includes(curr)),
          false,
        )
      ) {
        positionMatch = false;
      }
    }
    return nationMatch && positionMatch;
  };
};

const Home = ({ legends }) => {
  const parsedLegends = JSON.parse(legends);

  const [searchTerm, setSearchTerm] = useState('');
  const [facets, setFacets] = useState({
    nation: '',
    position: [],
  });

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  const updatePosition = ({ target: { id, checked } }) => {
    const positionIndex = facets.position.indexOf(id);
    const newPositions = facets.position;

    if (checked && positionIndex === -1) {
      newPositions.push(id);
    } else {
      newPositions.splice(positionIndex, 1);
    }

    setFacets({
      ...facets,
      position: newPositions,
    });
  };

  const filteredLegends = parsedLegends
    .filter(createFilterByFacets(facets))
    .filter(createFilter(searchTerm, KEYS_TO_FILTER));

  return (
    <div className="container">
      <Head>
        <title>Home - The Hall of Legends</title>
      </Head>
      <main>
        <Box flexGrow={2} p={3} width={1}>
          <h1>
            <Image src="/HallOfLegendsLogoAlt.png" alt="The Hall of Legends" />
          </h1>
        </Box>
        <Flex flexDirection={['column', 'row']}>
          <Flex flexDirection="column" width={[1, 1, 1 / 4, 1 / 4]}>
            <SearchInput
              className="search-input"
              onChange={searchUpdated}
              sx={{
                '.search-input': {
                  background: 'blue',
                },
              }}
            />
            <Text>Position</Text>
            {POSITIONS.map((position, index) => (
              <Label key={`position-check-${index}`} p={2}>
                <Checkbox
                  key={`position-${index}`}
                  id={position}
                  name={position}
                  value={position}
                  onChange={updatePosition}
                  color="white"
                  sx={{
                    'input:checked ~ &': {
                      color: 'white',
                    },
                    'input:focus ~ &': {
                      color: 'white',
                      bg: 'rgba(255, 255, 255, 0.5)',
                    },
                    'input:hover ~ &': {
                      color: 'black',
                      bg: 'white',
                    },
                  }}
                />
                {position}
              </Label>
            ))}
          </Flex>
          <Flex flexDirection="column" width={[1, 1, 3 / 4, 3 / 4]}>
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
