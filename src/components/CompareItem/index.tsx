import { Button, Grid, Image } from '@chakra-ui/react';

interface Props {
  item: any;
  selectedItems: Array<any>;
  onChecked: (items: any) => void;
}

export default function CompareItem(props: Props) {
  const { item } = props;

  const isActive = props.selectedItems.find(i => i?.id === item?.id);

  return (
    <Grid gridTemplateColumns={'1fr'} alignItems="center" p="1px" mb="8px">
      <Button
        border="4px solid"
        borderColor={isActive ? 'green.300' : 'transparent'}
        backgroundColor={isActive ? 'green.50' : 'white'}
        outline="none"
        padding="24px"
        rounded="sm"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        _focus={{
          outline: 'none'
        }}
        _hover={{
          background: isActive ? 'green.50' : 'white'
        }}
        onClick={e => {
          e.preventDefault();
          // TODO
          

          props.onChecked((state: any) => {
            if (state.some((i: any) => i.id === item.id)) {
              return state.filter((i: any) => i.id !== item.id);
            }
            return [...state, item];
          });
        }}>
        <Image
          width="154px"
          // height="36px"
          objectFit="cover"
          src={`https://www.kayak.com/${item.logoUrl}`}
          alt={item.providerCode}
        />
      </Button>
    </Grid>
  );
}
