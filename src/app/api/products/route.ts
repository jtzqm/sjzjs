import { NextRequest, NextResponse } from 'next/server';
import { CATEGORIES, PRODUCTS, getProductsByCategory } from '@/lib/products';
import {
  ITEM_CATEGORIES,
  ITEM_PRODUCTS,
  GENERAL_ITEM_NOTICE,
} from '@/constants/items';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const category = searchParams.get('category');
  const scope = searchParams.get('scope'); // 'insurance' | 'items'

  try {
    if (type === 'categories') {
      // 根据 scope 返回不同品类的分类
      if (scope === 'items') {
        const categories = ITEM_CATEGORIES.map((cat, index) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon,
          count: ITEM_PRODUCTS.filter(
            (p) => p.category === cat.id && p.status === 'active',
          ).length,
          order: index,
          enabled: true,
        }));
        return NextResponse.json(categories);
      }
      // 默认返回保险分类
      const categories = CATEGORIES.map((cat, index) => ({
        id: cat.key,
        name: cat.name,
        icon: cat.icon,
        count: PRODUCTS.filter(
          (p) => p.category === cat.key && p.status === 'active',
        ).length,
        order: index,
        enabled: true,
      }));
      return NextResponse.json(categories);
    }

    if (type === 'items') {
      // 物品撞车品类
      if (scope === 'items') {
        let itemsToReturn;

        if (category && category !== '全部') {
          itemsToReturn = ITEM_PRODUCTS.filter(
            (p) => p.category === category && p.status === 'active',
          );
        } else {
          itemsToReturn = ITEM_PRODUCTS.filter((p) => p.status === 'active');
        }

        const items = itemsToReturn.map((p, index) => ({
          id: p.id,
          name: p.name,
          category: p.category,
          game: '三角洲行动',
          price: p.price.toString(),
          originalPrice: p.originalPrice?.toString(),
          tag: p.tags[0] || '热门',
          image: p.images[0] || '/placeholder.png',
          enabled: true,
          order: index,
          rules: p.rules,
          instructions: p.instructions,
        }));

        return NextResponse.json(items);
      }

      // 保险品类（原有逻辑）
      let itemsToReturn;

      if (category && category !== '全部') {
        itemsToReturn = getProductsByCategory(category as any);
      } else {
        itemsToReturn = PRODUCTS.filter((p) => p.status === 'active');
      }

      const items = itemsToReturn.map((p, index) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        game: '通用',
        price: p.price.toString(),
        tag: p.tags[0] || '热门',
        image: p.images[0] || '/placeholder.png',
        enabled: true,
        order: index,
      }));

      return NextResponse.json(items);
    }

    if (type === 'notices') {
      const notices: Record<string, any> = {
        insurance_3x3: {
          rules: ['规则1', '规则2'],
          instructions: ['步骤1', '步骤2'],
        },
        // 物品撞车通用须知
        items: GENERAL_ITEM_NOTICE,
      };
      return NextResponse.json(notices);
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
