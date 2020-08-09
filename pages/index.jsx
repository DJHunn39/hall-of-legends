/** @jsx jsx */
import getAllLegends from '../database/getAllLegends';
import { useState } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import { Flex, Box, Image, Text, Heading, Button } from 'rebass';
import LegendListEntry from '../components/LegendListEntry/LegendListEntry';
import CustomCollapse from '../components/CustomCollapse/CustomCollapse';
import CustomCheckbox from '../components/CustomCheckbox/CustomCheckbox';
import { ultimateTeams } from '../constants/futConstants';

const KEYS_TO_FILTER = ['general.fullName'];

const { HUNNSNAL, BORUSSIA } = ultimateTeams;

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

const SEASONS = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
];

const checkSeason = ({ seasons }, season) =>
  seasons.reduce((acc, curr) => (acc ? acc : season === curr.year), false);

const createFilterByFacets = (facets) => {
  return (value) => {
    let nationMatch = true,
      positionMatch = true,
      clubMatch = true,
      seasonMatch = true;

    if (value.club !== facets.club) {
      clubMatch = false;
    }
    if (facets.position || facets.nation) {
      if (
        facets.nation.length > 0 &&
        !facets.nation.reduce(
          (acc, curr) => (acc ? acc : value.general.nation === curr),
          false,
        )
      ) {
        nationMatch = false;
      }
      if (
        facets.position.length > 0 &&
        !facets.position.reduce(
          (acc, curr) => (acc ? acc : value.general.position === curr),
          false,
        )
      ) {
        positionMatch = false;
      }
    }
    if (facets.season) {
      if (
        facets.season.length > 0 &&
        !facets.season.reduce(
          (acc, curr) => (acc ? acc : checkSeason(value, curr)),
          false,
        )
      ) {
        seasonMatch = false;
      }
    }
    return nationMatch && positionMatch && clubMatch && seasonMatch;
  };
};

const Home = ({ legends }) => {
  const parsedLegends = JSON.parse(legends);

  const [searchTerm, setSearchTerm] = useState('');
  const [facets, setFacets] = useState({
    nation: [],
    position: [],
    club: HUNNSNAL,
    season: [],
  });

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  const updateClub = (club) => () =>
    setFacets({
      ...facets,
      club,
    });

  const updateFacet = (facet) => ({ target: { id, checked } }) => {
    const facetIndex = facets[facet].indexOf(id);
    const newValues = facets[facet];

    if (checked && facetIndex === -1) {
      newValues.push(id);
    } else {
      newValues.splice(facetIndex, 1);
    }

    setFacets({
      ...facets,
      [facet]: newValues,
    });
  };

  const filteredLegends = parsedLegends
    .filter(createFilterByFacets(facets))
    .filter(createFilter(searchTerm, KEYS_TO_FILTER))
    .sort((a, b) => a.clubRank - b.clubRank);

  const nations = filteredLegends
    .reduce((acc, curr) => {
      if (acc.indexOf(curr.general.nation) < 0) {
        acc.push(curr.general.nation);
      }
      return acc;
    }, [])
    .sort();

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
            <Heading
              m={[1, 2, 2, 2]}
              as="h2"
              fontSize={[2, 2, 3, 4]}
              color="text"
            >
              Filters
            </Heading>
            <Flex
              justifyContent="space-around"
              flexDirection="row"
              m={[1, 2, 2, 2]}
            >
              <Button
                onClick={updateClub(HUNNSNAL)}
                variant={facets.club === HUNNSNAL ? 'active' : 'outline'}
              >
                <Image
                  sx={{
                    maxHeight: ['30px', '30px', '30px', '50px'],
                  }}
                  src="/hunnsnalBadge.png"
                  alt="Hunnsnal"
                />
              </Button>
              <Button
                onClick={updateClub(BORUSSIA)}
                variant={facets.club !== HUNNSNAL ? 'active' : 'outline'}
              >
                <Image
                  sx={{
                    maxHeight: ['30px', '30px', '30px', '50px'],
                  }}
                  src="/borussiaBadge.png"
                  alt="Borussia Munchenflapjack"
                />
              </Button>
            </Flex>
            <Box m={[1, 2, 2, 2]}>
              <SearchInput
                className="search-input"
                onChange={searchUpdated}
                sx={{
                  '.search-input': {
                    background: 'blue',
                  },
                }}
              />
            </Box>
            <CustomCollapse triggerText="Season">
              <Flex maxHeight="200px" flexDirection="column" flexWrap="wrap">
                {SEASONS.map((season, index) => (
                  <Box width="1 / 3">
                    <CustomCheckbox
                      labelText={season}
                      onChange={updateFacet('season')}
                      index={index}
                    />
                  </Box>
                ))}
              </Flex>
            </CustomCollapse>
            <CustomCollapse triggerText="Position">
              <Flex maxHeight="200px" flexDirection="column" flexWrap="wrap">
                {POSITIONS.map((position, index) => (
                  <Box width="1 / 3">
                    <CustomCheckbox
                      labelText={position}
                      onChange={updateFacet('position')}
                      index={index}
                    />
                  </Box>
                ))}
              </Flex>
            </CustomCollapse>
            <CustomCollapse triggerText="Nation">
              <Flex maxHeight="200px" overflowY="scroll" flexDirection="column">
                {nations.map((nation, index) => (
                  <CustomCheckbox
                    labelText={nation}
                    onChange={updateFacet('nation')}
                    index={index}
                  />
                ))}
              </Flex>
            </CustomCollapse>
          </Flex>
          <Flex flexDirection="column" width={[1, 1, 3 / 4, 3 / 4]}>
            <Flex
              m={1}
              flexDirection="row"
              alignItems="center"
              width={[1, 1, 1, 1]}
            >
              <Text fontSize={[1, 2, 3]} width={1 / 8} fontWeight="bold">
                Rank
              </Text>
              <Text fontSize={[1, 2, 3]} width={1 / 3} fontWeight="bold">
                Name
              </Text>
              <Text fontSize={[1, 2, 3]} width={1 / 5} fontWeight="bold">
                Position
              </Text>
              <Text fontSize={[1, 2, 3]} width={1 / 5} fontWeight="bold">
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
