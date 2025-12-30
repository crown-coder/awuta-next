// app/seller/[id]/page.tsx
import SellerClient from "./SellerClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function getAllProducts() {
  const res = await fetch(
    "https://lrugfzihdezsucqxheyn.supabase.co/functions/v1/lst",
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id: sellerId } = await params;
  const products = await getAllProducts();

  if (!products)
    return {
      title: "Seller Not Found | Awuta",
    };

  const sellerProducts = products.filter(
    (product: any) => product.seller?.id === sellerId
  );

  if (sellerProducts.length === 0)
    return {
      title: "Seller Not Found | Awuta",
    };

  const seller = sellerProducts[0].seller;
  const sellerName =
    seller.business?.name || `${seller.first_name} ${seller.last_name}`;
  const productCount = sellerProducts.length;

  return {
    title: `${sellerName} | Awuta Seller`,
    description: `Browse ${productCount} premium products from ${sellerName}. Verified seller on Awuta marketplace.`,
    openGraph: {
      title: `${sellerName} | Awuta Seller`,
      description: `Browse ${productCount} premium products from ${sellerName}. Verified seller on Awuta marketplace.`,
      type: "profile",
    },
  };
}

export default async function SellerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: sellerId } = await params;

  const products = await getAllProducts();
  if (!products || products.length === 0) notFound();

  const sellerProducts = products.filter(
    (product: any) => product.seller?.id === sellerId
  );

  if (sellerProducts.length === 0) notFound();

  const seller = sellerProducts[0].seller;

  return <SellerClient seller={seller} products={sellerProducts} />;
}
