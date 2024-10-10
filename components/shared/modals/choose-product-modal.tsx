"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { Title } from "../title";
import { ProductWithRelations } from "@/@types/prisma";
import { ChooseProductForm } from "../choose-product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ProductForm } from "../product-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
