/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Text, Box } from 'rebass';
import Collapsible from 'react-collapsible';

const Trigger = ({ text, isOpen }) => (
  <Flex
    p={[1, 2, 2, 2]}
    flexDirection="row"
    justifyContent="space-between"
    sx={{
      border: '2px solid white',
      transition: 'all 0.1s linear',
      ':hover': {
        bg: 'white',
        color: 'black',
      },
    }}
  >
    <Text>{text}</Text>
    {isOpen ? <Text>▲</Text> : <Text>▼</Text>}
  </Flex>
);

const CustomCollapse = ({ triggerText, children }) => (
  <Box m={[1, 2, 2, 2]} mr={[2, 2, 4, 4]}>
    <Collapsible
      lazyRender={true}
      trigger={<Trigger text={triggerText} isOpen={false} />}
      triggerWhenOpen={<Trigger text={triggerText} isOpen={true} />}
    >
      {children}
    </Collapsible>
  </Box>
);

export default CustomCollapse;
