import useTheme from "../../contexts/theme/useTheme";

// Botón para cambiar el tema
const ButtonTheme = () => {
    const { theme, toggleTheme } = useTheme();
    console.log(`Current theme: ${theme}`); // Para depuración
    
    return (
        <button
            onClick={toggleTheme}
            className="absolute bottom-0 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
        >
            Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
        </button>
    );
};

export default ButtonTheme;