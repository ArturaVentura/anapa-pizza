"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface CountButtonProps {
  value?: number;
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: (type: 'plus' | 'minus') => void; // Добавляем onClick
}

export const CountButton: React.FC<CountButtonProps> = ({
  className,
  value = 1,
  size = 'sm',
  onClick, // Принимаем onClick
}) => {
  return (
    <div className={cn('inline-flex items-center justify-between gap-3', className)}>
      <Button
        variant="outline"
        onClick={() => onClick?.('minus')} // Вызываем onClick с 'minus'
        className={cn(
          'p-0 hover:bg-primary hover:text-white',
          size === 'sm' ? 'w-[30px] h-[30px] rounded-sm' : 'w-[38px] h-[38px] rounded-se-md',
        )}>
        <Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
      </Button>
      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>
      <Button
        variant="outline"
        onClick={() => onClick?.('plus')} // Вызываем onClick с 'plus'
        className={cn(
          'p-0 hover:bg-primary hover:text-white',
          size === 'sm' ? 'w-[30px] h-[30px] rounded-sm' : 'w-[38px] h-[38px] rounded-md',
        )}>
        <Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
      </Button>
    </div>
  );
};
