function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-900 border-t border-purple-500/30 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold demon-gradient bg-clip-text text-transparent mb-4">
                                DemonWear
                            </h3>
                            <p className="text-gray-400 text-sm">
                                La tienda oficial de productos de Demon Slayer. Calidad garantizada y envíos a todo el mundo.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Inicio</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Tienda</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Categorías</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Ofertas</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><i className="fas fa-envelope mr-2"></i>info@demonwear.com</li>
                                <li><i className="fas fa-phone mr-2"></i>+1 (555) 123-4567</li>
                                <li><i className="fas fa-map-marker-alt mr-2"></i>123 Anime Street, Tokyo</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 DemonWear. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
