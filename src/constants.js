export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/#rooms' },
  { name: 'Services', href: '/#services' }, 
  { name: 'Gallery', href: '/#gallery' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];
export const rooms = [
  {
    imageUrl: '/images/small.jpg',
    title: 'Cozy Haven Room',
    description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
    price: '₹1000/night',
  },
  {
    imageUrl: '/images/large.jpg',
    title: 'Spacious Serenity Suite',
    description: 'Ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
    price: '₹1500/night',
  },
  {
    imageUrl: '/images/room1.jpg',
    title: 'Family Room',
    description: 'Our largest room, offering ample space and comfort for the whole family.',
    price: '₹2000/night',
  },
  
];

export const services = [
  {
    icon: '🛡️',
    title: 'High Class Security',
    description: 'Your safety is our priority. We provide top-notch security for a worry-free stay.',
  },
  {
    icon: '🛎️',
    title: '24 Hours Room Service',
    description: 'Our attentive staff is available around the clock to cater to your needs.',
  },
  {
    icon: '🍴',
    title: 'Restaurant',
    description: 'Enjoy a variety of delicious dishes prepared fresh at our in-house restaurant.',
  },
  {
    icon: '🗺️',
    title: 'Tourist Guide Support',
    description: 'We offer assistance and guidance to help you explore the local attractions.',
  },
];

export const galleryImages = [
  // Guest House Category
  { id: 1, src: "/images/out.jpg", category: 'Guest House' },
  { id: 2, src: "/images/service.jpg", category: 'Guest House' },
  { id: 2, src: "/images/recep.jpg", category: 'Guest House' },
  
  // Rooms Category
  { id: 3, src: "/images/small.jpg", category: 'Rooms' },
  { id: 4, src: "/images/room1.jpg", category: 'Rooms' },
  { id: 5, src: "/images/large.jpg", category: 'Rooms' },

  // Scenery Category
  { id: 6, src: "/images/hills.jpg", category: 'Scenery' },
  { id: 7, src: "/images/ayodhya.webp", category: 'Scenery' },
  { id: 8, src: "/images/baranti.webp", category: 'Scenery' },
  { id: 9, src: "/images/flower.jpg", category: 'Scenery' },
  { id: 10, src: "/images/dam.webp", category: 'Scenery' },
  { id: 11, src: "/images/palash.webp", category: 'Scenery' },
];

 // Nearby attractions data
  export const attractions = [
    "Biharinath Hill", "Baranti Hill", "Susunia Hill", 
    "Joychandi Hill", "Garhpanchkot", "Baranti Dam", 
    "Maithon Dam", "Panchat Dam"
  ];

  
  export const highlights = [
    { icon: "🏔️", title: "Scenic Location", description: "Surrounded by majestic hills and dams" },
    { icon: "🌿", title: "Garden Oasis", description: "Verdant garden for relaxation" },
    { icon: "🍽️", title: "Delightful Meals", description: "Authentic local and continental cuisine" },
    { icon: "🏠", title: "Comfortable Stay", description: "Cozy accommodations with modern amenities" }
  ];

  export const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      content: "Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156",
      action: "Get Directions",
      href: "https://maps.app.goo.gl/7HAxWiKVMqSVKrDX6"
    },
    {
      icon: "✉️",
      title: "Email Us",
      content: "kkghosh0099@gmail.com",
      action: "Send Email",
      href: "mailto:kkghosh0099@gmail.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      content: "+91 9007062180",
      action: "Call Now",
      href: "tel:+919007062180"
    }
  ];