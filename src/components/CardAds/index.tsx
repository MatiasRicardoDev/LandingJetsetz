import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface Props {
  logoUrl: string;
  headline: string;
  description: string;
  bookingButtonText?: string;
  link: any;
}


export default function CardAds(props: Props) {
  
  return (
    <Flex
      alignItems="center"
      bg="white"
      justifyContent="space-between" 
      p="8px"
      position="relative"
      rounded="md"
      height="100%"
      boxShadow="sm"
      border="1px solid #e2e8f0">
      <Flex alignItems="center">
        <Image src={props.logoUrl} width="80px" alt="logo" />

        <Box mx="8px" textAlign="left" minWidth="150px">
          <Heading
            as="h4"
            size="md"
            mb="6px"
            color="blumine.500"
            noOfLines={1}
            title={props.headline}>
            {props.headline}
          </Heading>

          <Text
            color="blumine.500"
            fontSize="sm"
            lineHeight="14px"
            title={props.description}>
            {props.description}
          </Text>
        </Box>
      </Flex>

      <Box minWidth="100px">
        <Button
          as="a"
          target="_blank"
          href={props.link}
          colorScheme="jaffa"
          textDecoration="none">
          {props.bookingButtonText ?? 'View Deal'}
        </Button>
      </Box>
    </Flex>
  );
}
