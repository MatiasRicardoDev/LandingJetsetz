import { Box } from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import './style.css';

export default function ReactDayPicker(props: any) {
  return (
    <Box position="relative">
      <DayPicker
        {...props}
        selected={props.selected}
        onSelect={props.setSelected}
      />
    </Box>
  );
}
