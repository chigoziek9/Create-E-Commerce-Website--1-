import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Trash2, Edit, X } from 'lucide-react';
import { Product } from '../../data/products';

interface AdminDashboardProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export function AdminDashboard({ products, setProducts }: AdminDashboardProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'juices',
    description: '',
    price: 0,
    image: '',
    ingredients: [],
    popularity: 50,
    rating: 4.5,
    reviews: 0,
  });

  const handleAddProduct = () => {
    const product: Product = {
      id: `new-${Date.now()}`,
      name: newProduct.name || 'New Product',
      category: newProduct.category as any,
      description: newProduct.description || '',
      price: newProduct.price || 0,
      image: newProduct.image || 'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?w=500',
      ingredients: newProduct.ingredients || [],
      popularity: newProduct.popularity || 50,
      rating: newProduct.rating || 4.5,
      reviews: newProduct.reviews || 0,
    };
    
    setProducts([...products, product]);
    setShowAddModal(false);
    setNewProduct({
      name: '',
      category: 'juices',
      description: '',
      price: 0,
      image: '',
      ingredients: [],
      popularity: 50,
      rating: 4.5,
      reviews: 0,
    });
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const categories = ['juices', 'smoothies', 'parfaits', 'shawarma', 'salads'];
  const productsByCategory = categories.map(cat => ({
    category: cat,
    products: products.filter(p => p.category === cat),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#79cd47] to-[#fa8906] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-xl opacity-90">Manage your products</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-white text-[#79cd47] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </motion.button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Products', value: products.length, color: '#79cd47' },
            { label: 'Juices', value: products.filter(p => p.category === 'juices').length, color: '#fa8906' },
            { label: 'Smoothies', value: products.filter(p => p.category === 'smoothies').length, color: '#79cd47' },
            { label: 'Salads', value: products.filter(p => p.category === 'salads').length, color: '#fa8906' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-gray-600 mb-2">{stat.label}</div>
              <div className="text-4xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Products by Category */}
        {productsByCategory.map((group) => (
          <div key={group.category} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 capitalize" style={{ color: '#79cd47' }}>
              {group.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                        <Edit className="w-5 h-5" style={{ color: '#79cd47' }} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xl" style={{ color: '#fa8906' }}>
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        ⭐ {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowAddModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold" style={{ color: '#79cd47' }}>Add New Product</h2>
              <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
                  placeholder="Fresh Orange Juice"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="capitalize">{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent resize-none"
                  placeholder="Describe your product..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Popularity (0-100)</label>
                  <input
                    type="number"
                    value={newProduct.popularity}
                    onChange={(e) => setNewProduct({ ...newProduct, popularity: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Image URL</label>
                <input
                  type="text"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Ingredients (comma separated)</label>
                <input
                  type="text"
                  onChange={(e) => setNewProduct({ ...newProduct, ingredients: e.target.value.split(',').map(i => i.trim()) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79cd47] focus:border-transparent"
                  placeholder="Orange, Honey, Ginger"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-100 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="flex-1 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#79cd47' }}
                >
                  Add Product
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
