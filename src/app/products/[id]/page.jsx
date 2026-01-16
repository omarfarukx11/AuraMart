import { getSingleProduct } from "@/actions/server/product";
import ProductDetails from "@/Components/products/ProductDetails";


export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | AuraMart",
      description: "The product you are looking for is currently unavailable.",
    };
  }

  return {
    title: `${product.title} | AuraMart`,
    description: product.description?.slice(0, 160) || "Modern shopping experience.",
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://aura-mart-five.vercel.app/products/${id}`,
      siteName: "AuraMart",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

const ProductPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <section>
      <ProductDetails key={product?._id} product={product} />
    </section>
  );
};

export default ProductPage;