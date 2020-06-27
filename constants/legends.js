import { leagues, ultimateTeams } from './futConstants';

const legends = [
  {
    _id: 'some-id',
    club: ultimateTeams.HUNNSNAL,
    general: {
      fullName: 'Barry Corr',
      knownAs: '',
      position: 'ST',
      nation: 'Ireland',
      mainDesc:
        'Barry Corr is the original bronze legend, and arguably the best. The big Irish beast banged them in for many years, despite a set of stats that would cause most FUT players to throw up a little in their mouth.\n\nHe represents all the best things about FUT legends - never used, random league, random nationality, inexplicably ridiculous return rate.',
      pictureUrl: '/BarryCorr1.png',
      pictureSource: '',
    },
    seasons: [
      {
        year: '12',
        data: {
          club: 'Southend United',
          league: leagues.ENG_4,
          games: '43',
          goals: '68',
          assists: '0',
          seasonDesc:
            'A fantastic season for Daddy Cool, 68 from 43 as a 62 bronze is simply incredible.',
          overall: '62',
          cardStats: {
            pac: '0',
            dri: '0',
            sho: '0',
            def: '0',
            pas: '0',
            phy: '0',
          },
        },
      },
      {
        year: '12',
        data: {
          club: 'Southend United',
          league: leagues.ENG_4,
          games: '64',
          goals: '64',
          assists: '0',
          seasonDesc:
            'A fantastic season for Daddy Cool, 68 from 43 as a 62 bronze is simply incredible.',
          overall: '90',
          cardStats: {
            pac: '0',
            dri: '0',
            sho: '0',
            def: '0',
            pas: '0',
            phy: '0',
          },
        },
      },
      {
        year: '13',
        data: {
          club: 'Southend United',
          league: leagues.ENG_4,
          games: '10',
          goals: '30',
          assists: '0',
          seasonDesc:
            'A fantastic season for Daddy Cool, 68 from 43 as a 62 bronze is simply incredible.',
          overall: '90',
          cardStats: {
            pac: '0',
            dri: '0',
            sho: '0',
            def: '0',
            pas: '0',
            phy: '0',
          },
        },
      },
    ],
    highlights: {
      clips: [
        {
          name: 'Test highlight',
          youtubeId: 's8khH0scKuw',
        },
      ],
      hattricks: [
        {
          name: 'Test hattrick',
          picUrl: 'test',
        },
      ],
    },
  },
  {
    _id: 'some-id-2',
    club: ultimateTeams.BORUSSIA,
    general: {
      fullName: 'Barry Corr',
      knownAs: '',
      position: 'ST',
      nation: 'England',
      mainDesc:
        'Barry Corr is the original bronze legend, and arguably the best. The big Irish beast banged them in for many years, despite a set of stats that would cause most FUT players to throw up a little in their mouth.\n\nHe represents all the best things about FUT legends - never used, random league, random nationality, inexplicably ridiculous return rate.',
      pictureUrl: '/BarryCorr1.png',
    },
    seasons: [
      {
        year: '12',
        data: {
          club: 'Southend United',
          league: leagues.ENG_4,
          games: '43',
          goals: '68',
          assists: '0',
          seasonDesc:
            'A fantastic season for Daddy Cool, 68 from 43 as a 62 bronze is simply incredible.',
          overall: '62',
          cardStats: {
            pac: '0',
            dri: '0',
            sho: '0',
            def: '0',
            pas: '0',
            phy: '0',
          },
        },
      },
    ],
    highlights: {
      clips: [
        {
          name: 'Test highlight',
          youtubeId: 's8khH0scKuw',
        },
      ],
      hattricks: [
        {
          name: 'Test hattrick',
          picUrl: 'test',
        },
      ],
    },
  },
];

export default legends;
