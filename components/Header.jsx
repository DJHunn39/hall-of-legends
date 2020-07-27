/** @jsx jsx */
import { jsx } from 'theme-ui';
import NextLink from 'next/link';
import { Flex, Box, Image, Link } from 'rebass';

const Header = () => (
  <header>
    <Flex
      width={[1, 1, 1, 1]}
      px={2}
      py={1}
      color="white"
      bg="#282727"
      alignItems="center"
      mb={3}
    >
      <NextLink href="/" passHref>
        <Link
          p={2}
          variant="header"
          sx={{
            transition: 'all 0.1s linear',
          }}
        >
          <Image
            src="/HallOfLegendsLogo.png"
            alt="The Hall of Legends"
            sx={{
              height: ['30px', '30px', '40px', '50px'],
            }}
          />
        </Link>
      </NextLink>
      <Box mx="auto" />
    </Flex>
  </header>
);

export default Header;
