function ProductCard({ product, onAddToCart }) {
    try {
        const handleAddToCart = () => {
            if (onAddToCart) {
                onAddToCart(product);
            }
        };

        return (
            <div data-name="product-card" data-file="components/ProductCard.js" className="bg-gray-800 rounded-lg overflow-hidden product-hover">
                <div className="relative">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    {product.discount && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                            -{product.discount}%
                        </span>
                    )}
                </div>
                
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 truncate">
                        {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            {product.originalPrice && (
                                <span className="text-gray-500 line-through text-sm">
                                    ${product.originalPrice}
                                </span>
                            )}
                            <span className="text-purple-400 font-bold text-lg">
                                ${product.price}
                            </span>
                        </div>
                        
                        <button 
                            onClick={handleAddToCart}
                            className="btn-demon text-white px-4 py-2 rounded text-sm font-medium"
                        >
                            <i className="fas fa-cart-plus mr-2"></i>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
