function Profile({ user, onLogout }) {
    try {
        const [activeSection, setActiveSection] = React.useState('account');

        if (!user) {
            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Inicia sesión para ver tu perfil</h2>
                    <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'auth' } }))}
                        className="btn-demon text-white px-6 py-3 rounded-lg"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            );
        }

        const menuItems = [
            { id: 'account', name: 'Datos de tu cuenta', icon: 'fas fa-user' },
            { id: 'addresses', name: 'Direcciones', icon: 'fas fa-map-marker-alt' },
            { id: 'cards', name: 'Tarjetas de pago', icon: 'fas fa-credit-card' },
            { id: 'orders', name: 'Mis pedidos', icon: 'fas fa-box' }
        ];

        const renderContent = () => {
            switch (activeSection) {
                case 'account':
                    return (
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Información Personal</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 mb-2">Nombre</label>
                                    <input type="text" value={user.name} className="w-full px-4 py-2 bg-gray-700 text-white rounded" readOnly />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2">Email</label>
                                    <input type="email" value={user.email} className="w-full px-4 py-2 bg-gray-700 text-white rounded" readOnly />
                                </div>
                            </div>
                        </div>
                    );
                case 'addresses':
                    return (
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Direcciones</h3>
                            <p className="text-gray-400">No tienes direcciones guardadas</p>
                        </div>
                    );
                case 'cards':
                    return (
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Tarjetas de Pago</h3>
                            <p className="text-gray-400">No tienes tarjetas guardadas</p>
                        </div>
                    );
                case 'orders':
                    return (
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Mis Pedidos</h3>
                            <p className="text-gray-400">No tienes pedidos realizados</p>
                        </div>
                    );
                default:
                    return null;
            }
        };

        return (
            <div data-name="profile" data-file="pages/Profile.js" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center mb-8">
                    <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                        <p className="text-gray-400">{user.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                                    activeSection === item.id ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                <i className={`${item.icon} mr-3`}></i>
                                {item.name}
                            </button>
                        ))}
                        <button
                            onClick={onLogout}
                            className="w-full text-left px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Cerrar Sesión
                        </button>
                    </div>
                    
                    <div className="md:col-span-3">
                        {renderContent()}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Profile component error:', error);
        reportError(error);
    }
}
