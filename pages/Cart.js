function Cart({ user }) {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [total, setTotal] = React.useState(0);

        React.useEffect(() => {
            const items = CartUtils.getCart();
            setCartItems(items);
            setTotal(CartUtils.getCartTotal());
        }, []);

        const updateQuantity = (productId, quantity) => {
            const result = CartUtils.updateQuantity(productId, quantity);
            if (result.success) {
                setCartItems(CartUtils.getCart());
                setTotal(CartUtils.getCartTotal());
            }
        };

        const removeItem = (productId) => {
            const result = CartUtils.removeFromCart(productId);
            if (result.success) {
                setCartItems(result.cart);
                setTotal(CartUtils.getCartTotal());
            }
        };

        const handleCheckout = () => {
            alert('Procesando compra...');
            CartUtils.clearCart();
            setCartItems([]);
            setTotal(0);
        };

        if (!user) {
            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Inicia sesión para ver tu carrito</h2>
                    <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'auth' } }))}
                        className="btn-demon text-white px-6 py-3 rounded-lg"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            );
        }

        return (
            <div data-name="cart" data-file="pages/Cart.js" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-white mb-8">Mi Carrito</h1>
                
                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <i className="fas fa-shopping-cart text-6xl text-gray-500 mb-4"></i>
                        <p className="text-gray-400 text-xl">Tu carrito está vacío</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-gray-800 rounded-lg p-4 mb-4 flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-white font-semibold">{item.name}</h3>
                                        <p className="text-purple-400">${item.price}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="bg-gray-700 text-white px-2 py-1 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="text-white px-3">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="bg-gray-700 text-white px-2 py-1 rounded"
                                        >
                                            +
                                        </button>
                                        <button 
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-400 ml-4"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg p-6 h-fit">
                            <h3 className="text-xl font-bold text-white mb-4">Resumen</h3>
                            <div className="flex justify-between text-white mb-4">
                                <span>Total:</span>
                                <span className="font-bold">${total.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                className="btn-demon w-full text-white py-3 rounded-lg"
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
