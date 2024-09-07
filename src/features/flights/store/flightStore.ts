import { FlightSearchForm } from 'src/types/searchForm';
import { create } from 'zustand';
import zustymiddlewarets from 'zustymiddlewarets';

interface JetsetzState {
  flightSearchForm?: FlightSearchForm;
  flightResults?: any;
  updateFlightSearchForm: (flightSearchForm: FlightSearchForm) => void;
  updateFlightResults: (flightResults: any[]) => void;
}

export const useFlightStore = create<JetsetzState>(set => ({
  flightSearchForm: undefined,
  flightResults: undefined,
  updateFlightSearchForm: (flightSearchForm: FlightSearchForm) => {
    set({ flightSearchForm });
  },
  updateFlightResults: (flightResults: any[]) => {
    set({ flightResults });
  }
}));
