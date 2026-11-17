// 站点级配置：联系方式与通用静态资源的唯一来源。

export const SITE_CONFIG = {
  name: '东非电竞',
  wechat: 'dagong_service',
  contactHref: '/contact',
} as const;

export const IMAGES = {
  qrPlaceholder: '/images/qr-placeholder.svg',
  productPlaceholder: '/images/product-placeholder.svg',
} as const;

export interface CustomerService {
  id: number;
  name: string;
  wechat: string;
  qrCode: string;
  status: 'online' | 'offline';
}

export const CUSTOMER_SERVICES: CustomerService[] = [
  { id: 1, name: '客服 1', wechat: 'service_1', qrCode: IMAGES.qrPlaceholder, status: 'online' },
  { id: 2, name: '客服 2', wechat: 'service_2', qrCode: IMAGES.qrPlaceholder, status: 'online' },
  { id: 3, name: '客服 3', wechat: 'service_3', qrCode: IMAGES.qrPlaceholder, status: 'offline' },
];
