function Navbar({ user, onLogout }) {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');

        const handleNavigation = (page) => {
            setCurrentPage(page);
            window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
        };

        return (
            <nav data-name="navbar" data-file="components/Navbar.js" className="bg-gray-900 border-b border-purple-500/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <button 
                                onClick={() => handleNavigation('home')}
                                className="text-2xl font-bold demon-gradient bg-clip-text text-transparent"
                            >
                                DemonWear
                            </button>
                        </div>

                        <div className="hidden md:block">
                            <div className="flex items-center space-x-8">
                                <button 
                                    onClick={() => handleNavigation('home')}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                                        currentPage === 'home' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    Inicio
                                </button>
                                <button 
                                    onClick={() => handleNavigation('shop')}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                                        currentPage === 'shop' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    Tienda
                                </button>
                                
                                {user ? (
                                    <div className="flex items-center space-x-4">
                                        <button 
                                            onClick={() => handleNavigation('cart')}
                                            className="text-gray-300 hover:text-white transition relative"
                                        >
                                            <i className="fas fa-shopping-cart text-lg"></i>
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                0
                                            </span>
                                        </button>
                                        <button 
                                            onClick={() => handleNavigation('profile')}
                                            className="text-gray-300 hover:text-white transition"
                                        >
                                            <i className="fas fa-user text-lg"></i>
                                        </button>
                                    </div>
                                ) : (
                                    <button 
                                        onClick={() => handleNavigation('auth')}
                                        className="btn-demon text-white px-4 py-2 rounded-md text-sm font-medium"
                                    >
                                        Iniciar Sesión
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
    }
}
