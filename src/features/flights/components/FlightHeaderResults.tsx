import { Flex, Grid, Icon, Image, Text } from '@chakra-ui/react';
import { format, parse } from 'date-fns';
import { FaArrowRight, FaArrowsAltH } from 'react-icons/fa';

import TitleSubtitle from '@/components/TitleSubtitle';

interface Props {
  query: any;
}

export default function FlightHeaderResults({ query }: Props) {
  let passanger = query?.adults > 1 ? `${query?.adults} Adults` : `1 Adult`;

  if (query?.children == 1) {
    passanger += `, ${query?.children} Child`;
  }

  if (query?.children > 1) {
    passanger += `, ${query?.children} Children`;
  }

  const firstDate = query?.firstDate
    ? parse(query?.firstDate, 'yyyy-MM-dd', new Date())
    : null;
  const secondDate = query?.secondDate
    ? parse(query?.secondDate, 'yyyy-MM-dd', new Date())
    : null;

  return (
    <Flex
      px="12px"
      py="16px"
      justifyContent="space-between"
      alignItems="center"
      minHeight="100px">
      <a href="/compare-flights">
        <Image
          src="https://jetsetz.com/images/jetsetz-logo.png"
          alt="jetsetz logo"
        />
      </a>

      <Grid
        gridTemplateColumns={'repeat(7, auto)'}
        justifyContent="center"
        alignItems="center"
        gap="8px">
        <Flex
          alignItems="center"
          px="8px"
          fontWeight="bold"
          fontSize="18px"
          gap="8px">
          <Text>{query?.origin}</Text>

          {String(query?.tripType).toLowerCase() === 'roundtrip' && (
            <Icon mx="4px" as={FaArrowsAltH} />
          )}
          {String(query?.tripType).toLowerCase() !== 'roundtrip' && (
            <Icon mx="4px" as={FaArrowRight} />
          )}

          <Text>{query?.destination}</Text>
        </Flex>

        <Text fontSize="3xl" fontWeight="500">
          |
        </Text>

        <Flex gap="8px" alignItems="center">
          {firstDate && <TitleSubtitle title={format(firstDate, 'MMM dd')} />}

          <Text fontWeight="700" fontSize="lg">
            {`to`}
          </Text>

          {secondDate && <TitleSubtitle title={format(secondDate, 'MMM dd')} />}
        </Flex>

        <Text fontSize="3xl" fontWeight="500">
          |
        </Text>

        <Flex gap="16px" alignItems="center">
          <TitleSubtitle title={query?.cabinClass ?? 'economy'} />
        </Flex>

        <Text fontSize="3xl" fontWeight="500">
          |
        </Text>

        <Flex gap="16px" alignItems="center">
          <TitleSubtitle title={passanger} />
        </Flex>
      </Grid>
    </Flex>
  );
}
