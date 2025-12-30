// app/products/page.tsx
import ProductsClient from "./ProductsClient";
import type { Metadata } from "next";

async function getProducts() {
  const res = await fetch(
    "https://lrugfzihdezsucqxheyn.supabase.co/functions/v1/lst",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load products");

  return res.json(); // Product[]
}

export const metadata: Metadata = {
  title: "Products | Awuta",
  description: "Browse verified premium products from trusted sellers",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsClient products={products} />;
}
