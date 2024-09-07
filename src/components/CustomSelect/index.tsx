import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Select,
  SelectProps
} from '@chakra-ui/react';

interface SelectOptions {
  value: string;
  label: string;
  selected?: boolean;
}

interface Props extends SelectProps {
  icon: any;
  label: string;
  placeholder: string;
  value: any;
  options: SelectOptions[];
}

export default function CustomSelect({
  icon,
  label,
  placeholder,
  value,
  options,
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
            <Select
              _active={{ border: 'none' }}
              _focus={{ border: 'none', boxShadow: 'none' }}
              border="none"
              focusBorderColor="none"
              height="30px"
              outline="0"
              p={0}
              placeholder={placeholder}
              value={value}
              width="100%"
              {...rest}>
              {options.map(option => (
                <option
                  key={option.value}
                  value={option.value}
                  selected={option.selected}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
      </Flex>
    </FormControl>
  );
}
