import { Flex } from 'rebass';
import LegendGeneral from './LegendGeneral/LegendGeneral';
import LegendStats from '../LegendStats/LegendStats';

const LegendInfo = ({ legend }) => (
  <Flex
    px={3}
    flexDirection="column"
    width={[1, 1, 1, 1]}
    sx={{
      animationName: (theme) => theme.animations.fadeIn[1],
      animationTimingFunction: 'ease-in',
      animationDuration: '1000ms',
    }}
  >
    <LegendGeneral
      general={legend.general}
      club={legend.club}
      cards={legend.seasons.length}
    />
    <LegendStats seasons={legend.seasons} />
  </Flex>
);

export default LegendInfo;
