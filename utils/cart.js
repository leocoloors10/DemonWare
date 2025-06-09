const CartUtils = {
    getCart: () => {
        try {
            const cartData = localStorage.getItem('demonwear_cart');
            return cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error getting cart:', error);
            return [];
        }
    },

    addToCart: (product) => {
        try {
            const cart = CartUtils.getCart();
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            localStorage.setItem('demonwear_cart', JSON.stringify(cart));
            return { success: true, cart };
        } catch (error) {
            console.error('Error adding to cart:', error);
            return { success: false, error: 'Error al agregar al carrito' };
        }
    },

    removeFromCart: (productId) => {
        try {
            const cart = CartUtils.getCart();
            const updatedCart = cart.filter(item => item.id !== productId);
            
            localStorage.setItem('demonwear_cart', JSON.stringify(updatedCart));
            return { success: true, cart: updatedCart };
        } catch (error) {
            console.error('Error removing from cart:', error);
            return { success: false, error: 'Error al eliminar del carrito' };
        }
    },

    updateQuantity: (productId, quantity) => {
        try {
            const cart = CartUtils.getCart();
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                if (quantity <= 0) {
                    return CartUtils.removeFromCart(productId);
                }
                item.quantity = quantity;
                localStorage.setItem('demonwear_cart', JSON.stringify(cart));
            }
            
            return { success: true, cart };
        } catch (error) {
            console.error('Error updating quantity:', error);
            return { success: false, error: 'Error al actualizar cantidad' };
        }
    },

    getCartTotal: () => {
        try {
            const cart = CartUtils.getCart();
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        } catch (error) {
            console.error('Error calculating total:', error);
            return 0;
        }
    },

    clearCart: () => {
        try {
            localStorage.removeItem('demonwear_cart');
            return { success: true };
        } catch (error) {
            console.error('Error clearing cart:', error);
            return { success: false, error: 'Error al limpiar carrito' };
        }
    }
};
