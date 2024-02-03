import { getProduct } from "@/app/lib/data";

async function ProductDetails ({ productId }: { productId: string; }) {
  const product = await getProduct({ id: productId });
  return (
    <div>the product details</div>
  )
}

export default ProductDetails;