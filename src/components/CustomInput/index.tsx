import React from 'react';

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputProps
} from '@chakra-ui/react';

interface Props extends InputProps {
  icon: any;
  label: string;
  placeholder: string;
  value: any;
}

export default function CustomInput({
  icon,
  label,
  placeholder,
  value,
  ...rest
}: Props) {
  return (
    <FormControl>
      <FormLabel mb={2}>{label}</FormLabel>

      <Flex
        alignItems="center"
        border="1px solid #c7c7c7"
        p={2}
        background="white">
        <Icon as={icon} size={24} />
        <Box width="100%" ml={2}>
          <Box border="none">
            <Input
              _active={{ border: 'none' }}
              _focus={{ border: 'none', boxShadow: 'none' }}
              border="none"
              height="30px"
              outline="0"
              p={0}
              placeholder={placeholder}
              value={value}
              {...rest}
            />
          </Box>
        </Box>
      </Flex>
    </FormControl>
  );
}
