const ProductsData = {
    categories: [
        {
            id: 1,
            name: 'Trajes',
            icon: 'fas fa-tshirt',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
        },
        {
            id: 2,
            name: 'Espadas',
            icon: 'fas fa-sword',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
            id: 3,
            name: 'Posters',
            icon: 'fas fa-image',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
        },
        {
            id: 4,
            name: 'Accesorios',
            icon: 'fas fa-gem',
            image: 'https://images.unsplash.com/photo-1506629905607-d0c2e3f53fde?w=400&h=300&fit=crop'
        },
        {
            id: 5,
            name: 'Figuras',
            icon: 'fas fa-chess-knight',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop'
        }
    ],

    products: [
        {
            id: 1,
            name: 'Traje de Tanjiro Kamado',
            description: 'Réplica oficial del traje de Tanjiro con detalles bordados',
            price: 89.99,
            originalPrice: 120.00,
            discount: 25,
            category: 'Trajes',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
            featured: true
        },
        {
            id: 2,
            name: 'Katana de Tanjiro',
            description: 'Espada réplica de alta calidad con vaina incluida',
            price: 159.99,
            category: 'Espadas',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            featured: true
        },
        {
            id: 3,
            name: 'Poster Demon Slayer Corps',
            description: 'Poster de alta calidad 50x70cm con marco incluido',
            price: 24.99,
            category: 'Posters',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
            featured: true
        },
        {
            id: 4,
            name: 'Collar de Nezuko',
            description: 'Collar réplica con bambú y detalles auténticos',
            price: 34.99,
            category: 'Accesorios',
            image: 'https://images.unsplash.com/photo-1506629905607-d0c2e3f53fde?w=400&h=400&fit=crop'
        },
        {
            id: 5,
            name: 'Figura de Zenitsu',
            description: 'Figura coleccionable de 20cm con base incluida',
            price: 79.99,
            category: 'Figuras',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop'
        },
        {
            id: 6,
            name: 'Haori de Giyu Tomioka',
            description: 'Haori oficial del Pilar del Agua con diseño auténtico',
            price: 69.99,
            originalPrice: 85.00,
            discount: 18,
            category: 'Trajes',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop'
        }
    ],

    getFeaturedProducts: () => {
        return ProductsData.products.filter(product => product.featured);
    },

    getProductsByCategory: (categoryName) => {
        return ProductsData.products.filter(product => product.category === categoryName);
    },

    searchProducts: (query) => {
        return ProductsData.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    }
};
