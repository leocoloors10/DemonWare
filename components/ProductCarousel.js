function ProductCarousel({ products, onAddToCart }) {
    try {
        const [currentIndex, setCurrentIndex] = React.useState(0);
        const itemsPerView = 3;

        const nextSlide = () => {
            setCurrentIndex((prev) => 
                prev + itemsPerView >= products.length ? 0 : prev + itemsPerView
            );
        };

        const prevSlide = () => {
            setCurrentIndex((prev) => 
                prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - itemsPerView
            );
        };

        const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

        return (
            <div data-name="product-carousel" data-file="components/ProductCarousel.js" className="relative">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Productos Destacados</h2>
                    <div className="flex space-x-2">
                        <button 
                            onClick={prevSlide}
                            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visibleProducts.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCarousel component error:', error);
        reportError(error);
    }
}
