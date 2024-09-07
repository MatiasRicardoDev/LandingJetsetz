import { Button } from '@chakra-ui/react';
import Image from 'next/image';

import KayakIcon from '@/assets/kayak.svg';

interface Props {
  setDeepItems: any;
  deepItems: any[];
}

export default function ButtonDeepLink({ setDeepItems, deepItems }: Props) {
  const handleClick = (deepLinkName: string) => {
    if (deepItems.includes(deepLinkName)) {
      setDeepItems(deepItems.filter(item => item !== deepLinkName));
      return;
    }

    setDeepItems([...deepItems, deepLinkName]);
  };

  const deepKayakSelected = deepItems.includes('kayak');
  // const deepSmartFaresSelected = deepItems.includes("smartfares");
  // const deepMomondoSelected = deepItems.includes("momondo");

  return (
    <>
      {/* Kayak */}
      <Button
        border="4px solid"
        borderColor={deepKayakSelected ? 'green.300' : 'transparent'}
        backgroundColor={deepKayakSelected ? 'green.50' : 'white'}
        outline="none"
        padding="24px"
        rounded="sm"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        _hover={{
          background: deepKayakSelected ? 'green.50' : 'white'
        }}
        _focus={{
          outline: 'none'
        }}
        fontSize="xl"
        w="100%"
        h="58px"
        mb="8px"
        p={0}
        onClick={() => handleClick('kayak')}>
        <Image src={KayakIcon} width={180} height={32} alt="kayak-icon" />
      </Button>

      {/* <Button
        mb="8px"
        border="4px solid"
        borderColor={deepMomondoSelected ? "green.300" : "transparent"}
        backgroundColor={deepMomondoSelected ? "green.50" : "white"}
        outline="none"
        padding="24px"
        rounded="sm"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        _hover={{
          background: deepMomondoSelected ? "green.50" : "white",
        }}
        _focus={{
          outline: "none",
        }}
        fontSize="xl"
        w="100%"
        h="58px"
        p={0}
        onClick={() => handleClick("momondo")}
      >
        <span style={{ width: "180px", height: "32px" }}>
          <Icon as={MomondoIcon} />
        </span>
      </Button> */}
    </>
  );
}
