import Image from 'next/image';
import AddToCart from '../AddToCard/AddToCard';

const ProductDetails = async ({ product }) => {
  if (!product || !product.title) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-xl font-semibold">Product not found</h2>
      </div>
    );
  }

  const {
    title,
    price,
    oldPrice,
    category,
    rating,
    reviews,
    stock,
    image,
    description,
  } = product;

  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <section className="container mx-auto px-6 py-32 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="relative bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden w-full aspect-square">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />

          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
              -{discount}%
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <span className="text-sm font-bold uppercase  text-blue-600">
            {category}
          </span>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {title}
          </h1>

          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < Math.round(rating) ? 'opacity-100' : 'opacity-30'}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {reviews}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            {oldPrice && (
              <span className="text-lg line-through text-gray-400">
                ${oldPrice}
              </span>
            )}
          </div>

          <p className={`font-medium ${stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
            {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>

          <div className="flex gap-4 pt-4">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;