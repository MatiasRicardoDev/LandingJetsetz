import { Box, UseRadioProps, useRadio } from '@chakra-ui/react';

export default function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'jaffa.500',
          color: 'white',
          borderColor: 'jaffa.500'
        }}
        _focus={{
          boxShadow: 'none'
        }}
        px={2}
        py={1}>
        {props.children}
      </Box>
    </Box>
  );
}
