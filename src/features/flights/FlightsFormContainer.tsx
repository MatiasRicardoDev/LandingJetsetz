'use client';

import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  FormControl,
  Grid,
  HStack,
  Radio,
  RadioGroup
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { date, number, object, string } from 'yup';

import BannerPartners from '@/components/BannerPartners';
import CompareBox from '@/components/CompareBox';
import SuscribeToOffer from '@/components/SuscribeToOffer';
import { getCompareFlights } from '@/features/flights/services/flights.service';
import { useFlightStore } from '@/features/flights/store/flightStore';
import { openDeepLinkTab } from '@/features/flights/utils/deepLinks';
import useValidateRequires from '@/hooks/useValidateRequires';
import { useJetsetzStore } from '@/store/jetsetzStore';
import { searchFormatsForFlights } from '@/utils/searchFormats';

import CustomInput from '../../components/CustomInput';
import DateRangePickerPopOver from '../../components/DateRangePickerPopOver';
import SearchInput from '../../components/SearchInput';
import useAirportSearch from '../../hooks/useAirportSearch';
import TravelersCabinClass from './components/TravelersCabinClass';

const flightSchema = object({
  origin: string(),
  originInput: string(),
  destination: string(),
  destinationInput: string(),
  firstDate: date(),
  secondDate: date(),
  cabinClass: string(),
  adults: number().min(1),
  children: number().min(0),
  tripType: string()
});

interface Props {
  isBusiness?: Boolean;
}

export default function FlightsFormContainer({ isBusiness = false }: Props) {
  const { updateFlightSearchForm } = useFlightStore();

  const validateRequire = useValidateRequires();
  const airportSearch = useAirportSearch();

  // State to manage the selected dates
  const [selectedDates, setSelectedDates] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null
  } as { from: Date | null; to: Date | null });

  const { register, handleSubmit, setValue, formState, watch } = useForm({
    resolver: yupResolver(flightSchema),
    defaultValues: {
      origin: '',
      destination: '',
      tripType: 'roundtrip',
      firstDate: addDays(new Date(), 1),
      secondDate: addDays(new Date(), 7)
    }
  });


  const { isPending, data, error, mutate } = useMutation({
    mutationFn: async (data: any) => {
      let result = await getCompareFlights(data);
      console.log('Este es el RESULT=>',result.compareToItems)
      result.compareToItems[0].name = 'CheapFlights'
      result.compareToItems[0].deepLink = localStorage.getItem('cf_link');
      console.log('Este es el RESULT EDITADO =>',result.compareToItems)
      return result;
    }
  });

  const onSubmit = handleSubmit(data => {
    const isValid = validateRequire.validate(data);
    console.log('Esto es data Al Darle Submit',data)
    if (!isValid) {
      return;
    }

    updateFlightSearchForm({
      origin: data.origin,
      destination: data?.destination,
      firstDate: data.firstDate,
      secondDate: data?.secondDate,
      cabinClass: data.cabinClass ?? 'Economy',
      children: data.children ?? 0,
      adults: data.adults ?? 1,
      tripType: data.tripType ?? 'roundtrip'
    });

    openDeepLinkTab(data);

    mutate(data);
  });

  // Update the origin input with the nearest airport to the user
  useEffect(() => {
    if (airportSearch?.airportNearToUser?.IATA) {
      setValue('origin', airportSearch?.airportNearToUser?.IATA);
    }
  }, [airportSearch?.airportNearToUser?.IATA, setValue]);
  console.log('ESTE ES OTRA DATA => ',data)
  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        md: '1fr minmax(280px, 480px)'
      }}
      gap={6}
      px={{ base: 4, lg: 6 }}>
      <Box>
        <form onSubmit={onSubmit}>
          <FormControl as="fieldset">
            <RadioGroup defaultValue="roundtrip">
              <HStack spacing="24px">
                <Radio
                  value="roundtrip"
                  colorScheme="primary"
                  borderColor="primary.400"
                  {...register('tripType')}>
                  Round Trip
                </Radio>
                <Radio
                  value="oneway"
                  colorScheme="primary"
                  borderColor="primary.400"
                  {...register('tripType')}>
                  One Way
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={{ base: 2, md: 6 }}
            py={4}>
            <SearchInput
              initialValue={airportSearch?.airportNearToUser?.name}
              generateTextSuggestion={searchFormatsForFlights}
              icon={FaMapMarkerAlt}
              isLoading={airportSearch.isLoading}
              label="Leaving From"
              suggestions={airportSearch.suggestions}
              handleSearchSuggestions={async (q: string) => {
                airportSearch.setSearch(q);
              }}
              selectSuggestion={(val: any) => {
                setValue('origin', val.IATA);
              }}
            />

            <SearchInput
              generateTextSuggestion={searchFormatsForFlights}
              icon={FaMapMarkerAlt}
              isLoading={airportSearch.isLoading}
              label="Going To"
              suggestions={airportSearch.suggestions}
              handleSearchSuggestions={(q: string) => {
                airportSearch.setSearch(q);
              }}
              selectSuggestion={(val: any) => {
                setValue('destination', val.IATA);
              }}
            />
          </Grid>

          {/* DATES */}
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={{ base: 2, md: 6 }}
            py={4}>
            <DateRangePickerPopOver
              mode={watch('tripType') === 'oneway' ? 'single' : 'range'}
              header="Select Dates"
              selected={selectedDates}
              setSelected={setSelectedDates}
              onClose={() => {}}
              handleChangeSelection={(from, to) => {
                if (from) {
                  setValue('firstDate', new Date(from) ?? new Date());
                }

                if (to) {
                  setValue('secondDate', new Date(to) ?? new Date());
                }
              }}>
              <CustomInput
                icon={FaCalendarAlt}
                label="Depart"
                placeholder="mm/dd/yyyy"
                value={
                  selectedDates && selectedDates.from
                    ? format(selectedDates.from, 'MM/dd/yyyy')
                    : format(addDays(new Date(), 1), 'MM/dd/yyyy')
                }
              />
            </DateRangePickerPopOver>

            {watch('tripType') === 'roundtrip' && (
              <DateRangePickerPopOver
                header="Select Dates"
                selected={selectedDates}
                setSelected={setSelectedDates}
                onClose={() => {}}
                handleChangeSelection={(from, to) => {
                  if (from) {
                    setValue('firstDate', new Date(from) ?? new Date());
                  }

                  if (to) {
                    setValue('secondDate', new Date(to) ?? new Date());
                  }
                }}>
                <CustomInput
                  icon={FaCalendarAlt}
                  label="Return"
                  placeholder="mm/dd/yyyy"
                  value={
                    selectedDates && selectedDates.to
                      ? format(selectedDates.to, 'MM/dd/yyyy')
                      : format(addDays(new Date(), 7), 'MM/dd/yyyy')
                  }
                />
              </DateRangePickerPopOver>
            )}
          </Grid>

          {/* Travelers & Cabin Class */}
          <TravelersCabinClass
            handleChangeCabin={s => setValue('cabinClass', s)}
            handleChangeAdult={v => setValue('adults', v)}
            handleChangeChild={v => setValue('children', v)}
            isBusiness={isBusiness}
          />

          <Box py={4}>
            <Button colorScheme="primary" size="lg" type="submit">
              Find Deals
            </Button>
          </Box>
        </form>

        <SuscribeToOffer />
      </Box>

      {!isPending && !data && <BannerPartners type="flights" />}

      {!isPending && data && (
        <CompareBox items={data?.compareToItems} type="flights" />
      )}
    </Grid>
  );
}
