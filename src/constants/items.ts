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
    description: '各类武器装备与弹药补给',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-orange-500',
  },
  {
    id: 'loot',
    name: '搜集品',
    icon: '📦',
    description: '稀有搜集物资与收藏品',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-500',
  },
  {
    id: 'haffcoin',
    name: '哈夫币',
    icon: '💰',
    description: '游戏内哈夫币交易服务',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-amber-500',
  },
  {
    id: 'event',
    name: '活动限定',
    icon: '🎁',
    description: '限时活动专属物资与奖励',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
  },
  {
    id: 'upgrade',
    name: '特勤处升级',
    icon: '⬆️',
    description: '特勤处等级提升服务',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
  },
];

// 商品数据（示例，后期可替换为真实数据）
export const ITEM_PRODUCTS: ItemProduct[] = [
  // 装备子弹
  {
    id: 'ammo-1',
    name: '装备子弹套餐',
    price: 0,
    category: 'ammo',
    tags: ['热门'],
    images: ['/api/placeholder/400/300'],
    rules: [
      '请提供准确的账号信息和游戏区服',
      '武器装备需符合游戏安全规范',
      '下单后24小时内完成配送',
    ],
    instructions: [
      '确保账号处于正常状态，无违规记录',
      '武器装备类型请在备注中说明',
      '如有特殊需求请提前联系客服沟通',
    ],
    status: 'active',
    order: 1,
  },
  // 搜集品
  {
    id: 'loot-1',
    name: '搜集品服务',
    price: 0,
    category: 'loot',
    tags: ['稀有'],
    images: ['/api/placeholder/400/300'],
    rules: [
      '搜集品类型需在备注中注明',
      '部分稀有物品可能需要定制服务',
      '交付时间根据物品稀有度而定',
    ],
    instructions: [
      '请确认所需搜集品的具体名称和数量',
      '稀有物品可能需要额外等待时间',
      '交付方式通过游戏内交易或邮寄',
    ],
    status: 'active',
    order: 1,
  },
  // 哈夫币
  {
    id: 'haffcoin-1',
    name: '哈夫币服务',
    price: 0,
    category: 'haffcoin',
    tags: ['热销'],
    images: ['/api/placeholder/400/300'],
    rules: [
      '请提供准确的账号信息',
      '哈夫币数量需在备注中注明',
      '交易时间一般为下单后1-2小时',
    ],
    instructions: [
      '请确认所需哈夫币的具体数量',
      '大额交易可能需要分批次交付',
      '交易完成后请确认收货',
    ],
    status: 'active',
    order: 1,
  },
  // 活动限定
  {
    id: 'event-1',
    name: '活动限定物资',
    price: 0,
    category: 'event',
    tags: ['限时'],
    images: ['/api/placeholder/400/300'],
    rules: [
      '活动限定物品需在活动期间内下单',
      '部分物品可能需要额外条件解锁',
      '活动结束后将无法补购',
    ],
    instructions: [
      '请确认当前正在进行的活动名称',
      '了解活动规则和参与条件',
      '建议尽早下单避免错过活动时间',
    ],
    status: 'active',
    order: 1,
  },
  // 特勤处升级
  {
    id: 'upgrade-1',
    name: '特勤处升级服务',
    price: 0,
    category: 'upgrade',
    tags: ['专业'],
    images: ['/api/placeholder/400/300'],
    rules: [
      '请提供准确的账号信息和当前等级',
      '升级目标需在备注中注明',
      '升级时间根据目标等级而定',
    ],
    instructions: [
      '请确认特勤处当前等级和目标等级',
      '升级过程中需要配合完成部分任务',
      '升级完成后将提供详细报告',
    ],
    status: 'active',
    order: 1,
  },
];

// 通用订单须知（所有品类统一）
export const GENERAL_ITEM_NOTICE = {
  title: '物品撞车订单须知',
  rules: [
    '请确保提供的账号信息准确无误',
    '下单后请保持联系方式畅通',
    '如有特殊情况请及时联系客服处理',
  ],
  instructions: [
    '所有服务均由专业团队提供，保障您的游戏体验',
    '交易过程全程托管，资金安全有保障',
    '7×24小时客服在线，快速响应您的需求',
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
