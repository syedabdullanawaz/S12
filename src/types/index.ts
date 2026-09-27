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
