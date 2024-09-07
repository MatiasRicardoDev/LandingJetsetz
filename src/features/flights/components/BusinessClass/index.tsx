import { useEffect, useRef, useState } from 'react';

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Text,
  useOutsideClick
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegMinusSquare,
  FaRegPlusSquare
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';

import CustomInput from '../../../../components/CustomInput';

const airportData = [
  {
    id: 442,
    name: 'Dallas Intl. Airport',
    city: 'Dallas',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 443,
    name: 'Chicago Ali. Airport',
    city: 'Chicago',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 444,
    name: 'Los Angeles Intl. Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 445,
    name: 'Miami Ali. Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 446,
    name: 'Miami Intl. Airport(LAX)',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 447,
    name: 'Chicago Intl(second). Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 448,
    name: 'Miami - Intl Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 449,
    name: 'Los Angeles - Intl. Airport(LAX)',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 450,
    name: 'Miami(South) Intl. Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 451,
    name: 'Texus Intl. Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  },
  {
    id: 452,
    name: 'Texus Ali. Airport',
    city: 'Miami',
    state: 'Florida',
    stAbbv: 'FL',
    addRef: '',
    country: 'USA',
    IATA: 'MIA',
    latitude: 25.79325,
    longitude: -80.290556,
    altitude: 8,
    timezone: '-5',
    dst: 'A',
    group: '',
    priority: 31,
    citypopulation: 399457
  }
];
export default function BusinessClass() {
  const [adultValue, setAdultValue] = useState(1);
  const [childValue, setChildValue] = useState(0);

  const increaseAdult = () => {
    const adult = adultValue < 6 ? adultValue + 1 : adultValue;
    setAdultValue(adult);
  };
  const descreaseAdult = () => {
    const adult =
      adultValue > 0 && adultValue + childValue > 1
        ? adultValue - 1
        : adultValue;
    setAdultValue(adult);
  };

  const increaseChild = () => {
    const child = childValue < 6 ? childValue + 1 : childValue;
    setChildValue(child);
  };
  const descreaseChild = () => {
    const child =
      childValue > 0 && adultValue + childValue > 1
        ? childValue - 1
        : childValue;
    setChildValue(child);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) {
      return text;
    }

    const escapedQuery = query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  const removeTags = (text: string) => {
    return text.replace(/<\/?strong>/gi, '');
  };

  const [results, setResults] = useState<any>([]);
  const [targetAirport, setTargetAirport] = useState('');
  const [openResult, setOpenResult] = useState(true);

  const changeTarget = (e: any) => {
    const value = e.target.value;
    setTargetAirport(value);
    if (!openResult) setOpenResult(true);
    if (value && value != '') {
      let filteredItems = airportData
        .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        .map(item => ({
          ...item,
          name: highlightMatch(item.name, value)
        }));
      setResults(filteredItems);
    } else {
      setResults([]);
    }
  };

  const removeTarget = () => {
    setTargetAirport('');
  };

  const changeTargetAirport = (name: string) => {
    setTargetAirport(name);
    setOpenResult(false);
  };
  const [resultsFrom, setResultsFrom] = useState<any>([]);
  const [fromAirport, setFromAirport] = useState('');
  const [fromResult, setFromResult] = useState(true);

  const changeFrom = (e: any) => {
    const value = e.target.value;
    setFromAirport(value);
    if (!fromResult) setFromResult(true);
    if (value && value != '') {
      let filteredItems = airportData
        .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        .map(item => ({
          ...item,
          name: highlightMatch(item.name, value)
        }));
      setResultsFrom(filteredItems);
    } else {
      setResultsFrom([]);
    }
  };

  const removeFrom = () => {
    setFromAirport('');
  };

  const changeFromAirport = (name: string) => {
    setFromAirport(name);
    setFromResult(false);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://ipinfo.io/geo?token=9b535e2dc9c0af').then(res =>
        res.json()
      )
  });

  const searchBox = useRef(null);
  useOutsideClick({
    ref: searchBox,
    handler: () => {
      setOpenResult(false);
      setFromResult(false);
    }
  });

  useEffect(() => {
    if (!error && !isLoading) {
      const currentCity = data.city;
      if (currentCity && currentCity != '') {
        let currentItems = airportData.filter(item => item.city == currentCity);
        setFromAirport(currentItems.length ? currentItems[0].name : '');
      }
    }
  }, [data, error, isLoading]);

  return (
    <Box>
      <FormControl as="fieldset">
        <RadioGroup defaultValue="RoundTrip">
          <HStack spacing="24px">
            <Radio value="RoundTrip">Round Trip</Radio>
            <Radio value="OneWay">One Way</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <Grid templateColumns="repeat(2, 1fr)" gap={{ base: 2, md: 6 }} py={4}>
        <Box position="relative">
          {/* <CustomInput
            icon={FaMapMarkerAlt}
            label="Leaving From"
            placeholder="Los Angeles Intl. Airport (LAX)"
            changeAction={changeFrom}
            initialVal={fromAirport}
            deleteAirport={removeFrom}
          /> */}
          {fromResult && resultsFrom.length > 0 && (
            <Box
              ref={searchBox}
              as={motion.div}
              initial={{ opacity: 0, y: '20%' }}
              animate={{
                opacity: 1,
                y: '0%',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              width="max-content"
              minWidth="100%"
              background="white"
              zIndex="5"
              top="101%"
              left="0"
              position="absolute"
              className="search_result"
              border={
                resultsFrom != undefined && resultsFrom.length > 0
                  ? '1px solid #ddd'
                  : ''
              }
              p={resultsFrom != undefined && resultsFrom.length > 0 ? 2 : 0}>
              {resultsFrom != undefined &&
                resultsFrom.length > 0 &&
                resultsFrom.map((item: any, index: number) => (
                  <Box
                    onClick={() => changeFromAirport(removeTags(item.name))}
                    px={3}
                    py={2}
                    cursor="pointer"
                    _hover={{ backgroundColor: '#f0f0f0' }}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.name ?? '' }}
                  />
                ))}
            </Box>
          )}
        </Box>
        <Box position="relative">
          {/* <CustomInput
            icon={FaMapMarkerAlt}
            label="Going To"
            placeholder="Santa Ana (SNA)"
            changeAction={changeTarget}
            initialVal={targetAirport}
            deleteAirport={removeTarget}
          /> */}

          {openResult && results.length > 0 && (
            <Box
              ref={searchBox}
              as={motion.div}
              initial={{ opacity: 0, y: '20%' }}
              animate={{
                opacity: 1,
                y: '0%',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              width="max-content"
              minWidth="100%"
              background="white"
              zIndex="5"
              top="101%"
              left="0"
              position="absolute"
              className="search_result"
              border={
                results != undefined && results.length > 0
                  ? '1px solid #ddd'
                  : ''
              }
              p={results != undefined && results.length > 0 ? 2 : 0}>
              {results != undefined &&
                results.length > 0 &&
                results.map((item: any, index: number) => (
                  <Box
                    onClick={() => changeTargetAirport(removeTags(item.name))}
                    px={3}
                    py={2}
                    cursor="pointer"
                    _hover={{ backgroundColor: '#f0f0f0' }}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.name ?? '' }}
                  />
                ))}
            </Box>
          )}
        </Box>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={{ base: 2, md: 6 }} py={4}>
        {/* <CustomInput
          icon={FaCalendarAlt}
          label="Depart"
          placeholder="Santa Ana (SNA)"
        /> */}
        {/* <CustomInput
          icon={FaCalendarAlt}
          label="Return"
          placeholder="Santa Ana (SNA)"
        /> */}
      </Grid>
      <Box py={4}>
        <FormControl>
          <FormLabel mb={2}>Travelers</FormLabel>
          <Popover placement="top-end">
            <PopoverTrigger>
              <Box border="1px solid #c7c7c7" background="white" p={2}>
                <Flex alignItems="center">
                  <IoPerson size={24} />
                  <Box mx={4} w="full">
                    <Flex border="none" w="full" alignItems="center">
                      <Input
                        pointerEvents="none"
                        variant="unstyled"
                        value={`${adultValue > 0 ? adultValue + ' Adults, ' : ''}${childValue > 0 ? childValue + ' Child' : ''}`}
                        placeholder="1 Adults, Economy"
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
              <PopoverHeader border="none">Travelers</PopoverHeader>
              <PopoverBody border="none">
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
      <Box py={4}>
        <Button colorScheme="primary" size="lg">
          Find Deals
        </Button>
      </Box>
    </Box>
  );
}
