'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Tag,
  AlertCircle,
  X,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import OrderNotice from '@/components/OrderNotice';
import { ITEM_CATEGORIES, GENERAL_ITEM_NOTICE } from '@/constants/items';

interface ItemCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  order: number;
  enabled: boolean;
}

interface Item {
  id: string;
  name: string;
  category: string;
  game: string;
  price: string;
  originalPrice?: string;
  tag: string;
  image: string;
  enabled: boolean;
  order: number;
  rules: string[];
  instructions: string[];
}

export default function Items() {
  const [categories, setCategories] = useState<ItemCategory[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotice, setShowNotice] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  // 获取分类数据
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/products?type=categories&scope=items', {
          signal,
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          // 添加"全部"选项
          const allCategory: ItemCategory = {
            id: '全部',
            name: '全部',
            icon: '🎯',
            count: data.reduce(
              (sum: number, cat: ItemCategory) => sum + cat.count,
              0,
            ),
            order: -1,
            enabled: true,
          };
          setCategories([allCategory, ...data]);
        }
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error('Fetch categories error:', err);
        }
      }
    };

    fetchCategories();
    return () => {
      controller.abort();
    };
  }, []);

  // 获取商品数据
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchItems = async () => {
      try {
        setLoading(true);
        const url =
          selectedCategory === '全部'
            ? '/api/products?type=items&scope=items'
            : `/api/products?type=items&scope=items&category=${encodeURIComponent(selectedCategory)}`;

        const res = await fetch(url, { signal });
        const data = await res.json();
        if (Array.isArray(data)) {
          setItems(data);
        }
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error('Fetch items error:', err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchItems();
    return () => {
      controller.abort();
    };
  }, [selectedCategory]);

  // 搜索过滤
  const filteredItems = items.filter((item: Item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  // 处理下单
  const handleOrder = (item: Item) => {
    setSelectedItem(item);
    setShowNotice(true);
  };

  // 关闭须知弹窗
  const handleCloseNotice = () => {
    setShowNotice(false);
    setSelectedItem(null);
  };

  // 加载状态
  if (loading && items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-24">
        <p className="text-text-muted">加载中...</p>
      </div>
    );
  }

  // 无商品状态
  if (items.length === 0 && !loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 pb-20 pt-24">
        <div className="text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h2 className="mb-2 text-2xl font-bold text-white">暂无商品</h2>
          <p className="text-text-secondary">
            当前分类下没有找到相关的商品，请尝试其他分类或稍后再来。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
            三角洲行动 - 物品撞车
          </h1>
          <p className="mx-auto max-w-2xl text-text-secondary">
            专业三角洲行动游戏物品交易，安全快捷，即时交付！
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`glass group relative cursor-pointer overflow-hidden rounded-2xl p-4 text-center ${
                selectedCategory === cat.name ? 'border-primary' : ''
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div className="mb-2 text-3xl">{cat.icon}</div>
                <h3 className="text-sm font-bold text-white">{cat.name}</h3>
                <p className="text-xs text-text-muted">{cat.count} 件</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="搜索物品名称..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-text-muted transition-colors focus:border-primary focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass group cursor-pointer overflow-hidden rounded-2xl"
            >
              <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-6xl">🎮</span>
                {item.tag && (
                  <span className="absolute right-3 top-3 rounded-lg bg-primary/80 px-2 py-1 text-xs font-medium text-white">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="mb-1 text-xs text-text-muted">{item.game}</p>
                <h3 className="mb-2 line-clamp-2 font-bold text-white transition-colors group-hover:text-primary">
                  {item.name}
                </h3>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">
                      ¥{item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="ml-2 text-xs text-text-muted line-through">
                        ¥{item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleOrder(item)}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
                >
                  立即下单
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-text-muted">没有找到匹配的物品</p>
            <button
              onClick={() => {
                setSelectedCategory('全部');
                setSearchQuery('');
              }}
              className="mt-4 text-primary hover:underline"
            >
              清除筛选条件
            </button>
          </div>
        )}

        {/* Notice Modal */}
        <AnimatePresence>
          {showNotice && selectedItem && (
            <OrderNotice
              isOpen={showNotice}
              onClose={handleCloseNotice}
              title={GENERAL_ITEM_NOTICE.title}
              rules={[...GENERAL_ITEM_NOTICE.rules, ...selectedItem.rules]}
              instructions={[
                `商品：${selectedItem.name}`,
                `价格：¥${selectedItem.price}`,
                ...GENERAL_ITEM_NOTICE.instructions,
                ...selectedItem.instructions,
              ]}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
