import {
  ArrowLeft,
  ShoppingCart,
  Shield,
  Clock,
  MapPin,
  User,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';
import { getAccountById, RentalAccount, ACCOUNTS } from '@/lib/accounts';
import AccountDetailClient from './AccountDetailClient';

// 关键修复：为静态导出配置 generateStaticParams
export async function generateStaticParams() {
  return ACCOUNTS.map((account) => ({
    accountId: account.id,
  }));
}

export default async function AccountDetail({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  const { accountId } = await params;
  const account = getAccountById(accountId) || null;

  if (!account) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-24">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">账号不存在</h1>
          <Link href="/rent" className="text-primary hover:underline">
            返回账号列表
          </Link>
        </div>
      </div>
    );
  }

  return <AccountDetailClient account={account} />;
}
