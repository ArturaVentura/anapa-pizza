import { Ingredient,Product,ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {Items: ProductItem[]; Ingredient: Ingredient[] };