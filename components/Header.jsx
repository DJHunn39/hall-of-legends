/** @jsx jsx */
import { jsx } from 'theme-ui';
import NextLink from 'next/link';
import { Flex, Box, Heading, Link } from 'rebass';

const Header = () => (
  <header>
    <Flex
      width={[1, 1, 1, 1]}
      px={2}
      py={1}
      color="white"
      bg="black"
      alignItems="center"
      mb={3}
    >
      <Heading p={2} fontWeight="bold">
        <NextLink href="/" passHref>
          <Link
            variant="header"
            sx={{
              transition: 'all 0.1s linear',
            }}
          >
            The Hall of Legends
          </Link>
        </NextLink>
      </Heading>
      <Box mx="auto" />
    </Flex>
  </header>
);

export default Header;
