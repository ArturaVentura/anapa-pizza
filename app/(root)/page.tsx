import { Title, Container, TopBar, Categories } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { categories } from "@/prisma/constants";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg"></Title>
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* {Список товаров} */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
