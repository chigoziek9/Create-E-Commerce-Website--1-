// Product data store for the juice and health food website

export interface Product {
  id: string;
  name: string;
  category: 'juices' | 'smoothies' | 'parfaits' | 'shawarma' | 'salads';
  description: string;
  price: number;
  sizes?: { size: string; price: number }[];
  image: string;
  ingredients: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  dietType?: string[];
  popularity: number;
  rating: number;
  reviews: number;
}

export const productsData: Product[] = [
  // Juices
  {
    id: 'j1',
    name: 'Fresh Orange Juice',
    category: 'juices',
    description: 'Pure, freshly squeezed orange juice packed with vitamin C',
    price: 4.99,
    sizes: [
      { size: '250ml', price: 4.99 },
      { size: '500ml', price: 7.99 },
      { size: '1L', price: 12.99 },
    ],
    image: 'https://images.unsplash.com/photo-1697479815895-23ea2934711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGRyaW5rfGVufDF8fHx8MTc2Njc0MTM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Fresh Oranges'],
    nutritionalInfo: { calories: 112, protein: 2, carbs: 26, fat: 0.5 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 95,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 'j2',
    name: 'Tropical Pineapple',
    category: 'juices',
    description: 'Sweet and tangy pineapple juice for a tropical treat',
    price: 5.49,
    sizes: [
      { size: '250ml', price: 5.49 },
      { size: '500ml', price: 8.49 },
      { size: '1L', price: 13.99 },
    ],
    image: 'https://images.unsplash.com/photo-1665582513044-376da77ebec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lYXBwbGUlMjBqdWljZSUyMHRyb3BpY2FsfGVufDF8fHx8MTc2Njc1OTIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Fresh Pineapple', 'Lime'],
    nutritionalInfo: { calories: 132, protein: 1, carbs: 32, fat: 0.3 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 88,
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 'j3',
    name: 'Green Apple Blast',
    category: 'juices',
    description: 'Crisp and refreshing green apple juice',
    price: 4.79,
    sizes: [
      { size: '250ml', price: 4.79 },
      { size: '500ml', price: 7.79 },
      { size: '1L', price: 12.49 },
    ],
    image: 'https://images.unsplash.com/photo-1640039269847-f462c3406c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGp1aWNlJTIwZnJlc2h8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Green Apples', 'Mint'],
    nutritionalInfo: { calories: 95, protein: 0.5, carbs: 24, fat: 0.2 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 82,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 'j4',
    name: 'Carrot Ginger Boost',
    category: 'juices',
    description: 'Energizing blend of carrots and fresh ginger',
    price: 5.99,
    sizes: [
      { size: '250ml', price: 5.99 },
      { size: '500ml', price: 9.49 },
      { size: '1L', price: 14.99 },
    ],
    image: 'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Carrots', 'Ginger', 'Lemon'],
    nutritionalInfo: { calories: 88, protein: 1.5, carbs: 20, fat: 0.3 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 75,
    rating: 4.5,
    reviews: 98,
  },

  // Smoothies
  {
    id: 's1',
    name: 'Berry Blast Smoothie',
    category: 'smoothies',
    description: 'Mixed berries blended with banana and yogurt',
    price: 6.99,
    sizes: [
      { size: '12oz', price: 6.99 },
      { size: '16oz', price: 8.99 },
      { size: '24oz', price: 11.99 },
    ],
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Strawberries', 'Blueberries', 'Banana', 'Greek Yogurt', 'Honey'],
    nutritionalInfo: { calories: 245, protein: 8, carbs: 48, fat: 3 },
    dietType: ['Vegetarian', 'Gluten-Free'],
    popularity: 92,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 's2',
    name: 'Tropical Paradise',
    category: 'smoothies',
    description: 'Mango, pineapple, and coconut smoothie',
    price: 7.49,
    sizes: [
      { size: '12oz', price: 7.49 },
      { size: '16oz', price: 9.49 },
      { size: '24oz', price: 12.49 },
    ],
    image: 'https://images.unsplash.com/photo-1665582513044-376da77ebec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lYXBwbGUlMjBqdWljZSUyMHRyb3BpY2FsfGVufDF8fHx8MTc2Njc1OTIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Mango', 'Pineapple', 'Coconut Milk', 'Banana'],
    nutritionalInfo: { calories: 280, protein: 3, carbs: 52, fat: 7 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 89,
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 's3',
    name: 'Green Power Smoothie',
    category: 'smoothies',
    description: 'Spinach, kale, and apple for ultimate nutrition',
    price: 7.99,
    sizes: [
      { size: '12oz', price: 7.99 },
      { size: '16oz', price: 9.99 },
      { size: '24oz', price: 12.99 },
    ],
    image: 'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Spinach', 'Kale', 'Green Apple', 'Banana', 'Almond Milk'],
    nutritionalInfo: { calories: 195, protein: 5, carbs: 38, fat: 4 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 78,
    rating: 4.6,
    reviews: 145,
  },

  // Parfaits
  {
    id: 'p1',
    name: 'Greek Yogurt Parfait',
    category: 'parfaits',
    description: 'Layers of Greek yogurt, granola, and fresh berries',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Greek Yogurt', 'Granola', 'Strawberries', 'Blueberries', 'Honey'],
    nutritionalInfo: { calories: 320, protein: 15, carbs: 48, fat: 8 },
    dietType: ['Vegetarian'],
    popularity: 85,
    rating: 4.7,
    reviews: 178,
  },
  {
    id: 'p2',
    name: 'Acai Bowl',
    category: 'parfaits',
    description: 'Brazilian superfood bowl with granola and fruits',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Acai', 'Banana', 'Granola', 'Strawberries', 'Coconut Flakes'],
    nutritionalInfo: { calories: 385, protein: 6, carbs: 58, fat: 15 },
    dietType: ['Vegan'],
    popularity: 91,
    rating: 4.9,
    reviews: 289,
  },

  // Shawarma
  {
    id: 'sh1',
    name: 'Chicken Shawarma',
    category: 'shawarma',
    description: 'Tender spiced chicken wrapped in fresh pita',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1698413463629-64bfcea157ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwanVpY2UlMjBiYXJ8ZW58MXx8fHwxNzY2NzU5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Chicken', 'Pita Bread', 'Tahini', 'Vegetables', 'Spices'],
    nutritionalInfo: { calories: 485, protein: 32, carbs: 48, fat: 18 },
    dietType: ['High-Protein'],
    popularity: 94,
    rating: 4.8,
    reviews: 412,
  },
  {
    id: 'sh2',
    name: 'Falafel Shawarma',
    category: 'shawarma',
    description: 'Crispy falafel with hummus and fresh veggies',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Falafel', 'Pita Bread', 'Hummus', 'Lettuce', 'Tomato', 'Cucumber'],
    nutritionalInfo: { calories: 420, protein: 18, carbs: 55, fat: 14 },
    dietType: ['Vegan', 'Vegetarian'],
    popularity: 87,
    rating: 4.7,
    reviews: 298,
  },

  // Salads
  {
    id: 'sl1',
    name: 'Mediterranean Salad',
    category: 'salads',
    description: 'Fresh greens with feta, olives, and olive oil',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Mixed Greens', 'Feta Cheese', 'Olives', 'Tomatoes', 'Cucumbers', 'Olive Oil'],
    nutritionalInfo: { calories: 285, protein: 12, carbs: 18, fat: 19 },
    dietType: ['Vegetarian', 'Gluten-Free'],
    popularity: 83,
    rating: 4.6,
    reviews: 201,
  },
  {
    id: 'sl2',
    name: 'Caesar Salad',
    category: 'salads',
    description: 'Classic Caesar with romaine, parmesan, and croutons',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Romaine Lettuce', 'Parmesan', 'Croutons', 'Caesar Dressing'],
    nutritionalInfo: { calories: 320, protein: 14, carbs: 22, fat: 20 },
    dietType: ['Vegetarian'],
    popularity: 90,
    rating: 4.7,
    reviews: 245,
  },
  {
    id: 'sl3',
    name: 'Quinoa Power Bowl',
    category: 'salads',
    description: 'Nutritious quinoa with roasted vegetables',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjY3NTkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ingredients: ['Quinoa', 'Roasted Vegetables', 'Chickpeas', 'Tahini Dressing'],
    nutritionalInfo: { calories: 395, protein: 16, carbs: 52, fat: 14 },
    dietType: ['Vegan', 'Gluten-Free'],
    popularity: 79,
    rating: 4.8,
    reviews: 167,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    content: 'The best juice bar in town! Fresh ingredients and amazing flavors. My go-to post-workout spot!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Health Coach',
    content: 'I recommend this place to all my clients. The nutritional information is transparent and the quality is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Busy Professional',
    content: 'Perfect for a quick, healthy lunch! The shawarma is delicious and the salads are always fresh.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Yoga Instructor',
    content: 'Love the green smoothies! They give me the energy I need for my morning classes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
];
