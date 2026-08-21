// 物品撞车栏目数据配置 - 三角洲行动游戏

export type ItemCategoryKey =
  'ammo' | 'loot' | 'haffcoin' | 'event' | 'upgrade';

// 子栏目类型定义
export interface ItemCategory {
  id: ItemCategoryKey;
  name: string;
  icon: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

// 商品类型定义
export interface ItemProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: ItemCategoryKey;
  tags: string[];
  images: string[];
  rules: string[];
  instructions: string[];
  status: 'active' | 'inactive';
  order: number;
}

// 5个子栏目配置
export const ITEM_CATEGORIES: ItemCategory[] = [
  {
    id: 'ammo',
    name: '装备子弹',
    icon: '🔫',
    description: '各类武器弹药、配件',
    gradientFrom: 'from-orange-500/20',
    gradientTo: 'to-red-500/20',
  },
  {
    id: 'loot',
    name: '搜集品',
    icon: '📦',
    description: '稀有搜集物品、材料',
    gradientFrom: 'from-green-500/20',
    gradientTo: 'to-emerald-500/20',
  },
  {
    id: 'haffcoin',
    name: '哈夫币',
    icon: '💰',
    description: '游戏内哈夫币交易',
    gradientFrom: 'from-yellow-500/20',
    gradientTo: 'to-amber-500/20',
  },
  {
    id: 'event',
    name: '活动限定',
    icon: '🎁',
    description: '限时活动专属物品',
    gradientFrom: 'from-pink-500/20',
    gradientTo: 'to-purple-500/20',
  },
  {
    id: 'upgrade',
    name: '特勤处升级',
    icon: '⬆️',
    description: '特勤处等级提升服务',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-cyan-500/20',
  },
];

