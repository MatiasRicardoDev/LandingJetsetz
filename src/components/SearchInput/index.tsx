import { useEffect, useRef, useState } from 'react';

import {
  Box,
  HStack,
  Icon,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCity } from 'react-icons/fa';
import { MdLocalAirport } from 'react-icons/md';

import CustomInput from '@/components/CustomInput';

interface Props {
  icon: any;
  label: string;
  suggestions: any[];
  isLoading: boolean;
  initialValue?: string;
  generateTextSuggestion: (d: any) => string;
  handleSearchSuggestions: (q: string) => void;
  selectSuggestion: <T>(d: T) => void;
}

export default function SearchInput({
  icon,
  label,
  suggestions,
  isLoading,
  initialValue,
  generateTextSuggestion,
  handleSearchSuggestions,
  selectSuggestion
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchBox = useRef(null);
  const [value, setValue] = useState('');

  const highlightMatch = (text: string, query: string) => {
    if (!query) {
      return text;
    }

    const escapedQuery = query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  const handleSearch = (e: any) => {
    onOpen();
    setValue(e.target.value);

    handleSearchSuggestions(e.target.value);
  };

  const handleSelectSuggestion = (suggestion: any) => {
    selectSuggestion(suggestion);

    setValue(suggestion.name ?? suggestion.city_fullname);
    onClose();
  };

  useOutsideClick({
    ref: searchBox,
    handler: () => {
      onClose();
    }
  });

  useEffect(() => {
    if (!initialValue) return;

    setValue(initialValue);
  }, [initialValue]);

  return (
    <Box position="relative">
      <CustomInput
        icon={icon}
        label={label}
        placeholder="Search by City or Airport"
        value={value}
        onChange={handleSearch}
        onClick={onOpen}
        autoComplete="off"
        onFocus={e => {
          e?.target?.select();
        }}
      />
      {isOpen && (
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: '-20%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
          background="white"
          border={suggestions?.length > 0 ? '1px solid #ddd' : ''}
          className="search_result"
          left="0"
          minWidth="100%"
          p={suggestions?.length > 0 ? 2 : 0}
          position="absolute"
          ref={searchBox}
          top="101%"
          width="max-content"
          zIndex="5">
          {isLoading && (
            <Box px={3} py={2}>
              Searching...
            </Box>
          )}

          {!isLoading &&
            suggestions?.length > 0 &&
            (suggestions || []).map((suggestion: any) => {
              const parsedSuggestions = highlightMatch(
                generateTextSuggestion(suggestion),
                value
              );

              const isAirport = suggestion?.id && suggestion?.IATA;

              return (
                <HStack
                  _hover={{ backgroundColor: '#f0f0f0' }}
                  gap={4}
                  key={suggestion.id ?? suggestion._id}
                  px={1}
                  py={2}
                  w="full">
                  <Icon as={isAirport ? MdLocalAirport : FaCity} size={24} />
                  <Box
                    cursor="pointer"
                    dangerouslySetInnerHTML={{ __html: parsedSuggestions }}
                    key={suggestion.id ?? suggestion._id}
                    onClick={() => handleSelectSuggestion(suggestion)}
                  />
                </HStack>
              );
            })}
        </Box>
      )}
    </Box>
  );
}
