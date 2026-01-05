import { motion } from 'motion/react';
import { ArrowLeft, Plus, Minus, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../../data/products';

interface ProductDetailPageProps {
  product: Product;
  addToCart: (product: Product, size?: string) => void;
  onBack: () => void;
}

export function ProductDetailPage({ product, addToCart, onBack }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.size || '');

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#79cd47] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-4 py-1 rounded-full text-sm font-semibold capitalize" style={{ backgroundColor: '#79cd4720', color: '#79cd47' }}>
                {product.category}
              </span>
              {product.dietType?.map((type) => (
                <span key={type} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                  {type}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                <span className="ml-2 text-xl font-bold">{product.rating}</span>
                <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-8">{product.description}</p>

            {/* Price */}
            <div className="text-4xl font-bold mb-6" style={{ color: '#fa8906' }}>
              ${product.price}
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Select Size</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedSize === size.size
                          ? 'text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      style={selectedSize === size.size ? { backgroundColor: '#79cd47' } : {}}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#79cd47' }}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
              style={{ backgroundColor: '#fa8906' }}
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </motion.button>

            {/* Ingredients */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="font-semibold text-xl mb-4" style={{ color: '#79cd47' }}>Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span key={ingredient} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutritional Info */}
            {product.nutritionalInfo && (
              <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="font-semibold text-xl mb-4" style={{ color: '#fa8906' }}>Nutritional Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Calories</div>
                    <div className="text-xl font-bold">{product.nutritionalInfo.calories}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Protein</div>
                    <div className="text-xl font-bold">{product.nutritionalInfo.protein}g</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Carbs</div>
                    <div className="text-xl font-bold">{product.nutritionalInfo.carbs}g</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Fat</div>
                    <div className="text-xl font-bold">{product.nutritionalInfo.fat}g</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
