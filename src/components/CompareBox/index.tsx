'use client';

import { useState } from 'react';

import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { generateKey, saveOnBrowser } from '../../utils/saveOnBrowser';
import ButtonDeepLink from '../ButtonDeepLink';
import CompareItem from '../CompareItem';
import { LinkAdButler, linksToCompareAdButler } from './links';


interface Props {
  items: any;
  search?: any;
  type?: string;
}

export default function CompareBox(props: Props) {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [deepItems, setDeepItems] = useState<any>([]);
  const areItems = (props.items || []).length > 0;

  const sortedItems = [...(props.items || [])].sort(
    (a: any, b: any) =>
      Number(b?.cpcEstimate?.price) - Number(a?.cpcEstimate?.price)
  );

  const allSelected = (selectedItems?.length || 0) + (deepItems?.length || 0);

  const redirectToDeepLink = (to = 'kayak') => {
    setTimeout(() => {
      if (to === 'kayak') {
        
        //@ts-ignore
        window.location.href = 'https://servedbyadbutler.com/redirect.spark?MID=187841&plid=2612566&setID=757110&channelID=0&CID=0&banID=522438919&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=d4ee3bd7cf2a3a5930f1490cac3e2ed668c41d41&location='+window?.deepLinkUrl;;
      } else {
        
        //@ts-ignore
        window.location.href = 'https://servedbyadbutler.com/redirect.spark?MID=187841&plid=2612567&setID=757110&channelID=0&CID=0&banID=522438920&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=dc7eb9882afd8e5e9c6d3c6ffe947064a37496ca&location='+window?.deepLinkMomondoUrl;;
      }
    }, 5000);
  };

  selectedItems.forEach((element:any) => {
    console.log('NAME ==> ',element.name)
  });


  const readSelected = ()=>{
    
    selectedItems.forEach((item:any) => {
        console.log('ITEM => NAME => ',item.name);
        let adButlerLink:LinkAdButler[] = linksToCompareAdButler.filter(x => x.name == item.name);
        if(adButlerLink.length > 0){
          fetch(adButlerLink[0].link)
            .then(response => console.info('Data Clicked => ',adButlerLink[0].name));
        }
        console.log('links filtrados => ',JSON.stringify(adButlerLink))

        /*if(item.name == 'Cheapoair'){
          //item.deepLink += chepoair+item.deepLink
          fetch(chepoair)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Procesar los datos
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }*/
    });
  }

  const handleCompare = () => {
    readSelected()
    try {
      if (!areItems || (deepItems.length > 0 && selectedItems < 1)) {
        if (deepItems.length === 2) {
          redirectToDeepLink('momondo');

          //@ts-ignore
          window.open(window?.deepLinkUrl, '_blank');
        } else if (deepItems.length === 1 && deepItems.includes('momondo')) {
          //@ts-ignore
          window.open(window?.deepLinkMomondoUrl, '_blank');
        } else {
          //@ts-ignore
          window.open(window?.deepLinkUrl, '_blank');
        }

        return;
      }

      /**
       * Redirect to deep link
       */
      if (deepItems.length === 1 && deepItems.includes('momondo')) {
        redirectToDeepLink('momondo');
      }

      if (deepItems.length === 1 && deepItems.includes('kayak')) {
        redirectToDeepLink('kayak');
      }

      if (selectedItems.length === 0) {
        redirectToDeepLink('kayak');
      }

      const toCompare =
        selectedItems.length > 0
          ? selectedItems
          : (sortedItems || []).slice(0, 4);

      const key = generateKey(props?.type ?? 'flights');
      saveOnBrowser(key, toCompare);

      window.open(window.comparePanelUrl, '_blank');
    } catch (e) {
      console.error('RIP :(', e);
    }
  };


  const isRentalCar = props.type === 'cars';

  return (
    <Grid
      gridTemplateRows={'40px auto 60px'}
      gap="8px"
      bg="blumine.600"
      padding="16px"
      rounded="md"
      minH={{ base: '300px', md: '480px' }}>
      <Flex justifyContent="center" alignItems="center">
        {areItems && (
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            backgroundColor={
              areItems && allSelected <= 0 ? 'transparent' : 'green.500'
            }
            color="white"
            textAlign="center"
            px="12px"
            rounded="full">
            For The Best Deal Select 4 Sites
          </Text>
        )}
      </Flex>

      <Box minH="100%" maxH="408px" overflowY="auto">
        {!areItems && isRentalCar && (
          <Box py="32px">
            <Text color="blumine.300" fontWeight="bold" fontSize="lg">
              No providers found.
            </Text>
            <Text color="blumine.200" fontSize="sm">
              Try another parameters!
            </Text>
          </Box>
        )}

        {/* #1 & #2*/}
        {(sortedItems || []).slice(0, 2).map((item: any) => {
          const { id } = item;
            // ACA compare item
          return (
            <CompareItem
              key={id} 
              item={item}
              selectedItems={selectedItems}
              onChecked={setSelectedItems}
            />
          );
        })}

        {/* #2 (Smartfares) (disable for now) */}
        {/* <ButtonSmartfares selectedItems={selectedItems} onChecked={setSelectedItems} /> */}

        {/* #3 (Just Kayak, Momondo is disabled now) */}
        {!isRentalCar && (
          <ButtonDeepLink deepItems={deepItems} setDeepItems={setDeepItems} />
        )}

        {/* #4 & #5 */}
        {(sortedItems || []).slice(2, 4).map((item: any) => {
          const { id } = item;

          return (
            <CompareItem
              key={id}
              item={item}
              selectedItems={selectedItems}
              onChecked={setSelectedItems}
            />
          );
        })}
      </Box>

      {/* Compare */}
      <Button
        fontSize="xl"
        w="100%"
        h="58px"
        colorScheme="jaffa"
        onClickCapture={handleCompare}>
        {allSelected < 1 ? 'Compare All' : 'Compare Selected'}
      </Button>
    </Grid>
  );
}
