function CategoryCard({ category, onClick }) {
    try {
        return (
            <div 
                data-name="category-card" 
                data-file="components/CategoryCard.js" 
                className="category-hover bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => onClick && onClick(category)}
            >
                <div className="relative h-32">
                    <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white z-10">
                            <i className={`${category.icon} text-3xl mb-2`}></i>
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CategoryCard component error:', error);
        reportError(error);
    }
}
