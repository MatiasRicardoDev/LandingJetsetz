import { Flex, Grid, Icon, Image, Text } from '@chakra-ui/react';
import { format, parse } from 'date-fns';
import { FaArrowRight, FaArrowsAltH } from 'react-icons/fa';

import TitleSubtitle from '@/components/TitleSubtitle';

interface Props {
  query: any;
}

export default function CarHeaderResults({ query }: Props) {
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
      <a href="/compare-rental-cars">
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
          <Text>{query?.originName}</Text>

          {query?.destinationName &&
            query?.destinationName !== query?.originName && (
              <>
                <Icon mx="4px" as={FaArrowRight} />
                <Text>{query?.destinationName}</Text>
              </>
            )}
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
          <TitleSubtitle title={query.pickUpTime} />
        </Flex>

        <Flex gap="16px" alignItems="center">
          <TitleSubtitle title={query.dropOffTime} />
        </Flex>
      </Grid>
    </Flex>
  );
}
