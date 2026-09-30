export interface ServiceItem {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  category: 'skincare' | 'body' | 'hair';
  rating: number;
  idealFor: string;
  involved: {
    title: string;
    description: string;
  }[];
  images: string[];
  featured?: boolean;
  currency?: string;
}

export interface ServiceCategory {
  id: 'all' | 'skincare' | 'body' | 'hair';
  title: string;
  count: number;
  description: string;
  subDescription: string;
  bgImage: string;
  iconType: 'cross' | 'square-grid' | 'circle';
}

export interface CategoryModalServiceItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  gender: 'women' | 'men' | 'all';
  description?: string;
}

export interface CategoryModalSubCategory {
  id: string;
  title: string;
  items: CategoryModalServiceItem[];
}

export interface CategoryModalData {
  id: string;
  name: string;
  title: string;
  count: string;
  rating: number;
  description: string;
  images: string[];
  subCategories: CategoryModalSubCategory[];
}
