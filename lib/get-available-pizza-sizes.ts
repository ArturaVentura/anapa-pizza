import { ProductItem } from '@prisma/client';

import { Variant } from '../components/shared/group-variants';
import { pizzaSizes, PizzaType } from '@/components/constants/pizza';

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item: { name: any; value: any; }) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};