import {Product} from '../../models/Product';

export const mockProduct: Product = {
  createdAt: '2022-01-01T12:00:00Z',
  product: 'Product Name',
  points: 100,
  image: 'https://example.com/image.png',
  is_redemption: false,
  id: 'abc123',
};

export const mockProducts: Product[] = [
  {
    createdAt: '2022-01-01T12:00:00Z',
    product: 'Product Name',
    points: 100,
    image: 'https://example.com/image.png',
    is_redemption: false,
    id: 'abc123',
  },
  {
    createdAt: '2022-01-01T12:00:00Z',
    product: 'Product Name 2',
    points: 200,
    image: 'https://example.com/image2.png',
    is_redemption: true,
    id: 'abc1234',
  },
  {
    createdAt: '2022-01-01T12:00:00Z',
    product: 'Product Name 3',
    points: 300,
    image: 'https://example.com/image3.png',
    is_redemption: true,
    id: 'abc12345',
  },
];
