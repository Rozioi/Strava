export interface VenueImages {
  id: number;
  url: string;
}
export interface IVenue {
  id: string;
  logo: string;
  location: "minsk" | "brest" | "vitebsk" | "gomel" | "grodno" ;
  images: VenueImages[];
  name: string;
  description: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
}
export interface ICategory {
  id: string;
  name: string;
  locationId?: string;
  venueId?: string;
  iconUrl?: string;
  sortOrder: number;
}
export interface IProduct {
  id: string;
  categoryId: string;
  venueId?: string;
  locationId?: string;

  name: string;
  description?: string;
  imageUrl?: string;

  basePrice: number;

  variants: ProductVariant[];

  isAvailable: boolean;
  sortOrder: number;
}
