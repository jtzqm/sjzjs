// 账号租赁 - 类型定义

export interface RentalAccount {
  id: string;                    // 账号编号
  publishDate: string;           // 收号时间（08-11）
  location: string;              // 收用地（福建省）
  server: 'wechat' | 'qq';     // 区服
  loginType: string;             // 账密（账密登录/扫码登录）
  needFaceId: boolean;           // 本人人脸
  rank: string;                  // 段位（铂金/黑鹰等）
  bounty: string;                // 悬赏（不开启/开启）
  pureCoin: number;              // 纯币资产(m)
  ratio: string;                 // 比例（1:44）
  staminaLevel: number;          // 体力等级
  rangeLevel: number;            // 靶场等级
  kd: number;                    // 绝密KD
  helmet6: number;               // 六头
  armor6: number;                // 六甲
  safeBox: string;               // 安全箱（进阶安全箱(2*2)）
  awmAmmo: number;               // awm子弹
  knifeSkin: string;             // 持有刀皮
  operatorSkin: string;          // 干员外观
  brickSkin: string;             // 砖皮
  price: number;                 // 价格（¥364.00）
  originalPrice?: number;        // 原价（划线价）
  deposit: number;               // 押金（¥110.00）
  images: string[];              // 图片列表
  gifts: string;                 // 号主赠送
  notes: string;                 // 备注
  tags: string[];                // 标签（特价/秒杀等）
}

export interface FilterOptions {
  keywords: string;              // 搜索关键词
  timeRange: 'today' | 'week' | 'month';
  location: string;              // 地区
  server: 'wechat' | 'qq' | 'all';
  rank: string;                  // 段位
  priceMin: number;              // 最低价
  priceMax: number;              // 最高价
  pureCoinMin: number;           // 最低纯币
  quickFilter: string;           // 快捷筛选（特价/小额等）
}

export const QUICK_FILTERS = [
  { key: 'instant', name: '人在秒上号', color: 'orange' },
  { key: 'special', name: '特价', color: 'orange' },
  { key: 'small_amount', name: '小额特价', color: 'orange' },
  { key: '9_grid', name: '9格特价', color: 'orange' },
  { key: 'fast_return', name: '快打返现', color: 'orange' },
  { key: 'local', name: '同城号源', color: 'orange' },
  { key: 'resource', name: '资源号租赁', color: 'green' },
  { key: 'night', name: '夜间号源', color: 'gray' },
];

export const ANNOUNCEMENT = {
  title: '准星公告',
  content: '收 AW，平台担保，价格公道，点击咨询',
};
