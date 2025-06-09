function Banner() {
    try {
        return (
            <div data-name="banner" data-file="components/Banner.js" className="relative h-96 bg-gradient-to-r from-purple-900 to-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop"
                    alt="Demon Slayer Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            <span className="demon-gradient bg-clip-text text-transparent">Demon</span>Wear
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8">
                            Productos oficiales de Demon Slayer
                        </p>
                        <button className="btn-demon text-white px-8 py-3 rounded-lg text-lg font-semibold">
                            Explorar Tienda
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Banner component error:', error);
        reportError(error);
    }
}
