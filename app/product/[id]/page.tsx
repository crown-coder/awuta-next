// app/product/[id]/page.tsx
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

const SUPABASE_PUBLIC_URL =
  "https://lrugfzihdezsucqxheyn.supabase.co/storage/v1/object/public/";

async function getProduct(id: string) {
  const res = await fetch(
    `https://lrugfzihdezsucqxheyn.supabase.co/functions/v1/lst/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return {};

  const image = product.listing_media?.[0]?.path
    ? `${SUPABASE_PUBLIC_URL}/${product.listing_media[0].path}`
    : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop";

  const description =
    product.description ||
    `Buy ${
      product.title
    } for ₦${product.price?.value?.toLocaleString()}. Premium quality verified by Awuta.`;

  const url = `https://awuta.com/product/${id}`;

  return {
    title: `${product.title} | Awuta`,
    description,

    openGraph: {
      title: product.title,
      description,
      url,
      siteName: "Awuta",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description,
      images: [image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return <ProductClient product={product} />;
}
