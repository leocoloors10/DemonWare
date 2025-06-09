function Shop({ onAddToCart }) {
    try {
        const [products, setProducts] = React.useState(ProductsData.products);
        const [filteredProducts, setFilteredProducts] = React.useState(ProductsData.products);
        const [searchTerm, setSearchTerm] = React.useState('');
        const [selectedCategory, setSelectedCategory] = React.useState('Todos');
        const [sortBy, setSortBy] = React.useState('name');

        React.useEffect(() => {
            let filtered = products;

            if (selectedCategory !== 'Todos') {
                filtered = filtered.filter(product => product.category === selectedCategory);
            }

            if (searchTerm) {
                filtered = filtered.filter(product => 
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            if (sortBy === 'price-low') {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price-high') {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            } else {
                filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
            }

            setFilteredProducts(filtered);
        }, [products, selectedCategory, searchTerm, sortBy]);

        return (
            <div data-name="shop" data-file="pages/Shop.js" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-white mb-8">Tienda</h1>
                
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500"
                    />
                    
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700"
                    >
                        <option value="Todos">Todas las categorías</option>
                        {ProductsData.categories.map(category => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700"
                    >
                        <option value="name">Ordenar por nombre</option>
                        <option value="price-low">Precio: menor a mayor</option>
                        <option value="price-high">Precio: mayor a menor</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
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
        console.error('Shop component error:', error);
        reportError(error);
    }
}
