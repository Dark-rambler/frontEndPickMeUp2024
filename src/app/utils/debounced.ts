import { useEffect, useState } from 'react';

/**
 * Hook personalizado que devuelve un valor debounced.
 *
 * @param value El valor a debouncer.
 * @param delay El tiempo en milisegundos que debe esperar antes de actualizar el valor.
 * @returns El valor debounced.
 */
const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Establece un temporizador que actualiza el valor debounced
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Limpieza del temporizador en caso de que el componente se desmonte
        // o el valor cambie antes de que se complete el tiempo de espera
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Se ejecuta cuando `value` o `delay` cambian

    return debouncedValue;
};

export default useDebounce;
