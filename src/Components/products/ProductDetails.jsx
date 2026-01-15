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

        {/* Product Image */}
        <div className="relative bg-gray-100 dark:bg-slate-800 rounded-2xl p-10">
          <img
            src={image}
            alt={title}
            width={500}
            height={500}
            className="object-contain mx-auto"
          />

          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <span className="text-sm font-medium text-blue-600">
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
              ({reviews} reviews)
            </span>
          </div>

          {/* Price */}
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

          {/* Stock */}
          <p className={`font-medium ${stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
            {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
          </p>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>


          <div className="flex gap-4 pt-4">
            <AddToCart product={product} />
            
            <button className="flex-1 border border-gray-300 dark:border-slate-600 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;