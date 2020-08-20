/** @jsx jsx */
import getAllLegends from '../database/getAllLegends';
import { useState, useEffect } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Box, Image, Text, Heading, Button } from 'rebass';
import LegendListEntry from '../components/LegendListEntry/LegendListEntry';
import CustomCollapse from '../components/CustomCollapse/CustomCollapse';
import CustomCheckbox from '../components/CustomCheckbox/CustomCheckbox';
import CardGrid from '../components/CardGrid/CardGrid';
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
  '2020',
];

const checkSeason = ({ seasons }, season) =>
  seasons.reduce(
    (acc, curr) =>
      acc ? acc : season === curr.year || season.slice(2) === curr.year,
    false,
  );

const getFacetTriggerString = (facetName, facets) => {
  const facet = facetName.toLowerCase();

  return `${facetName}${
    facets[facet].length > 0 ? ' (' + facets[facet].join(', ') + ')' : ''
  }`;
};

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
          (acc, curr) => (acc ? acc : value.general.position.includes(curr)),
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

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [facets, setFacets] = useState({
    nation: [],
    position: [],
    club: '',
    season: [],
  });

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  const updateClub = (club) => () => {
    if (facets.club !== club) {
      setFacets({
        ...facets,
        club,
      });
      if (club && club !== router.query.club) {
        history.pushState(null, '', `/?club=${club}`);
        router.push(
          {
            pathname: '/',
            query: { club },
          },
          '',
          { shallow: true },
        );
      }
    }
  };

  useEffect(() => {
    const { club } = router.query;
    const queryClub = club ? (club !== HUNNSNAL ? BORUSSIA : HUNNSNAL) : '';
    if (queryClub) {
      updateClub(queryClub)();
    } else if (!window.location.search) {
      history.pushState(null, '', `/?club=${HUNNSNAL}`);
      router.push(
        {
          pathname: '/',
          query: { club: HUNNSNAL },
        },
        '',
        { shallow: true },
      );
    }
  }, [router.query.club]);

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
    <>
      <Head>
        <title>Home - The Hall of Legends</title>
      </Head>
      <main
        sx={{
          paddingBottom: '200px',
        }}
      >
        <Box flexGrow={2} px={3} pt={[1, 2, 3, 3]} pb={1} width={1}>
          <h1>
            <Image src="/HallOfLegendsLogoAlt.png" alt="The Hall of Legends" />
          </h1>
        </Box>
        <Box m="auto" mb={3} width={[1, 1, 3 / 4, 3 / 4]}>
          <Text mb={3} fontSize={1}>
            The Hall of Legends is the hallowed home for all FIFA Ultimate Team
            legends, old and new. To become a Legend, a player can do one or
            many things. Score lots of goals. Turn up in the biggest of moments.
            Attain a funny nickname. Each of these paths to legendary status as
            as valid as any other, and all of the legends listed here have truly
            earned their place. Feel free to browse the inventory of incredible
            players, and enjoy some enthralling, entertaining, and thoroughly
            pointless stories of football majesty.
          </Text>
          <Text fontSize={1}>Welcome to The Hall of Legends.</Text>
        </Box>
        <Flex flexDirection={['column', 'column', 'row', 'row']}>
          <Flex
            flexDirection="column"
            pb="3"
            width={[1, 1, 1 / 4, 1 / 4]}
            sx={{
              position: ['auto', 'auto', 'sticky', 'sticky'],
              alignSelf: ['auto', 'auto', 'flex-start', 'flex-start'],
              top: ['auto', 'auto', '20px', '20px'],
            }}
          >
            <Heading
              m={[1, 2, 2, 2]}
              as="h2"
              fontSize={[2, 2, 3, 4]}
              color="text"
            >
              Filters
            </Heading>
            <Heading
              m={[1, 2, 2, 2]}
              as="h3"
              fontSize={[1, 1, 1, 2]}
              color="text"
            >
              Club
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
                    height: ['30px', '30px', '30px', '50px'],
                  }}
                  src="/hunnsnalBadge.png"
                  alt="Hunnsnal"
                />
              </Button>
              <Button
                onClick={updateClub(BORUSSIA)}
                variant={facets.club === BORUSSIA ? 'active' : 'outline'}
              >
                <Image
                  sx={{
                    height: ['30px', '30px', '30px', '50px'],
                  }}
                  src="/borussiaBadge.png"
                  alt="Borussia MunchenFlapJack"
                />
              </Button>
            </Flex>
            <Heading
              m={[1, 2, 2, 2]}
              as="h3"
              fontSize={[1, 1, 1, 2]}
              color="text"
            >
              Player name
            </Heading>
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
            <CustomCollapse
              triggerText={getFacetTriggerString('Season', facets)}
            >
              <Flex
                height={['175px', '175px', '200px', '200px']}
                flexDirection="column"
                flexWrap="wrap"
              >
                {SEASONS.map((season, index) => (
                  <Box
                    key={`season-facet-${index}`}
                    width={[1 / 3, 1 / 3, 1 / 2, 1 / 2]}
                  >
                    <CustomCheckbox
                      labelText={season}
                      onChange={updateFacet('season')}
                      index={index}
                    />
                  </Box>
                ))}
              </Flex>
            </CustomCollapse>
            <CustomCollapse
              triggerText={getFacetTriggerString('Position', facets)}
            >
              <Flex
                height={['175px', '175px', '300px', '300px']}
                flexDirection="column"
                flexWrap="wrap"
              >
                {POSITIONS.map((position, index) => (
                  <Box
                    key={`position-facet-${index}`}
                    width={[1 / 3, 1 / 3, 1 / 2, 1 / 2]}
                  >
                    <CustomCheckbox
                      labelText={position}
                      onChange={updateFacet('position')}
                      index={index}
                    />
                  </Box>
                ))}
              </Flex>
            </CustomCollapse>
            <CustomCollapse
              triggerText={getFacetTriggerString('Nation', facets)}
            >
              <div
                sx={{
                  height: '200px',
                  overflowY: 'scroll',
                }}
              >
                <Flex flexDirection="column">
                  {nations.map((nation, index) => (
                    <CustomCheckbox
                      checkboxProps={{
                        checked: facets.nation.includes(nation),
                      }}
                      key={`nation-facet-${index}`}
                      labelText={nation}
                      onChange={updateFacet('nation')}
                      index={index}
                    />
                  ))}
                </Flex>
              </div>
            </CustomCollapse>
          </Flex>
          <CardGrid width={[1, 1, 3 / 4, 4 / 5]}>
            {filteredLegends.map((legend, index) => (
              <LegendListEntry key={legend._id} legend={legend} />
            ))}
          </CardGrid>
        </Flex>
      </main>
    </>
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
