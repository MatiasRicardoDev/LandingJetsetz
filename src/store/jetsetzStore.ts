import { create } from 'zustand';

interface IpInfo {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  timezone: string;
}

interface JetsetzState {
  ipInfo?: IpInfo;
  setIpInfo: (ip: IpInfo) => void;
  currentType: 'FLIGHTS' | 'HOTELS' | 'CARS';
  changeCurrentType: (type: 'FLIGHTS' | 'HOTELS' | 'CARS') => void;
}

export const useJetsetzStore = create<JetsetzState>(set => ({
  currentType: 'FLIGHTS',
  ipInfo: undefined,
  setIpInfo: (ipInfo: IpInfo) => {
    set({ ipInfo });
  },
  changeCurrentType: (currentType: 'FLIGHTS' | 'HOTELS' | 'CARS') => {
    set({ currentType });
  }
}));
