import { HotelSearchForm } from 'src/types/searchForm';
import { create } from 'zustand';

interface JetsetzState {
  hotelSearchForm?: HotelSearchForm;
  hotelResults?: any;
  updateHotelSearchForm: (hotelSearchForm: HotelSearchForm) => void;
  updateHotelResults: (hotelResults: any[]) => void;
}

export const useHotelStore = create<JetsetzState>(set => ({
  hotelSearchForm: undefined,
  hotelResults: undefined,
  updateHotelSearchForm: (hotelSearchForm: HotelSearchForm) => {
    set({ hotelSearchForm });
  },
  updateHotelResults: (hotelResults: any[]) => {
    set({ hotelResults });
  }
}));
