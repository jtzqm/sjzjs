'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Shield,
  Target,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

// 部门任务数据
const DEPARTMENT_TASKS = [
  {
    id: 1,
    title: '部门日常任务',
    description: '完成每日部门任务，获取丰厚奖励',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.2)',
  },
  {
    id: 2,
    title: '部门副本挑战',
    description: '组队挑战部门副本，获取稀有物资',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.2)',
  },
  {
    id: 3,
    title: '部门活动参与',
    description: '参与部门专属活动，赢取限定奖励',
    icon: Clock,
    color: 'from-orange-500 to-yellow-500',
    glowColor: 'rgba(249, 115, 22, 0.2)',
  },
];

// 3*3保险数据
const INSURANCE_PLANS = [
  {
    id: 1,
    slots: '3格保险',
    price: '咨询客服',
    features: ['基础保障', '快速匹配', '优先服务'],
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.2)',
  },
  {
    id: 2,
    slots: '5格保险',
    price: '咨询客服',
    features: ['全面保障', '极速匹配', 'VIP服务', '专属客服'],
    color: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.2)',
  },
  {
    id: 3,
    slots: '6格保险',
    price: '咨询客服',
    features: ['极致保障', '秒级匹配', '至尊服务', '一对一客服', '优先通道'],
    color: 'from-purple-500 to-violet-500',
    glowColor: 'rgba(168, 85, 247, 0.2)',
  },
];

// 注意事项数据
const NOTICES = [
  {
    icon: Shield,
    title: '部门任务说明',
    content: '部门任务需要团队成员共同完成，建议组队参与以获得更好的奖励。',
  },
  {
    icon: AlertTriangle,
    title: '保险格数说明',
    content: '保险格数越多，可存放的物资越多，请根据需求选择合适的保险方案。',
  },
  {
    icon: CheckCircle2,
    title: '服务保障',
    content: '所有部门任务和保险服务均由专业团队提供，确保您的游戏体验。',
  },
];

export default function DepartmentTasks() {
  const [activeTab, setActiveTab] = useState<'task' | 'insurance'>('task');

  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* 返回按钮和标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>
          <h1 className="gradient-text mb-4 text-4xl font-bold text-white md:text-5xl">
            部门任务、3*3保险
          </h1>
          <p className="mx-auto max-w-2xl text-text-secondary">
            专业部门任务代做，多种保险方案保障您的游戏物资
          </p>
        </motion.div>

        {/* Tab 切换 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="glass inline-flex gap-2 rounded-2xl p-1.5">
            <button
              onClick={() => setActiveTab('task')}
              className={`rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'task'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Target className="mr-2 inline h-4 w-4" />
              部门任务
            </button>
            <button
              onClick={() => setActiveTab('insurance')}
              className={`rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'insurance'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Shield className="mr-2 inline h-4 w-4" />
              3*3保险
            </button>
          </div>
        </motion.div>

        {/* 部门任务区域 */}
        <AnimatePresence mode="wait">
          {activeTab === 'task' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <h2 className="gradient-text mb-8 text-center text-2xl font-bold">
                📋 部门任务服务
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {DEPARTMENT_TASKS.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass group relative cursor-pointer overflow-hidden rounded-2xl p-8 text-center"
                    style={{ boxShadow: `0 0 30px ${task.glowColor}` }}
                  >
                    {/* 背景渐变 */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${task.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                    />

                    {/* 图标 */}
                    <div
                      className={`relative mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br ${task.color} flex items-center justify-center`}
                    >
                      <task.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* 标题 */}
                    <h3 className="gradient-text mb-2 text-xl font-bold">
                      {task.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-text-secondary">
                      {task.description}
                    </p>

                    {/* 装饰边框 */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary/30`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 保险方案区域 */}
          {activeTab === 'insurance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <h2 className="gradient-text mb-8 text-center text-2xl font-bold">
                🛡️ 保险方案
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {INSURANCE_PLANS.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass group relative cursor-pointer overflow-hidden rounded-2xl p-8 text-center"
                    style={{ boxShadow: `0 0 30px ${plan.glowColor}` }}
                  >
                    {/* 背景渐变 */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                    />

                    {/* 图标 */}
                    <div
                      className={`relative mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                    >
                      <Shield className="h-8 w-8 text-white" />
                    </div>

                    {/* 标题 */}
                    <h3 className="gradient-text mb-2 text-2xl font-bold">
                      {plan.slots}
                    </h3>

                    {/* 价格 */}
                    <p className="mb-4 text-sm text-text-secondary">
                      {plan.price}
                    </p>

                    {/* 功能列表 */}
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 装饰边框 */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary/30`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 注意事项区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="gradient-text mb-8 text-center text-2xl font-bold">
            ⚠️ 注意事项
          </h2>
          <div className="glass space-y-6 rounded-2xl p-8">
            {NOTICES.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500">
                  <notice.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-white">
                    {notice.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {notice.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 底部客服联系 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-text-secondary">还有其他问题？随时联系客服</p>
          <a
            href="mailto:dagong_service"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <CheckCircle2 className="h-5 w-5" />
            联系客服
          </a>
        </motion.div>
      </div>
    </div>
  );
}
