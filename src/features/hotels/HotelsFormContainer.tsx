'use client';

import { useState } from 'react';

import { Box, Button, Grid } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { FaBed, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { date, number, object, string } from 'yup';

import BannerPartners from '@/components/BannerPartners';
import CompareBox from '@/components/CompareBox';
import CustomSelect from '@/components/CustomSelect';
import SuscribeToOffer from '@/components/SuscribeToOffer';
import { getCompareHotels } from '@/features/hotels/services/hotels.service';
import { openDeepLinkTab } from '@/features/hotels/utils/deepLinks';
import useValidateRequires from '@/hooks/useValidateRequires';
import { searchFormatsForCities } from '@/utils/searchFormats';

import CustomInput from '../../components/CustomInput';
import DateRangePickerPopOver from '../../components/DateRangePickerPopOver';
import SearchInput from '../../components/SearchInput';
import useCitySearch from '../../hooks/useCitySearch';
import TravelersCabinClass from '../flights/components/TravelersCabinClass';
import { useHotelStore } from './store/hotelStore';

const hotelSchema = object({
  origin: string(),
  originName: string(),
  source: string(),
  firstDate: date(),
  secondDate: date(),
  adults: number().min(1),
  children: number().min(0),
  rooms: number().min(1)
});

export default function Hotels() {
  const { updateHotelSearchForm } = useHotelStore();

  const validateRequire = useValidateRequires();
  const citySearch = useCitySearch();

  // State to manage the selected dates
  const [selectedDates, setSelectedDates] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null
  } as { from: Date | null; to: Date | null });

  const { register, handleSubmit, setValue, formState, watch } = useForm({
    resolver: yupResolver(hotelSchema),
    defaultValues: {
      origin: '',
      originName: '',
      source: 'city',
      firstDate: addDays(new Date(), 1),
      secondDate: addDays(new Date(), 7),
      rooms: 1,
      adults: 1
    }
  });

  const { isPending, data, error, mutate } = useMutation({
    mutationFn: (data: any) => {
      return getCompareHotels(data);
    }
  });

  const onSubmit = handleSubmit(data => {
    const isValid = validateRequire.validateHotel(data);

    if (!isValid) {
      return;
    }

    updateHotelSearchForm({
      origin: data.origin,
      originName: data.originName,
      firstDate: data.firstDate,
      secondDate: data?.secondDate,
      children: data.children ?? 0,
      adults: data.adults ?? 1,
      rooms: data.rooms ?? 1
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
          <SearchInput
            initialValue={''}
            generateTextSuggestion={searchFormatsForCities}
            icon={FaMapMarkerAlt}
            isLoading={citySearch.isLoading}
            label="Where Are You Staying?"
            suggestions={citySearch.suggestions}
            handleSearchSuggestions={async (q: string) => {
              citySearch.setSearch(q);
            }}
            selectSuggestion={(val: any) => {
              console.log({ val });
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
            }}
          />
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
              icon={FaBed}
              label="Rooms"
              placeholder="Select Rooms"
              value={watch('rooms')}
              onChange={(e: any) => {
                setValue('rooms', e.target.value ?? 1);
              }}
              options={[
                { value: '1', label: '1 Room', selected: true },
                { value: '2', label: '2 Rooms' },
                { value: '3', label: '3 Rooms' },
                { value: '4', label: '4 Rooms' },
                { value: '5', label: '5 Rooms' },
                { value: '6', label: '6 Rooms' },
                { value: '7', label: '7 Rooms' },
                { value: '8', label: '8 Rooms' },
                { value: '9', label: '9 Rooms' }
              ]}
            />

            {/* Travelers & Cabin Class */}
            <TravelersCabinClass
              handleChangeCabin={s => {}}
              handleChangeAdult={v => setValue('adults', v)}
              handleChangeChild={v => setValue('children', v)}
              showCabin={false}
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

      {!isPending && !data && <BannerPartners type="hotels" />}

      {!isPending && data && (
        <CompareBox items={data?.compareToItems} type="hotels" />
      )}
    </Grid>
  );
}
