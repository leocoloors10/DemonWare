const AuthUtils = {
    getCurrentUser: () => {
        try {
            const userData = localStorage.getItem('demonwear_user');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    },

    login: (email, password) => {
        try {
            // Simulate login - in real app, this would call an API
            const mockUser = {
                id: '1',
                name: 'Usuario Demo',
                email: email,
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face'
            };
            
            localStorage.setItem('demonwear_user', JSON.stringify(mockUser));
            return { success: true, user: mockUser };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Error al iniciar sesión' };
        }
    },

    register: (name, email, password) => {
        try {
            // Simulate registration - in real app, this would call an API
            const mockUser = {
                id: Date.now().toString(),
                name: name,
                email: email,
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face'
            };
            
            localStorage.setItem('demonwear_user', JSON.stringify(mockUser));
            return { success: true, user: mockUser };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'Error al registrarse' };
        }
    },

    logout: () => {
        try {
            localStorage.removeItem('demonwear_user');
            localStorage.removeItem('demonwear_cart');
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false, error: 'Error al cerrar sesión' };
        }
    }
};
