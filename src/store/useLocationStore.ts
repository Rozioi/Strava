import { create } from 'zustand';
import { getDefaultLocationId } from '../constants/location';

interface LocationState {
  locationId: string;
}

interface LocationActions {
  reset: () => void;
  setLocationId: (id: string) => void;
}

export const useLocationStore = create<LocationState & LocationActions>((set) => ({
  locationId: getDefaultLocationId(),

  reset: () => set({ locationId: getDefaultLocationId() }),

  setLocationId: (id: string) => {
    set({ locationId: id });
  },
}));
