import { backButton } from "@tma.js/sdk-react";
import { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./Venue.module.css";
import { categories, products, venues } from "../../mock/data";
import type { IProduct } from "../../mock/types";

const Venue = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const venue = venues.find((v) => v.id === id);

  const venueCategories = useMemo(() =>
    categories.filter(c => c.venueId === id).sort((a, b) => a.sortOrder - b.sortOrder),
  [id]);

  const [activeTabId, setActiveTabId] = useState<string | null>(() => {
    return venueCategories.length > 0 ? venueCategories[0].id : null;
  });

  useEffect(() => {
    const firstCategoryId = venueCategories[0]?.id ?? null;
    if (firstCategoryId && !venueCategories.some(c => c.id === activeTabId)) {
      setActiveTabId(firstCategoryId);
    }
  }, [id, venueCategories]);

  useEffect(() => {
    if (tabsContainerRef.current && activeTabId) {
      requestAnimationFrame(() => {
        const activeTab = tabsContainerRef.current?.querySelector(`.${styles.tabActive}`);
        activeTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    }
  }, [activeTabId]);

  const activeProducts: IProduct[] = useMemo(() =>
    products.filter(p => p.categoryId === activeTabId).sort((a, b) => a.sortOrder - b.sortOrder),
  [activeTabId]);

  useEffect(() => {
    backButton.mount();
    const handlerBack = () => navigate(-1);
    backButton.show();
    backButton.onClick(handlerBack);
    return () => {
      backButton.hide();
      backButton.offClick(handlerBack);
      backButton.unmount();
    };
  }, [navigate]);

  if (!venue) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={venue.images[activeIndex]?.url} alt="Venue" className={styles.backgroundImage} />
        <div className={styles.listImage}>
          {venue.images.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.imageInList} ${index === activeIndex ? styles.active : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image.url} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{venue.name}</h1>
        <p className={styles.description}>{venue.description}</p>

        <div className={styles.tabsContainer} ref={tabsContainerRef}>
          {venueCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTabId === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTabId(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className={styles.productsList}>
          {activeProducts.length > 0 ? (
            activeProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                {product.imageUrl && (
                  <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                )}
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  {product.description && <p className={styles.productDesc}>{product.description}</p>}
                  <div className={styles.productFooter}>
                    {product.variants.length > 0 ? (
                      <span className={styles.priceRange}>
                        от {Math.min(...product.variants.map(v => v.price)).toFixed(2)} BYN
                      </span>
                    ) : (
                      <span className={styles.price}>{product.basePrice.toFixed(2)} BYN</span>
                    )}
                    <button className={styles.addButton}>+</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.emptyState}>В этой категории пока пусто 😔</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Venue;
