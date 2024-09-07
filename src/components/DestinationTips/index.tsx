import { Box, Container, Heading } from '@chakra-ui/react';

import './style.css';

interface Props {
  htmlTips: string;
  title?: string;
}

export default function DestinationTips({ htmlTips, title }: Props) {
  return (
    <Container className="flights-tip-section" maxW="6xl" my="6">
      {title && <Heading>{title}</Heading>}

      <Box
        className="flightTips"
        dangerouslySetInnerHTML={{
          __html: htmlTips
        }}
      />
    </Container>
  );
}
