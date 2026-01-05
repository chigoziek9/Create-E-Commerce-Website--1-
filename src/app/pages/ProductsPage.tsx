import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, Star } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductsPageProps {
  products: Product[];
  addToCart: (product: Product, size?: string) => void;
  viewProductDetail: (id: string) => void;
}

export function ProductsPage({ products, addToCart, viewProductDetail }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating'>('popularity');

  const categories = ['all', 'juices', 'smoothies', 'parfaits', 'shawarma', 'salads'];

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      if (sortBy === 'price') return a.price - b.price;
      return b.rating - a.rating;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#79cd47] to-[#fa8906] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="text-2xl opacity-90">Fresh, healthy, and delicious</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">Price: ${priceRange[0]} - ${priceRange[1]}</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={selectedCategory === category ? { backgroundColor: '#79cd47' } : {}}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => viewProductDetail(product.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold shadow-lg" style={{ color: '#fa8906' }}>
                  ${product.price}
                </div>
                {product.dietType && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.dietType.slice(0, 2).map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
                        style={{ color: '#79cd47' }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="ml-1 font-semibold">{product.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#79cd47' }}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-500">No products found matching your criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}