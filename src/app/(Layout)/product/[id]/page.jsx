import { getSingleProduct } from '@/actions/server/product';
import ProductDetails from '@/Components/products/ProductDetails';



const ProductPage = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);




  return (
    <section>
      <ProductDetails key={product._id} product={product}/>
    </section>
  );
};

export default ProductPage;
