import { CarSearchForm } from 'src/types/searchForm';
import { create } from 'zustand';

interface JetsetzState {
  carSearchForm?: CarSearchForm;
  carResults?: any;
  updateCarSearchForm: (carSearchForm: CarSearchForm) => void;
  updateCarResults: (carResults: any[]) => void;
}

export const useCarStore = create<JetsetzState>(set => ({
  carSearchForm: undefined,
  carResults: undefined,
  updateCarSearchForm: (carSearchForm: CarSearchForm) => {
    set({ carSearchForm });
  },
  updateCarResults: (carResults: any[]) => {
    set({ carResults });
  }
}));
