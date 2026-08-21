// 商品数据配置 - 纯前端静态数据

export type Category = 'insurance_3x3';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  tags: string[];
  images: string[];
  content: string;
  rules: string;
  orderNotice: string;
  status: 'active' | 'inactive';
  createdAt: number;
  updatedAt: number;
}

export interface CategoryInfo {
  key: Category;
  name: string;
  icon: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    key: 'insurance_3x3',
    name: '3*3 保险',
    icon: '🛡️',
    description: '3*3 模式全程护航',
  },
];

// 静态商品数据
export const PRODUCTS: Product[] = [];

// 获取所有商品
export function getAllProducts(): Product[] {
  return PRODUCTS.filter((p) => p.status === 'active');
}

// 按分类获取商品
export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === category && p.status === 'active',
  );
}

// 根据 ID 获取商品
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
