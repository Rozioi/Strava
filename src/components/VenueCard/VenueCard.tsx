import { useNavigate } from "react-router";
import style from "./VenueCard.module.css";
import type { IVenue } from "../../mock/types";





export const VenueCard = ({ venue }: { venue: IVenue }) => {
  const navigate = useNavigate();

  return (
    <div
      className={style.container}
      onClick={() => navigate(`/venue/${venue.id}`)}
    >
      <div className={style.headerCard}>
        <img
          src={venue.images[0].url}
          alt="Venue Background"
          className={style.backgroundImage}
        />

        <div className={style.logoContainer}>
          <img src={venue.logo} alt="Venue Logo" className={style.logo} />
        </div>
      </div>

      <div className={style.content}>
        <h2 className={style.title}>{venue.name}</h2>
        <p className={style.description}>{venue.description}</p>

        {/*<div className={style.topItemsSection}>
          <h3 className={style.sectionTitle}>🔥 Топ-3 хита</h3>
          <ul className={style.itemsList}>
            {topItems.map((item) => (
              <li key={item.id} className={style.item}>
                <img src={item.image} alt={item.name} className={style.itemImage} />
                <div className={style.itemInfo}>
                  <span className={style.itemName}>{item.name}</span>
                  <span className={style.itemPrice}>{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>*/}
      </div>
    </div>
  );
};
