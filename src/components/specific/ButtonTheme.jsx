import useTheme from "../../contexts/theme/useTheme";

// Botón circular y animado para cambiar el tema
const ButtonTheme = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
                fixed z-50 bottom-6 right-6
                w-14 h-14 flex items-center justify-center
                rounded-full shadow-lg
                bg-white dark:bg-gray-900
                text-gray-800 dark:text-gray-200
                border border-gray-300 dark:border-gray-700
                transition-all duration-300
                hover:scale-110 hover:shadow-2xl
                focus:outline-none
                group
            `}
            aria-label="Cambiar tema"
        >
            {/* Icono de sol/luna animado */}
            <span className="transition-transform duration-300 group-hover:rotate-180">
                {theme === "light" ? (
                    // Sol
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" fill="currentColor" />
                        <g stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </g>
                    </svg>
                ) : (
                    // Luna
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <path
                            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </span>
        </button>
    );
};

export default ButtonTheme;