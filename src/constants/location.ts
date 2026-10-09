export interface LocationData {
  id: string;
  name: string;
}

export const LOCATIONS: LocationData[] = [
  { id: 'minsk', name: 'Минск' },
  { id: 'brest', name: 'Брест' },
  { id: 'grodno', name: 'Гродно' },
  { id: 'vitebsk', name: 'Витебск' },
  { id: 'gomel', name: 'Гомель' },
];

export const getLocationById = (id: string) =>
  LOCATIONS.find(loc => loc.id === id);

export const getDefaultLocationId = () => 'minsk';
