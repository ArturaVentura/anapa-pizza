import { ProductWithRelations } from '@/@types/prisma';
import { Container, ProductForm } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
  console.log('Received params:', params); // Логируем все параметры

  const { id } = params;
  
  if (!id || id.trim() === '') {
    throw new Error('Product ID is missing');
  }

  const productId = Number(id);
  
  console.log('Parsed Product ID:', productId); // Логируем преобразованный ID
  if (isNaN(productId)) {
    throw new Error('Invalid product ID');
  }

  const product = await prisma.product.findFirst({
    where: { id: productId },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound(); // Возвращаем 404, если продукт не найден
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product as ProductWithRelations} />
    </Container>
  );
}
