export type Product = {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
};

export type FilterProduct = 'ALL' | 'REDEEMED' | 'EARNED';
