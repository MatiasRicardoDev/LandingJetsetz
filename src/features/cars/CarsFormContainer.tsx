'use client';

import { useState } from 'react';

import { Box, Button, Grid } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { date, number, object, string } from 'yup';

import BannerPartners from '@/components/BannerPartners';
import CompareBox from '@/components/CompareBox';
import CustomSelect from '@/components/CustomSelect';
import SuscribeToOffer from '@/components/SuscribeToOffer';
import { getCompareRentalCar } from '@/features/cars/services/rentalCar.service';
import { openDeepLinkTab } from '@/features/cars/utils/deepLinks';
import useValidateRequires from '@/hooks/useValidateRequires';
import { searchFormatsForCities } from '@/utils/searchFormats';

import CustomInput from '../../components/CustomInput';
import DateRangePickerPopOver from '../../components/DateRangePickerPopOver';
import SearchInput from '../../components/SearchInput';
import useRentalCitySearch from '../../hooks/useRentalCitySearch';
import { useCarStore } from './store/carStore';

const TIME_OPTIONS = [
  { value: '1AM', label: '1:00 AM' },
  { value: '2AM', label: '2:00 AM' },
  { value: '3AM', label: '3:00 AM' },
  { value: '4AM', label: '4:00 AM' },
  { value: '5AM', label: '5:00 AM' },
  { value: '6AM', label: '6:00 AM' },
  { value: '7AM', label: '7:00 AM' },
  { value: '8AM', label: '8:00 AM' },
  { value: '9AM', label: '9:00 AM' },
  { value: '10AM', label: '10:00 AM' },
  { value: '11AM', label: '11:00 AM' },
  { value: '12PM', label: '12:00 NOON', selected: true },
  { value: '1PM', label: '1:00 PM' },
  { value: '2PM', label: '2:00 PM' },
  { value: '3PM', label: '3:00 PM' },
  { value: '4PM', label: '4:00 PM' },
  { value: '5PM', label: '5:00 PM' },
  { value: '6PM', label: '6:00 PM' },
  { value: '7PM', label: '7:00 PM' },
  { value: '8PM', label: '8:00 PM' },
  { value: '9PM', label: '9:00 PM' },
  { value: '10PM', label: '10:00 PM' },
  { value: '11PM', label: '11:00 PM' },
  { value: '12AM', label: '12:00 AM' }
];

const rentalCarSchema = object({
  origin: string(),
  originName: string(),
  source: string(),
  destination: string(),
  destinationName: string(),
  firstDate: date(),
  secondDate: date(),
  pickUpTime: string(),
  dropOffTime: string()
});

export default function Cars() {
  const { updateCarSearchForm } = useCarStore();

  const validateRequire = useValidateRequires();
  const citySearch = useRentalCitySearch();

  // State to manage the selected dates
  const [selectedDates, setSelectedDates] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null
  } as { from: Date | null; to: Date | null });

  const { register, handleSubmit, setValue, formState, watch } = useForm({
    resolver: yupResolver(rentalCarSchema),
    defaultValues: {
      origin: '',
      originName: '',
      source: 'city',
      destination: '',
      destinationName: '',
      firstDate: addDays(new Date(), 1),
      secondDate: addDays(new Date(), 7),
      pickUpTime: '12PM',
      dropOffTime: '12PM'
    }
  });

  const { isPending, data, error, mutate } = useMutation({
    mutationFn: (data: any) => {
      return getCompareRentalCar(data);
    }
  });

  const handleSelectSuggestion = (val: any) => {
    const isAirport = val.id && val.IATA;

    if (isAirport) {
      setValue('origin', val.IATA);
      setValue('source', 'airport');
      setValue('originName', `${val.name} (${val.IATA})`);
    } else {
      setValue('origin', val.city_id); // city_id is defined by kayak DB
      setValue('source', 'city');
      setValue('originName', val.location_name);
    }
  };

  const onSubmit = handleSubmit(data => {
    const isValid = validateRequire.validateRentalCar(data);

    if (!isValid) {
      return;
    }

    updateCarSearchForm({
      origin: data.origin,
      originName: data.originName,
      source: data.source,
      destination: data?.destination,
      destinationName: data?.destinationName,
      firstDate: data.firstDate,
      secondDate: data?.secondDate,
      pickUpTime: data?.pickUpTime,
      dropOffTime: data?.dropOffTime
    });

    openDeepLinkTab(data);
    mutate(data);
  });

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
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={{ base: 2, md: 6 }}
            py={4}>
            <SearchInput
              initialValue={''}
              generateTextSuggestion={searchFormatsForCities}
              icon={FaMapMarkerAlt}
              isLoading={citySearch.isLoading}
              label="Pick-Up Location"
              suggestions={citySearch.suggestions}
              handleSearchSuggestions={async (q: string) => {
                citySearch.setSearch(q);
              }}
              selectSuggestion={(val: any) => {
                handleSelectSuggestion(val);
              }}
            />

            <SearchInput
              initialValue={'Same as pick-up'}
              generateTextSuggestion={searchFormatsForCities}
              icon={FaMapMarkerAlt}
              isLoading={citySearch.isLoading}
              label="Drop-Off Location"
              suggestions={citySearch.suggestions}
              handleSearchSuggestions={async (q: string) => {
                citySearch.setSearch(q);
              }}
              selectSuggestion={(val: any) => {
                handleSelectSuggestion(val);
              }}
            />
          </Grid>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={{ base: 2, md: 6 }}
            py={4}>
            <DateRangePickerPopOver
              mode={'range'}
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
                label="Check-in"
                placeholder="mm/dd/yyyy"
                value={
                  selectedDates && selectedDates.from
                    ? format(selectedDates.from, 'MM/dd/yyyy')
                    : format(addDays(new Date(), 1), 'MM/dd/yyyy')
                }
              />
            </DateRangePickerPopOver>
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
                label="Check-out"
                placeholder="mm/dd/yyyy"
                value={
                  selectedDates && selectedDates.to
                    ? format(selectedDates.to, 'MM/dd/yyyy')
                    : format(addDays(new Date(), 7), 'MM/dd/yyyy')
                }
              />
            </DateRangePickerPopOver>
          </Grid>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={{ base: 2, md: 6 }}
            py={4}>
            <CustomSelect
              icon={FaClock}
              label="Pick-Up Time"
              options={TIME_OPTIONS}
              placeholder="Pick-Up Time"
              value={watch('pickUpTime')}
              onChange={(e: any) => {
                setValue('pickUpTime', e.target.value ?? '12PM');
              }}
            />

            <CustomSelect
              icon={FaClock}
              label="Drop-Off Time"
              options={TIME_OPTIONS}
              placeholder="Drop-Off Time"
              value={watch('dropOffTime')}
              onChange={(e: any) => {
                setValue('dropOffTime', e.target.value ?? '12PM');
              }}
            />
          </Grid>

          <Box py={4}>
            <Button colorScheme="primary" size="lg" type="submit">
              Find Deals
            </Button>
          </Box>
        </form>

        <SuscribeToOffer />
      </Box>

      {!isPending && !data && <BannerPartners type="cars" />}

      {!isPending && data && (
        <CompareBox items={data?.compareToItems} type="cars" />
      )}
    </Grid>
  );
}
