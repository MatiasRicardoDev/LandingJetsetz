import React, { memo } from 'react';

import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { endOfDay, format, isBefore } from 'date-fns';
import 'react-day-picker/dist/style.css';

import ReactDayPicker from '../DatePicker';
import '../DatePicker/style.css';

interface DayRangePickerPopOverProps {
  mode?: 'single' | 'range';
  header?: string;
  selected?: { from: any; to: any };
  setSelected: any;
  handleChangeSelection: (
    dateFrom: string | null,
    dateTo: string | null
  ) => void;
  onClose?: () => void;
  children: any;
}

const DateRangePickerPopOver = memo(function DayRangePickerPopOver({
  mode = 'range',
  header,
  selected,
  setSelected,
  handleChangeSelection,
  onClose,
  children
}: DayRangePickerPopOverProps) {
  const popover = useDisclosure();
  const defaultMonth = new Date();

  const isPastDay = (day: Date) => {
    return isBefore(endOfDay(day), new Date());
  };

  const onChangeSelection = (value: any) => {
    if (!value) {
      setSelected(null);
      handleChangeSelection(null, null);
      return;
    }

    if (mode === 'single') {
      handleChangeSelection(value, null);
      setSelected({ from: value });
      popover.onClose();

      return;
    }

    const { from, to } = value;

    const dateFrom = from ? format(from, 'MM/dd/yyyy') : null;
    const dateTo = to ? format(to, 'MM/dd/yyyy') : format(from, 'MM/dd/yyyy');

    handleChangeSelection(dateFrom, dateTo);
    setSelected(value);

    if (to) {
      popover.onClose();
    }
  };

  return (
    <Popover
      isLazy={true}
      isOpen={popover.isOpen}
      arrowSize={16}
      strategy="absolute"
      onClose={() => {
        if (onClose) {
          onClose();
        }

        popover.onClose();
      }}>
      <PopoverTrigger>
        <div onClick={popover.onOpen}>{children}</div>
      </PopoverTrigger>
      <PopoverContent bg="white" width="100%" position="relative">
        <PopoverArrow />
        <PopoverCloseButton />
        {header && <PopoverHeader>{header}</PopoverHeader>}

        <PopoverBody>
          <ReactDayPicker
            mode={mode}
            numberOfMonths={2}
            defaultMonth={defaultMonth}
            selected={selected}
            setSelected={onChangeSelection}
            disabled={isPastDay}
          />

          <Text textAlign="right" color="gray.500" fontSize="12px">
            Select a Range of dates
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
});

export default DateRangePickerPopOver;
