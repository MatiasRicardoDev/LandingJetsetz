import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

import { sizes } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';

const Alert = defineStyleConfig({
  baseStyle: {
    color: 'white'
  }
});

export const theme = extendTheme({
  colors,
  fonts,
  sizes,
  components: {
    /** Customize Chakra UI Components */

    Alert
  }
});
