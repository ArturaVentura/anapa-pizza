import { Product, Ingredient, ProductItem, Category } from "@prisma/client";

// Убедитесь, что Category содержит массив products
export type ProductWithRelations = Product & {
  ingredients: Ingredient[];
  items: ProductItem[];
  category: Category & {
    products: Product[]; // Убедитесь, что category содержит products
  };
};
