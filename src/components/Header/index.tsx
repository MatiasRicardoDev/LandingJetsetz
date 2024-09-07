import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { FaHotel } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCarSport } from 'react-icons/io5';
import { MdHotel } from 'react-icons/md';
import { MdDiscount } from 'react-icons/md';
import { MdPhotoCamera } from 'react-icons/md';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

const MENU = [
  {
    title: 'Flights',
    link: '/compare-flights',
    iconColor: '#e57938',
    icon: BiSolidPlaneAlt,
    titleFontWeight: '600'
  },
  {
    title: 'Business Class',
    link: '/cheap-business-class-flights ',
    iconColor: '#e57938',
    icon: FaBriefcase,
    titleFontWeight: '600'
  },
  {
    title: 'Hotels',
    link: '/compare-hotels',
    iconColor: '#e57938',
    icon: MdHotel,
    titleFontWeight: '600'
  },
  {
    title: 'Cars',
    link: '/compare-cars',
    iconColor: '#e57938',
    icon: IoCarSport,
    titleFontWeight: '600'
  },
  {
    title: 'Company',
    link: '#',
    iconColor: '#1A202C',
    icon: FaHotel,
    titleFontWeight: '400'
  },
  {
    title: 'Support',
    link: '#',
    iconColor: '#1A202C',
    icon: FaCircleInfo,
    titleFontWeight: '400'
  },
  {
    title: '(855) 538-7389',
    link: 'tel: (855) 538-7389',
    iconColor: '#1A202C',
    icon: MdOutlinePhoneAndroid,
    titleFontWeight: '400'
  }
];

export default function Header() {
  return (
    <Flex alignItems="center" bg="brand.500" width="100%" p={8}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="6xl"
        width="100%"
        mx="auto">
        <Link href="/">
          <Image src="/img/jetsetz-logo.png" alt="Jetsetz Logo" />
        </Link>

        <Menu placement="bottom-end" isLazy>
          <MenuButton
            as={Button}
            background="#0E4663"
            height="46px"
            p={3}
            _hover={{
              background: '#0E4663'
            }}
            _active={{
              background: '#0E4663'
            }}>
            <GiHamburgerMenu size={35} color="white" />
          </MenuButton>

          <MenuList borderRadius="15px" width="250px" zIndex={4}>
            {MENU.map((item, index) => (
              <div key={`key-${item?.title}-${index}`}>
                <MenuItem
                  _hover={{ textDecoration: 'none' }}
                  as={Link}
                  href={item.link}>
                  <Flex alignItems="center" justifyContent="flex-start" px={2}>
                    <Icon as={item.icon} size={20} color={item.iconColor} />
                    <Text
                      fontWeight={item.titleFontWeight}
                      ml={4}
                      fontSize={{ base: '16px', lg: '18px' }}>
                      {item.title}
                    </Text>
                  </Flex>
                </MenuItem>
                {index === 5 && (
                  <Divider
                    key={`divider-${item?.title}-${index}`}
                    borderColor="text.200"
                    my={2}
                  />
                )}
              </div>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
