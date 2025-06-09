function Auth({ onLogin }) {
    try {
        const [activeTab, setActiveTab] = React.useState('login');
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        const [error, setError] = React.useState('');

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleLogin = (e) => {
            e.preventDefault();
            setError('');
            
            if (!formData.email || !formData.password) {
                setError('Por favor completa todos los campos');
                return;
            }

            const result = AuthUtils.login(formData.email, formData.password);
            if (result.success) {
                onLogin(result.user);
            } else {
                setError(result.error);
            }
        };

        const handleRegister = (e) => {
            e.preventDefault();
            setError('');
            
            if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
                setError('Por favor completa todos los campos');
                return;
            }

            if (formData.password !== formData.confirmPassword) {
                setError('Las contraseñas no coinciden');
                return;
            }

            const result = AuthUtils.register(formData.name, formData.email, formData.password);
            if (result.success) {
                onLogin(result.user);
            } else {
                setError(result.error);
            }
        };

        return (
            <div data-name="auth" data-file="pages/Auth.js" className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-gray-800 rounded-lg p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold demon-gradient bg-clip-text text-transparent">
                            DemonWear
                        </h2>
                    </div>

                    <div className="flex mb-6">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex-1 py-2 text-center rounded-l-lg transition ${
                                activeTab === 'login' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
                            }`}
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            onClick={() => setActiveTab('register')}
                            className={`flex-1 py-2 text-center rounded-r-lg transition ${
                                activeTab === 'register' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
                            }`}
                        >
                            Registrarse
                        </button>
                    </div>

                    {error && (
                        <div className="bg-red-600 text-white p-3 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    {activeTab === 'login' ? (
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500"
                                />
                            </div>
                            <button type="submit" className="btn-demon w-full text-white py-3 rounded-lg">
                                Iniciar Sesión
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleRegister}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre completo"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirmar contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500"
                                />
                            </div>
                            <button type="submit" className="btn-demon w-full text-white py-3 rounded-lg">
                                Registrarse
                            </button>
                        </form>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Auth component error:', error);
        reportError(error);
    }
}
