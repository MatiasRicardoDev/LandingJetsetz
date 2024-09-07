import { useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FlexProps,
  Input
} from '@chakra-ui/react';

import Subscribe from '../Subscribe';

export default function SuscribeToOffer() {
  const [suscribeToOffer, setSuscribeToOffer] = useState(false);

  return (
    <Box py={4}>
      <Checkbox
        colorScheme="jaffa"
        borderColor="jaffa.400"
        my={4}
        defaultChecked={false}
        checked={suscribeToOffer}
        onChange={e => setSuscribeToOffer(e.target.checked)}>
        Get Exclusive Travel Offers By Email
      </Checkbox>

      {suscribeToOffer && <Subscribe />}
    </Box>
  );
}
