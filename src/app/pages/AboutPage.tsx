import { motion } from 'motion/react';
import { Leaf, Award, Heart, Users, Target, Eye } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'We source from local organic farms and use eco-friendly packaging to protect our planet.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health First',
      description: 'Every product is crafted with your wellness in mind, using only natural ingredients.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We believe in building a community of health-conscious individuals.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'We never compromise on quality. Every ingredient is carefully selected.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#79cd47] to-[#fa8906] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About FreshHub</h1>
            <p className="text-2xl md:text-3xl opacity-90">
              Your Partner in Healthy Living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#79cd47' }}>
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                FreshHub was born from a simple idea: make healthy eating delicious, accessible, and sustainable. Founded in 2018, we started as a small juice bar with a big dream - to revolutionize how people think about nutrition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we serve thousands of happy customers daily, offering everything from freshly pressed juices to wholesome meals. Our commitment to quality has never wavered, and we continue to source only the finest organic ingredients from local farms.
              </p>
              <p className="text-lg text-gray-700">
                Every product we create is a labor of love, designed to nourish your body and delight your taste buds. We're not just a juice bar - we're a movement towards healthier, more sustainable living.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#79cd47' }}>
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#79cd47' }}>
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                To provide fresh, natural, and delicious products that promote healthy living while maintaining environmental sustainability. We strive to make nutritious eating accessible and enjoyable for everyone, one product at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#fa8906' }}>
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#fa8906' }}>
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To become the leading destination for health-conscious individuals seeking premium, organic products. We envision a world where healthy eating is the norm, not the exception, and where sustainability drives every business decision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#79cd47' }}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: idx % 2 === 0 ? '#79cd4720' : '#fa890620' }}
                >
                  <div style={{ color: idx % 2 === 0 ? '#79cd47' : '#fa8906' }}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#79cd47' }}>
              Farm to Table
            </h2>
            <p className="text-xl text-gray-600">
              We source directly from local organic farms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: '100% Organic',
                description: 'All our fruits and vegetables are certified organic',
                image: 'https://images.unsplash.com/photo-1697479815895-23ea2934711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGRyaW5rfGVufDF8fHx8MTc2Njc0MTM0NHww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                title: 'Fresh Daily',
                description: 'We receive fresh produce every morning',
                image: 'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                title: 'Local Farms',
                description: 'Supporting local agriculture and reducing carbon footprint',
                image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#79cd47' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#79cd47' }}>
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence in quality and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Organic Certified', 'Health Star Rating', 'Green Business', 'Customer Choice'].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <Award className="w-12 h-12 mx-auto mb-4" style={{ color: idx % 2 === 0 ? '#79cd47' : '#fa8906' }} />
                <div className="font-semibold">{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
