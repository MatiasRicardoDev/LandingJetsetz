import React from 'react';

import {
  Grid,
  GridItem,
  Heading,
  Link,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';

import { DestinationDetail, Destinations } from '../../utils/types';

interface Props {
  destinations: Destinations[];
}

// Function to split items into groups of 6
const splitItems = (items: any) => {
  const result: any = [];
  for (let i = 0; i < items.length; i += 6) {
    result.push(items.slice(i, i + 6));
  }
  return result;
};

export const DestinationGrid = ({ destinations }: Props) => {
  return (
    <>
      {destinations.map((destination: Destinations, index: number) => (
        <div key={index}>
          <Heading as="h5" size="sm" color="primary.500" mt={8} mb={2}>
            {destination.title}
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {splitItems(destination.results).map(
              (result: any, itemIndex: number) => (
                <GridItem key={itemIndex}>
                  <UnorderedList m={0}>
                    {result.map((item: DestinationDetail, index: number) => (
                      <ListItem listStyleType="none" key={index}>
                        <Link href={item.url} target="_blank">
                          {item.text}
                        </Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </GridItem>
              )
            )}
          </Grid>
        </div>
      ))}
    </>
  );
};
