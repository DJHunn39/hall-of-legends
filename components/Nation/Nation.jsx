/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image, Text } from 'rebass';

import countryCodes from '../../constants/countryCodes.js';

const localFlags = ['england', 'wales', 'scotland', 'northernireland'];

const Nation = ({ nation }) => {
  const flagSource = countryCodes[nation]
    ? `https://www.countryflags.io/${countryCodes[nation]}/shiny/24.png`
    : localFlags.includes(nation.replace(/\s/g, '').toLowerCase())
    ? `/${nation.replace(/\s/g, '').toLowerCase()}.png`
    : '/unitednations.png';

  return (
    <>
      <Image src={flagSource} mr={1} />
      <Text
        fontSize={[1, 2, 3]}
        sx={{
          textOverflow: 'ellipsis',
        }}
      >
        {nation}
      </Text>
    </>
  );
};

export default Nation;
