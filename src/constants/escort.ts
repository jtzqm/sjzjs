// 陪玩护航栏目数据配置

export interface EscortCategory {
  id: string
  name: string
  icon: string
  description: string
  rules: string[]
  instructions: string[]
  serviceFlow: string[]
  gradientFrom: string
  gradientTo: string
}

export const ESCORT_CATEGORIES: EscortCategory[] = [
  {
    id: 'peiwang',
    name: '陪玩',
    icon: '🎮',
    description: '专业陪玩陪你畅玩游戏，提升游戏体验',
    gradientFrom: 'from-primary/20',
    gradientTo: 'to-secondary/20',
    rules: [
      '服务时长从订单确认后开始计算，中途不可中断',
      '请确保游戏账号可以正常登录，并提供正确的区服和角色名',
      '陪玩师到达后需在 15 分钟内开始游戏，超时将自动退款',
      '如需更换陪玩师，请在游戏开始前提出',
      '服务结束后请给予评价，好评可获得优惠券',
    ],
    instructions: [
      '下单时请提供您的游戏账号、区服、角色名以及段位目标',
      '请提前准备好游戏所需的所有设备和网络环境',
      '游戏过程中请遵守游戏规则，禁止使用外挂或作弊软件',
      '如有特殊要求（如指定英雄、玩法等），请在备注中说明',
      '客服微信：dagong_service（工作时间 9:00-24:00）',
    ],
    serviceFlow: ['提交需求', '战术沟通', '开始战斗', '结算评价'],
  },
  {
    id: 'huhang',
    name: '护航',
    icon: '🛡️',
    description: '高手护航助你快速上分，安全有保障',
    gradientFrom: 'from-accent/20',
    gradientTo: 'to-primary/20',
    rules: [
      '护航服务按局数或时长计费，具体以订单为准',
      '如护航过程中出现掉线，将在 30 分钟内补时',
      '因玩家原因导致的封号，平台不承担责任',
      '护航师承诺不使用任何外挂，如有违规全额退款',
      '订单完成后不支持中途退款，请谨慎下单',
    ],
    instructions: [
      '请提供完整的账号信息，包括登录方式、区服、角色名等',
      '确保账号处于正常状态，无欠费、无封禁记录',
      '护航期间请勿修改密码或绑定信息，以免影响服务',
      '如需调整目标段位或玩法，请提前与护航师沟通',
      '客服微信：dagong_service（24 小时在线）',
    ],
    serviceFlow: ['下单预约', '战术部署', '执行护航', '成功撤离'],
  },
  {
    id: 'quwei',
    name: '趣味单',
    icon: '🎯',
    description: '趣味挑战任务，让游戏更有趣',
    gradientFrom: 'from-yellow-500/20',
    gradientTo: 'to-orange-500/20',
    rules: [
      '趣味单为特殊玩法订单，规则以具体商品描述为准',
      '订单确认后不可取消，请确认后再下单',
      '如玩家未按要求配合，服务将视为已完成',
      '趣味单完成后将获得额外奖励或优惠券',
      '如有争议，以平台客服判定为准',
    ],
    instructions: [
      '请仔细阅读商品描述，了解具体的玩法和要求',
      '下单时请提供必要的游戏信息和联系方式',
      '参与过程中请保持友好互动，尊重陪玩师和其他玩家',
      '趣味单可能需要多人配合，请确保有时间参与',
      '客服微信：dagong_service（工作时间 10:00-22:00）',
    ],
    serviceFlow: ['选择挑战', '任务确认', '执行挑战', '结算奖励'],
  },
  {
    id: 'dingzhi',
    name: '定制单',
    icon: '✨',
    description: '个性化定制服务，满足你的特殊需求',
    gradientFrom: 'from-pink-500/20',
    gradientTo: 'to-purple-500/20',
    rules: [
      '定制单需先与客服沟通需求，确认方案后再下单',
      '定制订单支持定金制度，定金比例为 50%',
      '如需修改需求，请在服务开始前提出，可能会产生额外费用',
      '定制单完成后如不满意，可在 24 小时内申请修改一次',
      '最终交付物以双方确认为准',
    ],
    instructions: [
      '请详细描述您的需求，包括游戏、玩法、时长、目标等',
      '如有参考图片或视频，请一并提供以便更准确理解需求',
      '定制单价格根据复杂度而定，请以客服报价为准',
      '服务过程中请保持沟通，及时反馈想法和调整建议',
      '客服微信：dagong_service（专属顾问一对一服务）',
    ],
    serviceFlow: ['需求提交', '方案报价', '定金支付', '任务执行', '验收结算'],
  },
]

// 通用订单须知（适用于所有子栏目）
export const GENERAL_NOTICE = `
⚠️ 通用下单须知

1. 请确保游戏账号状态正常，无封禁记录
2. 交易完成后不支持退款，请谨慎下单
3. 发货时间：付款后 1-24 小时内
4. 如遇特殊情况无法发货，将全额退款
5. 请提供正确的游戏区服和角色名
6. 如有问题请联系客服微信：dagong_service
`
