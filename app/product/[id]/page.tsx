// app/product/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

/* 🔥 WHATSAPP / FACEBOOK / TWITTER PREVIEW */
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct(params.id);
  if (!product) return {};

  const image = product.listing_media?.[0]?.path
    ? `${SUPABASE_PUBLIC_URL}${product.listing_media[0].path}`
    : "https://awuta-landing-beta.netlify.app/placeholder-image.png";

  const description =
    product.description ||
    `Buy ${product.title} for ₦${product.price?.value?.toLocaleString()}`;

  const url = `https://awuta-landing-beta.netlify.app/product/${product.id}`;

  return {
    title: product.title,
    description,

    openGraph: {
      title: product.title,
      description,
      url,
      siteName: "Awuta Marketplace",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
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
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="py-8">
      <ProductClient product={product} />
    </div>
  );
}
