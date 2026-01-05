import { useRef } from 'react';
import Slider from 'react-slick';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Leaf, Heart, Award, ArrowRight, Droplet, Apple, Coffee, Salad, UtensilsCrossed, Eye } from 'lucide-react';
import { productsData, testimonials } from '../../data/products';

interface HomePageProps {
  onNavigate: (page: string) => void;
  viewProductDetail: (id: string) => void;
}

const heroSlides = [
  {
    flavor: 'Orange',
    title: 'Fresh Orange Delight',
    description: 'Pure sunshine in every sip. Packed with Vitamin C and natural goodness.',
    color: '#f99212',
    image: 'https://images.unsplash.com/photo-1697479815895-23ea2934711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGRyaW5rfGVufDF8fHx8MTc2Njc0MTM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    flavor: 'Pineapple',
    title: 'Tropical Paradise',
    description: 'Escape to the tropics with our sweet and tangy pineapple blend.',
    color: '#fbbf24',
    image: 'https://images.unsplash.com/photo-1665582513044-376da77ebec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lYXBwbGUlMjBqdWljZSUyMHRyb3BpY2FsfGVufDF8fHx8MTc2Njc1OTIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    flavor: 'Strawberry',
    title: 'Berry Fresh Smoothie',
    description: 'Indulge in the sweet taste of fresh strawberries blended to perfection.',
    color: '#ef4444',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    flavor: 'Apple',
    title: 'Crisp Apple Blast',
    description: 'Refreshing green apple juice that keeps you energized all day long.',
    color: '#7fc94e',
    image: 'https://images.unsplash.com/photo-1640039269847-f462c3406c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGp1aWNlJTIwZnJlc2h8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HomePage({ onNavigate, viewProductDetail }: HomePageProps) {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
  };

  const featuredProducts = productsData.filter(p => p.popularity > 85).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[600px] md:h-[700px]">
              <div
                className="absolute inset-0 transition-all duration-1000"
                style={{
                  background: `linear-gradient(135deg, ${slide.color}20 0%, ${slide.color}40 100%)`,
                }}
              />
              
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left z-10"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                      style={{ backgroundColor: `${slide.color}20`, color: slide.color }}
                    >
                      {slide.flavor} Flavor
                    </motion.span>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-5xl md:text-7xl font-bold mb-6"
                      style={{ color: slide.color }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-xl md:text-2xl text-gray-700 mb-8"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onNavigate('products')}
                      className="px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                      style={{ backgroundColor: slide.color }}
                    >
                      Order Now
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="relative w-full h-[400px] md:h-[500px]">
                      <motion.img
                        src={slide.image}
                        alt={slide.flavor}
                        className="w-full h-full object-cover rounded-3xl shadow-2xl"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Floating badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="absolute -bottom-4 -right-4 bg-white rounded-full p-6 shadow-2xl"
                      >
                        <div className="text-center">
                          <div className="text-3xl font-bold" style={{ color: slide.color }}>
                            100%
                          </div>
                          <div className="text-sm text-gray-600">Natural</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Mission & Vision Section */}
      <section
        ref={missionRef}
        className="py-20 bg-gradient-to-br from-green-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#7fc94e' }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At RootsnJuices, we believe in delivering pure, natural nutrition that energizes your body and delights your taste buds. Every product we create is a testament to our commitment to quality, freshness, and sustainability.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We source only the finest organic ingredients, ensuring that every sip and bite contributes to your wellness journey. Our mission is simple: make healthy eating delicious and accessible to everyone.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <Leaf className="w-8 h-8 mx-auto mb-2" style={{ color: '#7fc94e' }} />
                  <div className="text-2xl font-bold" style={{ color: '#7fc94e' }}>100%</div>
                  <div className="text-sm text-gray-600">Organic</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <Heart className="w-8 h-8 mx-auto mb-2" style={{ color: '#f99212' }} />
                  <div className="text-2xl font-bold" style={{ color: '#f99212' }}>5000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                >
                  <Award className="w-8 h-8 mx-auto mb-2" style={{ color: '#7fc94e' }} />
                  <div className="text-2xl font-bold" style={{ color: '#7fc94e' }}>15+</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1697479815895-23ea2934711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGRyaW5rfGVufDF8fHx8MTc2Njc0MTM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={missionInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${idx === 1 || idx === 2 ? 'mt-8' : ''}`}
                >
                  <img
                    src={img}
                    alt="Fresh products"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Vision"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f9921220' }}>
                  <Eye className="w-8 h-8" style={{ color: '#f99212' }} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#f99212' }}>
                  Our Vision
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                To become the leading destination for health-conscious individuals seeking premium, organic products. We envision a world where healthy eating is the norm, not the exception, and where sustainability drives every business decision.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                We're building a future where every meal is a celebration of natural flavors, where communities thrive on wholesome nutrition, and where our planet is protected through conscious choices. Join us in creating a healthier, happier world—one delicious bite at a time.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Expand Accessibility', description: 'Bring healthy options to every neighborhood' },
                  { title: 'Zero Waste Goal', description: 'Achieve 100% sustainable packaging by 2026' },
                  { title: 'Community Impact', description: 'Support local farmers and create jobs' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#f99212' }} />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#7fc94e' }}>
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Explore our diverse range of fresh and healthy options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: 'Juices',
                icon: <Droplet className="w-12 h-12" />,
                color: '#f99212',
                image: 'https://images.unsplash.com/photo-1697479815895-23ea2934711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGRyaW5rfGVufDF8fHx8MTc2Njc0MTM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
                count: productsData.filter(p => p.category === 'juices').length,
              },
              {
                name: 'Smoothies',
                icon: <Coffee className="w-12 h-12" />,
                color: '#7fc94e',
                image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                count: productsData.filter(p => p.category === 'smoothies').length,
              },
              {
                name: 'Parfaits',
                icon: <Coffee className="w-12 h-12" />,
                color: '#ef4444',
                image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                count: productsData.filter(p => p.category === 'parfaits').length,
              },
              {
                name: 'Shawarma',
                icon: <UtensilsCrossed className="w-12 h-12" />,
                color: '#fbbf24',
                image: 'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                count: productsData.filter(p => p.category === 'shawarma').length,
              },
              {
                name: 'Salads',
                icon: <Salad className="w-12 h-12" />,
                color: '#7fc94e',
                image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                count: productsData.filter(p => p.category === 'salads').length,
              },
            ].map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                onClick={() => onNavigate('products')}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div style={{ color: category.color }}>
                        {category.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{category.count}</div>
                        <div className="text-xs opacity-90">Items</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl" style={{ color: category.color }}>
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              style={{ backgroundColor: '#7fc94e' }}
            >
              Explore All Categories
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#7fc94e' }}>
              Best Sellers
            </h2>
            <p className="text-xl text-gray-600">
              Try our most popular products loved by thousands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold" style={{ color: '#f99212' }}>
                    ${product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-sm">{product.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold hover:shadow-lg transition-shadow"
                      style={{ backgroundColor: '#7fc94e' }}
                    >
                      View
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#f99212' }}
            >
              View All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#7fc94e' }}>
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7fc94e] to-[#f99212] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Stay Fresh with Our Newsletter</h2>
            <p className="text-xl mb-8 opacity-90">
              Get exclusive offers, recipes, and health tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-[#7fc94e] rounded-full font-semibold hover:shadow-lg transition-shadow">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}