// 商品数据（示例，后期可替换为真实数据）
export const ITEM_PRODUCTS: ItemProduct[] = [
  // ========== 装备子弹类 ==========
  {
    id: 'ammo-001',
    name: 'M4A1 5.56mm 弹匣 x30',
    price: 15.0,
    originalPrice: 20.0,
    category: 'ammo',
    tags: ['热门'],
    images: ['/placeholder.png'],
    rules: [
      '弹药类商品为虚拟物品，下单后即时交付',
      '请提供正确的游戏账号和区服信息',
    ],
    instructions: ['确保账号状态正常，无封禁记录', '交付时间：下单后30分钟内'],
    status: 'active',
    order: 1,
  },
  {
    id: 'ammo-002',
    name: 'AWM 反器材子弹 x10',
    price: 45.0,
    category: 'ammo',
    tags: ['稀有'],
    images: ['/placeholder.png'],
    rules: ['高价值弹药需实名验证', '仅限高级用户购买'],
    instructions: ['需提供游戏ID和区服', '交付时间：下单后1小时内'],
    status: 'active',
    order: 2,
  },
  {
    id: 'ammo-003',
    name: '穿甲弹 PKL x50',
    price: 28.0,
    category: 'ammo',
    tags: ['特价'],
    images: ['/placeholder.png'],
    rules: ['限时特价商品，售完即止', '不可与其他优惠叠加'],
    instructions: ['自动发货，无需提供账号', '请在背包中查收'],
    status: 'active',
    order: 3,
  },

  // ========== 搜集品类 ==========
  {
    id: 'loot-001',
    name: '机密文件 x5（搜集品）',
    price: 35.0,
    category: 'loot',
    tags: ['热门'],
    images: ['/placeholder.png'],
    rules: ['稀有搜集品，库存有限', '交付后不可退款'],
    instructions: ['请提供收货地址或游戏内交易码', '交付时间：下单后2小时内'],
    status: 'active',
    order: 4,
  },
  {
    id: 'loot-002',
    name: '古董花瓶（完整）',
    price: 128.0,
    originalPrice: 158.0,
    category: 'loot',
    tags: ['稀有', '特价'],
    images: ['/placeholder.png'],
    rules: ['高价值物品需身份验证', '支持平台担保交易'],
    instructions: ['客服将与您确认收货方式', '建议购买运输保险'],
    status: 'active',
    order: 5,
  },
  {
    id: 'loot-003',
    name: '军事地图碎片 x3',
    price: 18.0,
    category: 'loot',
    tags: ['活动'],
    images: ['/placeholder.png'],
    rules: ['限时活动商品', '每人限购2份'],
    instructions: ['集齐3片可兑换完整地图', '请在备注中注明收集进度'],
    status: 'active',
    order: 6,
  },

  // ========== 哈夫币类 ==========
  {
    id: 'haffcoin-001',
    name: '哈夫币 100万',
    price: 58.0,
    category: 'haffcoin',
    tags: ['热门'],
    images: ['/placeholder.png'],
    rules: ['汇率实时波动，以下单时为准', '支持多种支付方式'],
    instructions: ['请提供游戏账号和区服', '交付时间：下单后15分钟内'],
    status: 'active',
    order: 7,
  },
  {
    id: 'haffcoin-002',
    name: '哈夫币 500万（批量优惠）',
    price: 268.0,
    originalPrice: 320.0,
    category: 'haffcoin',
    tags: ['特价', '批量'],
    images: ['/placeholder.png'],
    rules: ['批量购买享9折优惠', '单笔最大限额1000万'],
    instructions: ['大额交易需实名认证', '支持分期交付'],
    status: 'active',
    order: 8,
  },
  {
    id: 'haffcoin-003',
    name: '哈夫币 1000万（VIP专享）',
    price: 498.0,
    category: 'haffcoin',
    tags: ['VIP'],
    images: ['/placeholder.png'],
    rules: ['仅限VIP用户购买', '需验证VIP身份'],
    instructions: ['专属客服一对一服务', '优先交付，10分钟内到账'],
    status: 'active',
    order: 9,
  },

  // ========== 活动限定类 ==========
  {
    id: 'event-001',
    name: '七夕限定皮肤礼包',
    price: 88.0,
    originalPrice: 128.0,
    category: 'event',
    tags: ['限时', '特价'],
    images: ['/placeholder.png'],
    rules: ['限时活动商品，活动结束后恢复原价', '每人限购1份'],
    instructions: ['自动发放至账号', '请在活动期间内领取'],
    status: 'active',
    order: 10,
  },
  {
    id: 'event-002',
    name: '周年庆专属武器箱钥匙 x3',
    price: 68.0,
    category: 'event',
    tags: ['稀有'],
    images: ['/placeholder.png'],
    rules: ['周年庆限定商品', '库存有限，售完即止'],
    instructions: ['开箱概率已公示', '客服将提供开箱指导'],
    status: 'active',
    order: 11,
  },
  {
    id: 'event-003',
    name: '节日限定头像框',
    price: 28.0,
    category: 'event',
    tags: ['限定'],
    images: ['/placeholder.png'],
    rules: ['节日限定，过期不补', '不可交易'],
    instructions: ['自动绑定至账号', '永久有效'],
    status: 'active',
    order: 12,
  },

  // ========== 特勤处升级类 ==========
  {
    id: 'upgrade-001',
    name: '特勤处 Lv.1 → Lv.5 升级',
    price: 45.0,
    category: 'upgrade',
    tags: ['热门'],
    images: ['/placeholder.png'],
    rules: ['需账号全程授权', '升级期间账号不可登录'],
    instructions: ['请提供账号密码和验证码接收方式', '预计耗时：2-3小时'],
    status: 'active',
    order: 13,
  },
  {
    id: 'upgrade-002',
    name: '特勤处 Lv.5 → Lv.10 升级',
    price: 88.0,
    originalPrice: 120.0,
    category: 'upgrade',
    tags: ['特价'],
    images: ['/placeholder.png'],
    rules: ['需完成指定任务副本', '包含专属奖励领取'],
    instructions: ['高级服务，需提前预约', '专属客服全程跟进'],
    status: 'active',
    order: 14,
  },
  {
    id: 'upgrade-003',
    name: '特勤处满级冲刺（Lv.1 → Lv.MAX）',
    price: 268.0,
    category: 'upgrade',
    tags: ['VIP', '全包'],
    images: ['/placeholder.png'],
    rules: ['全包服务，含所有任务副本', '支持退款（未完成满级）'],
    instructions: ['VIP专属服务，优先安排', '预计耗时：1-2天'],
    status: 'active',
    order: 15,
  },
];

// 通用订单须知（所有品类统一）
export const GENERAL_ITEM_NOTICE = {
  title: '物品撞车订单须知',
  rules: [
    '所有商品为虚拟物品，下单后不可退款',
    '请确保游戏账号信息准确无误',
    '交付时间一般为下单后30分钟内，高峰期可能延长',
    '如遇游戏版本更新导致商品失效，将全额退款或更换等值商品',
    '客服微信：dagong_service（工作时间 9:00-24:00）',
  ],
  instructions: [
    '下单时请提供：游戏账号、区服、角色名',
    '请勿在交付期间修改密码或绑定信息',
    '如有特殊需求请在备注中说明',
    '订单完成后请给予评价，好评可获得优惠券',
  ],
};

// 根据分类获取商品
export function getProductsByCategory(
  category: ItemCategoryKey,
): ItemProduct[] {
  return ITEM_PRODUCTS.filter(
    (p) => p.category === category && p.status === 'active',
  ).sort((a, b) => a.order - b.order);
}

// 根据 ID 获取商品
export function getProductById(id: string): ItemProduct | undefined {
  return ITEM_PRODUCTS.find((p) => p.id === id);
}
