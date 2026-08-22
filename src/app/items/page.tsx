'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import OrderNotice from '@/components/OrderNotice';
import {
  ITEM_CATEGORIES,
  getProductsByCategory,
  GENERAL_ITEM_NOTICE,
} from '@/constants/items';

export default function Items() {
  const [activeTab, setActiveTab] = useState<
    'ammo' | 'loot' | 'haffcoin' | 'event' | 'upgrade'
  >('ammo');
  const [showNotice, setShowNotice] = useState(false);

  // 获取当前分类的商品列表
  const currentProducts = getProductsByCategory(activeTab);
  const activeCategory = ITEM_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* 返回按钮和标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            物品撞车
          </h1>
          <p className="mx-auto max-w-2xl text-text-secondary">
            专业团队为您提供各类游戏物资服务，安全高效，值得信赖
          </p>
        </motion.div>

        {/* Tab 切换 - 网格卡片布局 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-5"
        >
          {ITEM_CATEGORIES.map((category, index) => {
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`glass group relative cursor-pointer overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 ${
                  isActive ? 'border-primary' : ''
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center text-4xl">
                    {category.icon}
                  </div>
                  <h3 className="font-int mb-1 text-lg font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="text-xs text-text-muted">
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* 当前分类描述 */}
        {activeCategory && (
          <motion.p
            key={`desc-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-6 text-text-muted"
          >
            {activeCategory.description}
          </motion.p>
        )}

        {/* 商品网格 */}
        <motion.div
          key={`grid-${activeTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-primary/50"
              >
                {/* 商品图片 */}
                <div className="relative mb-4 overflow-hidden rounded-xl bg-white/5">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* 标签 */}
                  {product.tags.length > 0 && (
                    <div className="absolute right-2 top-2 flex gap-1">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-primary/90 px-2 py-1 text-xs font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* 商品信息 */}
                <h3 className="mb-2 text-xl font-bold text-white">
                  {product.name}
                </h3>

                {/* 价格展示 - 咨询客服 */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    咨询客服
                  </span>
                </div>

                {/* 标签列表 */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 下单按钮 */}
                <button
                  onClick={() => setShowNotice(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  立即下单
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* 无商品提示 */}
          {currentProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center"
            >
              <p className="text-lg text-text-muted">该分类暂无商品</p>
            </motion.div>
          )}
        </motion.div>

        {/* 底部说明 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm text-text-secondary">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span>所有服务均由专业团队提供，资金托管担保交易</span>
          </div>
        </motion.div>
      </div>

      {/* 订单须知弹窗 */}
      <OrderNotice
        isOpen={showNotice}
        onClose={() => setShowNotice(false)}
        title={GENERAL_ITEM_NOTICE.title}
        rules={[...GENERAL_ITEM_NOTICE.rules]}
        instructions={[...GENERAL_ITEM_NOTICE.instructions]}
      />
    </div>
  );
}
