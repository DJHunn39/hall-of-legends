/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Label, Checkbox } from '@rebass/forms';

const CustomCheckbox = ({ labelText, onChange, index }) => (
  <Label key={`${labelText}-check-${index}`} p={[1, 1, 2, 2]}>
    <Checkbox
      key={`position-${index}`}
      id={labelText}
      name={labelText}
      value={labelText}
      onChange={onChange}
      color="white"
      sx={{
        textOverflow: 'ellipsis',
        transition: 'all 0.1s linear',
        'input:checked ~ &': {
          color: 'white',
        },
        'input:focus ~ &': {
          color: 'white',
          bg: 'rgba(255, 255, 255, 0.5)',
          transition: 'all 0.1s linear',
        },
        'input:hover ~ &': {
          color: 'black',
          bg: 'white',
        },
      }}
    />
    {labelText}
  </Label>
);

export default CustomCheckbox;
