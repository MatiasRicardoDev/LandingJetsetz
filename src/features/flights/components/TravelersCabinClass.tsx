import { Fragment, useEffect, useState } from 'react';

import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useRadioGroup
} from '@chakra-ui/react';
import { FaRegMinusSquare, FaRegPlusSquare, FaUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import RadioCard from '@/components/RadioCard';

interface Props {
  handleChangeCabin: (value: string) => void;
  handleChangeAdult: (value: number) => void;
  handleChangeChild: (value: number) => void;
  isBusiness?: Boolean;
  showCabin?: boolean;
}

export default function TravelersCabinClass({
  handleChangeCabin,
  handleChangeAdult,
  handleChangeChild,
  isBusiness = false,
  showCabin = true
}: Props) {
  const [cabinClass, setCabinClass] = useState('Economy');
  const [adultValue, setAdultValue] = useState(1);
  const [childValue, setChildValue] = useState(0);
  const options = [
    'Economy',
    // 'Premium Economy',
    'Business',
    'First'
  ];

  useEffect(() => {
    if (isBusiness) {
      setCabinClass('Business');
      handleChangeCabin('Business');
    }
  }, [handleChangeCabin, isBusiness]);

  const radioFunc = (params: string) => {
    setCabinClass(params);
    handleChangeCabin(params);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'cabinClass',
    defaultValue: showCabin ? 'Economy' : '',
    onChange: radioFunc
  });

  const group = getRootProps();

  const increaseAdult = () => {
    const adult = adultValue < 6 ? adultValue + 1 : adultValue;
    setAdultValue(adult);
    handleChangeAdult(adult);
  };
  const descreaseAdult = () => {
    const adult =
      adultValue > 0 && adultValue + childValue > 1
        ? adultValue - 1
        : adultValue;
    setAdultValue(adult);
    handleChangeAdult(adult);
  };

  const increaseChild = () => {
    const child = childValue < 6 ? childValue + 1 : childValue;
    setChildValue(child);
    handleChangeChild(child);
  };
  const descreaseChild = () => {
    const child =
      childValue > 0 && adultValue + childValue > 1
        ? childValue - 1
        : childValue;
    setChildValue(child);
    handleChangeChild(child);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel mb={2}>
          {isBusiness
            ? `Travelers`
            : !showCabin
              ? `Guests`
              : `Travelers and cabin class`}
        </FormLabel>

        <Popover placement="top-end">
          <PopoverTrigger>
            <Box border="1px solid #c7c7c7" background="white" p={2}>
              <Flex alignItems="center">
                <Icon as={FaUser} size={24} />
                <Box mx={4} w="full">
                  <Flex border="none" w="full" alignItems="center">
                    <Input
                      pointerEvents="none"
                      variant="unstyled"
                      value={`${adultValue > 0 ? adultValue + ' Adults' : ''}${childValue > 0 ? ', ' + childValue + ' Child' : ''}${showCabin ? `, ${cabinClass}` : ''}`}
                      placeholder={showCabin ? '1 Adult, Economy' : '1 Adult'}
                      height="30px"
                      readOnly
                    />
                    <IoIosArrowDown />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </PopoverTrigger>
          <PopoverContent
            bg="white"
            color="text.500"
            borderRadius="0"
            borderColor="text.200">
            <PopoverCloseButton />
            <PopoverBody border="none">
              {!isBusiness && showCabin && (
                <Fragment>
                  <PopoverHeader border="none" pl={0} pt={0} pb={2}>
                    Cabin Class
                  </PopoverHeader>
                  <Flex flexWrap="wrap" gap="2" {...group}>
                    {options.map(value => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </Flex>
                  <Divider borderColor="text.200" my={3} />
                </Fragment>
              )}
              <Text mb={3}>{!showCabin ? 'Guests' : 'Travelers'}</Text>
              <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center" gap={3}>
                  <Text fontSize="14px">Adults</Text>
                  <Text fontSize="10px" color="text.300">
                    (18+)
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="1">
                  <FaRegMinusSquare
                    fill={
                      adultValue > 0 && adultValue + childValue > 1
                        ? '#e57938'
                        : 'gray'
                    }
                    cursor="pointer"
                    onClick={descreaseAdult}
                  />
                  <Text mx={1} width="15px" textAlign="center">
                    {adultValue}
                  </Text>
                  <FaRegPlusSquare
                    width="20px"
                    height="20px"
                    fill={adultValue < 6 ? '#e57938' : 'gray'}
                    cursor="pointer"
                    onClick={increaseAdult}
                  />
                </Flex>
              </Flex>
              <Divider borderColor="text.200" my={2} />
              <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center" gap={3}>
                  <Text fontSize="14px">Child</Text>
                  <Text fontSize="10px" color="text.300">
                    (2-17)
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="1">
                  <FaRegMinusSquare
                    fill={
                      childValue > 0 && adultValue + childValue > 1
                        ? '#e57938'
                        : 'gray'
                    }
                    cursor="pointer"
                    onClick={descreaseChild}
                  />
                  <Text mx={1} width="15px" textAlign="center">
                    {childValue}
                  </Text>
                  <FaRegPlusSquare
                    width="20px"
                    height="20px"
                    fill={childValue < 6 ? '#e57938' : 'gray'}
                    cursor="pointer"
                    onClick={increaseChild}
                  />
                </Flex>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </FormControl>
    </Box>
  );
}
