import { Flex, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle?: string;
}

export default function TitleSubtitle(props: Props) {
  const { title, subtitle } = props;

  return (
    <Flex flexDir="column" justifyContent="center">
      <Text fontWeight="700" fontSize="lg">
        {title}
      </Text>

      {subtitle && (
        <Text fontWeight="500" fontSize="sm">
          {subtitle}
        </Text>
      )}
    </Flex>
  );
}
