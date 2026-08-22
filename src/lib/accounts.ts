// 账号租赁 - 静态示例数据（纯前端展示）

export interface RentalAccount {
  id: string;
  publishDate: string;
  location: string;
  server: 'wechat' | 'qq';
  loginType: string;
  needFaceId: boolean;
  rank: string;
  bounty: string;
  pureCoin: number;
  ratio: string;
  staminaLevel: number;
  rangeLevel: number;
  kd: number;
  helmet6: number;
  armor6: number;
  safeBox: string;
  awmAmmo: number;
  knifeSkin: string;
  operatorSkin: string;
  brickSkin: string;
  price: number;
  originalPrice?: number;
  deposit: number;
  images: string[];
  gifts: string;
  notes: string;
  tags: string[];
}

export const QUICK_FILTERS = [
  { key: 'instant', name: '人在秒上号', color: 'orange' },
  { key: 'special', name: '特价', color: 'orange' },
  { key: 'small_amount', name: '小额特价', color: 'orange' },
  { key: '9_grid', name: '9格特价', color: 'orange' },
  { key: 'fast_return', name: '快打返现', color: 'orange' },
];

// 静态账号数据
export const ACCOUNTS: RentalAccount[] = [
  {
    id: 'acc-1',
    publishDate: '08-18',
    location: '福建省',
    server: 'wechat',
    loginType: '账密登录',
    needFaceId: true,
    rank: '铂金',
    bounty: '不开启',
    pureCoin: 160,
    ratio: '1:44',
    staminaLevel: 6,
    rangeLevel: 6,
    kd: 0.5,
    helmet6: 2,
    armor6: 3,
    safeBox: '进阶安全箱(2*2)',
    awmAmmo: 10,
    knifeSkin: '',
    operatorSkin: '壮志凌云',
    brickSkin: '',
    price: 364.0,
    originalPrice: 373,
    deposit: 110.0,
    images: [],
    gifts: '仓库所有的6套和awm',
    notes: '收藏室不要动，全装包不',
    tags: ['特价'],
  },
  {
    id: 'acc-2',
    publishDate: '08-17',
    location: '浙江省',
    server: 'wechat',
    loginType: '账密登录',
    needFaceId: true,
    rank: '钻石',
    bounty: '不开启',
    pureCoin: 280,
    ratio: '1:42',
    staminaLevel: 8,
    rangeLevel: 7,
    kd: 1.2,
    helmet6: 4,
    armor6: 5,
    safeBox: '高级安全箱(3*3)',
    awmAmmo: 15,
    knifeSkin: '火龙翔天',
    operatorSkin: '雷霆战机',
    brickSkin: '黄金麒麟',
    price: 520.0,
    originalPrice: 580,
    deposit: 150.0,
    images: [],
    gifts: '限定皮肤3件+AWM天龙',
    notes: '可小刀，爽快包邮',
    tags: ['秒杀'],
  },
  {
    id: 'acc-3',
    publishDate: '08-16',
    location: '广东省',
    server: 'qq',
    loginType: '扫码登录',
    needFaceId: false,
    rank: '传奇',
    bounty: '开启',
    pureCoin: 520,
    ratio: '1:46',
    staminaLevel: 10,
    rangeLevel: 9,
    kd: 2.8,
    helmet6: 6,
    armor6: 6,
    safeBox: '终极安全箱(4*4)',
    awmAmmo: 20,
    knifeSkin: '修罗',
    operatorSkin: '暗影猎手',
    brickSkin: '冰霜巨龙',
    price: 880.0,
    originalPrice: 950,
    deposit: 200.0,
    images: [],
    gifts: '全皮肤+绝版道具',
    notes: '高端账号，支持任何鉴定',
    tags: ['特价', '秒杀'],
  },
];

// 获取所有账号
export function getAllAccounts(): RentalAccount[] {
  return ACCOUNTS;
}

// 根据 ID 获取账号
export function getAccountById(id: string): RentalAccount | undefined {
  return ACCOUNTS.find((a) => a.id === id);
}

// 搜索账号
export function searchAccounts(keywords: string): RentalAccount[] {
  if (!keywords) return ACCOUNTS;
  const lower = keywords.toLowerCase();
  return ACCOUNTS.filter(
    (a) =>
      a.location.toLowerCase().includes(lower) ||
      a.rank.toLowerCase().includes(lower) ||
      a.tags.some((t) => t.toLowerCase().includes(lower)),
  );
}

// 按快捷筛选获取账号
export function getAccountsByQuickFilter(filter: string): RentalAccount[] {
  if (filter === 'all') return ACCOUNTS;
  if (filter === 'special')
    return ACCOUNTS.filter((a) => a.tags.includes('特价'));
  if (filter === 'instant') return ACCOUNTS.filter((a) => !a.needFaceId);
  return ACCOUNTS;
}
