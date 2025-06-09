function Home({ onAddToCart }) {
    try {
        const [featuredProducts] = React.useState(ProductsData.getFeaturedProducts());
        const [categories] = React.useState(ProductsData.categories);

        const handleCategoryClick = (category) => {
            window.dispatchEvent(new CustomEvent('navigate', { 
                detail: { page: 'shop', filter: category.name } 
            }));
        };

        return (
            <div data-name="home" data-file="pages/Home.js">
                <Banner />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <ProductCarousel products={featuredProducts} onAddToCart={onAddToCart} />
                    
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Categorías
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {categories.map((category) => (
                                <CategoryCard 
                                    key={category.id} 
                                    category={category} 
                                    onClick={handleCategoryClick}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Ofertas Especiales
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {ProductsData.products
                                .filter(product => product.discount)
                                .map((product) => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        onAddToCart={onAddToCart}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
    }
}
