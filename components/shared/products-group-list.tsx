import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface Props {
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[]; // Определи тип данных для items
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            name={item.name}  // Используем реальные данные из items
            imageUrl={item.imageUrl}  // Используем изображение из items
            price={item.price}  // Цена товара из items
            count={i % 2}  // Если count — это что-то другое, измени логику
          />
        ))}
      </div>
    </div>
  );
};
