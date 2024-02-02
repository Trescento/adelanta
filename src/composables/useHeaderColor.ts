export const useHeaderColor = () => {
  // Estado para almacenar el color del header como un Ref<string>
  const headerColor: Ref<string> = useState<string>('headerColor', () => 'white')

  // Función para establecer el color del header
  const setHeaderColor = (color: string = 'white'): void => {
    headerColor.value = color
  }

  // Obtener la ruta actual usando useRoute
  const route = useRoute()

  // Observar cambios en la ruta para actualizar el color del header
  // según la configuración de la ruta
  watch(
    () => route.path,
    () => {
      // Aquí puedes agregar lógica para actualizar el color
      // basado en la ruta actual. Por ejemplo, verificar si la ruta actual
      // tiene una meta específica para el color del header.
      const color: string | {} = route.meta.headerColor ?? 'white' // Color por defecto blanco
      setHeaderColor(color as string)
    },
    { immediate: true } // Ejecutar inmediatamente al cargar el composable
  )

  return {
    headerColor, // Estado actual del color del header
    setHeaderColor // Función para actualizar el color
  }
}
