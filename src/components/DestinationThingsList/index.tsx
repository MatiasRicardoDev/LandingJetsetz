import {
  Box,
  Heading,
  Link,
  ListIcon,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Item {
  name: string;
  url?: string;
}

interface Props {
  title?: string;
  items?: Item[];
  bullet?: IconType;
}

export default function DestinationThingsList({ title, items, bullet }: Props) {
  return (
    <Box>
      <Heading mb={2} color="gray.700">
        {title}
      </Heading>

      <UnorderedList mx={2}>
        {items &&
          items.map(item => (
            <ListItem key={item.name} listStyleType="none">
              {bullet && <ListIcon as={bullet} color="primary.500" />}
              {item.url ? (
                <Link href={item.url} color="jetBlue.500" target="_blank">
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
}
