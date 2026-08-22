// 跑刀代肝栏目数据配置

export interface BoosterProduct {
  id: string;
  name: string;
  specs: string;
  price: string;
  tier: string;
  imagePrompt: string;
  isPlaceholder: boolean;
  giftTag?: string;
}

export interface BoosterCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  products: BoosterProduct[];
}

export const BOOSTER_GROUPS = [
  {
    id: 'booster',
    name: '跑刀代肝',
    categories: ['baoxian'],
  },
]

export const BOOSTER_CATEGORIES: BoosterCategory[] = [
  {
    id: 'baoxian',
    name: '3*3保险',
    icon: '🔒',
    description: '安全保险服务，保障账号资产安全',
    gradientFrom: 'from-green-500/20',
    gradientTo: 'to-emerald-500/20',
    products: [
      {
        id: 'baoxian-urgent-6x9',
        name: '加急单 - 6/9格保险',
        specs: '优先处理 · 快速响应',
        price: '¥45/1000万',
        tier: 'urgent',
        imagePrompt: 'A tactical military operation scene from Delta Force game, soldiers conducting stealth raid mission at night, green night vision tint, tactical gear and equipment, cinematic lighting, 8k detailed game wallpaper, dramatic atmosphere',
        isPlaceholder: false,
        giftTag: '加急',
      },
      {
        id: 'baoxian-urgent-2x4',
        name: '加急单 - 2/4格保险',
        specs: '优先处理 · 快速响应',
        price: '¥50/1000万',
        tier: 'urgent',
        imagePrompt: 'A tactical military operation scene from Delta Force game, soldiers conducting stealth raid mission at night, green night vision tint, tactical gear and equipment, cinematic lighting, 8k detailed game wallpaper, dramatic atmosphere',
        isPlaceholder: false,
        giftTag: '加急',
      },
      {
        id: 'baoxian-normal-6x9',
        name: '常规单 - 6/9格保险',
        specs: '标准处理 · 性价比高',
        price: '¥40/1000万',
        tier: 'normal',
        imagePrompt: 'A tactical military operation scene from Delta Force game, soldiers conducting stealth raid mission at night, green night vision tint, tactical gear and equipment, cinematic lighting, 8k detailed game wallpaper, dramatic atmosphere',
        isPlaceholder: false,
      },
      {
        id: 'baoxian-normal-2x4',
        name: '常规单 - 2/4格保险',
        specs: '标准处理 · 性价比高',
        price: '¥45/1000万',
        tier: 'normal',
        imagePrompt: 'A tactical military operation scene from Delta Force game, soldiers conducting stealth raid mission at night, green night vision tint, tactical gear and equipment, cinematic lighting, 8k detailed game wallpaper, dramatic atmosphere',
        isPlaceholder: false,
      },
    ],
  },
]

// 赠送活动数据
export const GIFT_ACTIVITIES = [
  {
    id: 'gift-1',
    minAmount: '5000万',
    gift: '个人黑哥哥祝福语视频',
    icon: '🎁',
  },
  {
    id: 'gift-2',
    minAmount: '3亿',
    gift: '三人黑哥哥举牌视频',
    icon: '🎉',
  },
  {
    id: 'gift-3',
    minAmount: '5亿',
    gift: '5人以上黑哥哥举牌视频',
    icon: '🎊',
  },
]

// 注意事项规则
export const BOOSTER_NOTICE = {
  title: '账号代练须知',
  rules: [
    '黑哥哥跑刀可以解决200T，匹配池黑等等轻度账号问题。',
    '个别账号（高危，刚被追缴，未满级，存在大额撞车记录等）会出现频繁掉号情况，此为正常现象，不必担心，约登录3次左右就不会再出现。',
    '为了确保您的账号安全，请确定您的腾讯游戏安全中心信任设备只有包含我方设备在内的3个设备。',
  ],
  instructions: [
    '下单时请提供您的游戏账号、区服、角色名以及所需服务类型',
    '客服微信：dagong_service（工作时间 9:00-24:00）',
  ],
}
