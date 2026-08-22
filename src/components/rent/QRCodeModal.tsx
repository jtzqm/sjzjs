'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface QRCodeModalProps {
  isOpen?: boolean; // 将其设为可选，防止调用时报错
  onClose: () => void;
}

export default function QRCodeModal({
  isOpen = true,
  onClose,
}: QRCodeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('dagong_service');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass relative w-full max-w-md rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5 text-text-secondary" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-6 h-32 w-32 rounded-xl bg-white p-2">
                <img
                  src="/api/placeholder/200/200"
                  alt="客服二维码"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">联系客服</h3>
              <p className="mb-6 text-text-muted">扫描二维码添加客服微信</p>

              <div className="glass mb-6 rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span className="font-mono text-lg text-white">
                      dagong_service
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                  >
                    {copied ? '已复制' : '复制'}
                  </button>
                </div>
              </div>

              <p className="text-xs text-text-muted">
                添加客服后，请提供您的订单号或账号信息，我们将尽快为您服务
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
