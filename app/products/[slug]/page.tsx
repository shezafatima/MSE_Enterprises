import { notFound } from "next/navigation";
import ProductForm from "@/app/components/ProductForm";
import products from "../../data/products.json";
import Image from "next/image";


interface ProductParams {
  slug: string;
}


interface ProductPageProps {
  params: Promise<ProductParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; 
}

export async function generateStaticParams(): Promise<ProductParams[]> {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
 
  const awaitedParams = await params;
  const product = products.find((p) => p.slug === awaitedParams.slug);

  if (!product) return notFound();

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
        <div>
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-500 mb-6">{product.fullDescription}</p>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <ProductForm product={product.title} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2 text-orange-600">
          Application Overview
        </h2>
        <p className="text-gray-400">{product.applicationOverview}</p>
      </div>
    </section>
  );
}