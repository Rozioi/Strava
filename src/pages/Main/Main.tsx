import { useMemo, useState } from "react";
import { VenueCard } from "../../components/VenueCard/VenueCard";
import { useLocationStore } from "../../store/useLocationStore";
import { Modal } from "../../components/Modal/Modal";
import { venues } from "../../mock/data";
import { getLocationById, LOCATIONS } from "../../constants/location";

import styles from "./Main.module.css";


const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { locationId, setLocationId } = useLocationStore();

  const venuesFilter = useMemo(() => {
    return venues.filter(v => v.location === locationId);
  }, [locationId]);

  const handleSelect = (id: string) => {
    setLocationId(id);
    setTimeout(() => setIsOpen(false), 500);
  };

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.locationTrigger}
        onClick={() => setIsOpen(true)}
      >
         {getLocationById(locationId)?.name || 'Выберите город'}
      </div>

      <div className={styles.listVenue}>
        {venuesFilter.length > 0 ? (
          venuesFilter.map((venue) => (
            <VenueCard venue={venue} key={venue.id} />
          ))
        ) : (
          <p className={styles.emptyMessage}>Мы пока не работаем тут(</p>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Ваш город">
        <div className={styles.citiesGrid}>
          {LOCATIONS.map((city) => (
            <div
              key={city.id}
              className={`${styles.cityOption} ${
                locationId === city.id ? styles.active : ''
              }`}
              onClick={() => handleSelect(city.id)}
            >
              {city.name}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Main;
