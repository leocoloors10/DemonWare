function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');
        const [user, setUser] = React.useState(null);

        React.useEffect(() => {
            const currentUser = AuthUtils.getCurrentUser();
            if (currentUser) {
                setUser(currentUser);
            }

            const handleNavigation = (event) => {
                setCurrentPage(event.detail.page);
            };

            window.addEventListener('navigate', handleNavigation);
            return () => window.removeEventListener('navigate', handleNavigation);
        }, []);

        const handleLogin = (userData) => {
            setUser(userData);
            setCurrentPage('home');
        };

        const handleLogout = () => {
            AuthUtils.logout();
            setUser(null);
            setCurrentPage('home');
        };

        const handleAddToCart = (product) => {
            if (!user) {
                alert('Debes iniciar sesión para agregar productos al carrito');
                setCurrentPage('auth');
                return;
            }

            const result = CartUtils.addToCart(product);
            if (result.success) {
                alert('Producto agregado al carrito');
            } else {
                alert(result.error);
            }
        };

        const renderPage = () => {
            switch (currentPage) {
                case 'home':
                    return <Home onAddToCart={handleAddToCart} />;
                case 'shop':
                    return <Shop onAddToCart={handleAddToCart} />;
                case 'cart':
                    return <Cart user={user} />;
                case 'profile':
                    return <Profile user={user} onLogout={handleLogout} />;
                case 'auth':
                    return <Auth onLogin={handleLogin} />;
                default:
                    return <Home onAddToCart={handleAddToCart} />;
            }
        };

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen bg-gray-900">
                <Navbar user={user} onLogout={handleLogout} />
                <main>
                    {renderPage()}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
