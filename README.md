# Basic Math Game 🎮

Una aplicación educativa interactiva basada en **Ionic y Angular** diseñada para enseñar operaciones matemáticas básicas (suma, resta, multiplicación y división) de forma divertida y gamificada.

## 📋 Descripción del Proyecto

**Basic Math Game** es una aplicación móvil que combina educación y diversión para niños que están aprendiendo matemáticas. El juego ofrece:

- **Teoría**: Explicaciones visuales de conceptos matemáticos básicos
- **Práctica**: Juegos interactivos para ejercitar operaciones matemáticas
- **Sistema de puntuación**: Gana puntos y compite contra el tiempo
- **Vidas y desafíos**: Añade dificultad progresiva con un sistema de vidas

## 🎯 Características Principales

### 1. **Pantalla de Inicio (Home)**
- Página de bienvenida con la portada del juego
- Acceso a los modos de Teoría y Práctica

### 2. **Modo Teoría**
Explica las operaciones matemáticas básicas con:
- Explicaciones en lenguaje simple y comprensible
- Ejemplos visuales con imágenes
- Desglose paso a paso de cada operación:
  - **Suma**: Juntar grupos de números
  - **Resta**: Quitar números de un grupo
  - **Multiplicación**: Repetir números varias veces
  - **División**: Repartir en partes iguales

### 3. **Modo Práctica - Juego**
Componente interactivo donde:
- El jugador debe resolver operaciones matemáticas contra el tiempo
- **Duración**: 2 minutos (120 segundos) por sesión
- **Sistema de vidas**: Comienzas con 3 vidas
- **Puntuación**: Ganas puntos por cada respuesta correcta
- **Cuatro tipos de operaciones**: Suma, Resta, Multiplicación y División
- **Números con rango variable**: Los números varían para mantener el desafío
- **Enemigos visuales (villanos)**: Añaden una temática de desafío

### 4. **Pantallas de Resultado**
- **Ganar**: Se muestra cuando completas exitosamente una sesión
- **Fin de Juego**: Se muestra cuando pierdes todas las vidas

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── app.component.ts          # Componente raíz
│   ├── home/                      # Pantalla de inicio
│   ├── practica/
│   │   ├── opciones/              # Selector de operaciones
│   │   └── operaciones/           # Lógica del juego
│   ├── teoria/
│   │   ├── opciones/              # Selector de teoría
│   │   └── explicacion/           # Explicaciones educativas
│   ├── ganar/                     # Pantalla de victoria
│   └── fin-juego/                 # Pantalla de derrota
├── assets/
│   ├── imagenes/                  # Imágenes educativas (ejemplos matemáticos)
│   └── villains/                  # Imágenes de enemigos/villanos
├── environments/                   # Configuración de entornos
└── theme/                         # Estilos y variables globales
```

## 🎮 Cómo Jugar

### Paso 1: Selecciona Modo
- **Teoría**: Aprende sobre operaciones matemáticas
- **Práctica**: Juega y demuestra lo que has aprendido

### Paso 2: Elige Operación
Selecciona una de las cuatro operaciones:
- ➕ Suma
- ➖ Resta
- ✖️ Multiplicación
- ➗ División

### Paso 3: Juega
- Resuelve las operaciones matemáticas lo más rápido posible
- Tienes 2 minutos para obtener la mayor puntuación
- Cada respuesta incorrecta te quita una vida
- Con 3 vidas disponibles

### Paso 4: Revisa Resultados
- Si ganas, verás tu puntuación final
- Si pierdes todas las vidas, se mostrará la pantalla de fin de juego

## 💻 Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|------------|
| **Angular** | 18.0.0 | Framework principal |
| **Ionic** | 8.0.0 | Framework de UI móvil |
| **TypeScript** | Latest | Lenguaje de programación |
| **RxJS** | 7.8.0 | Programación reactiva |
| **Capacitor** | 6.x | Framework para apps nativas |
| **SCSS** | Latest | Preprocesador CSS |
| **Jasmine** | 5.1.0 | Testing |
| **Karma** | Latest | Test runner |

## 📦 Instalación y Configuración

### Requisitos Previos
- Node.js (versión 16+)
- npm o yarn
- Angular CLI instalado globalmente

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/AlexanderMartinez0410/basic-math-game.git
cd basic-math-game
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm start
```
La aplicación estará disponible en `http://localhost:4200`

4. **Construir para producción**
```bash
npm run build
```

5. **Ejecutar tests**
```bash
npm test
```

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-----------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run watch` | Construye en modo watch (reinicia en cambios) |
| `npm test` | Ejecuta los tests unitarios |
| `npm run lint` | Ejecuta el linter de código |

## 🎨 Componentes Principales

### OperacionesPage
- **Ubicación**: `src/app/practica/operaciones/`
- **Responsabilidad**: Gestiona toda la lógica del juego
- **Funcionalidades**:
  - Generación de operaciones matemáticas aleatorias
  - Control del temporizador (120 segundos)
  - Sistema de puntuación y vidas
  - Validación de respuestas
  - Selección de villano

### ExplicacionPage
- **Ubicación**: `src/app/teoria/explicacion/`
- **Responsabilidad**: Presenta la teoría educativa
- **Contenido**:
  - Explicación conceptual en lenguaje simple
  - Ejemplos visuales con imágenes
  - Información progresiva para mejor comprensión

## 🎯 Flujo de Navegación

```
Home
├── Teoría
│   ├── Opciones de Operación
│   └── Explicación Detallada
└── Práctica
    ├── Opciones de Operación
    └── Juego
        ├── Victoria (Ganar)
        └── Derrota (Fin Juego)
```

## 📊 Sistema de Juego

### Puntuación
- **+1 punto** por cada respuesta correcta
- Los puntos se acumulan durante toda la sesión

### Vidas
- Comienzas con **3 vidas**
- **-1 vida** por cada respuesta incorrecta
- Cuando llegas a 0 vidas, el juego termina

### Tiempo
- **120 segundos** por sesión (2 minutos)
- El contador disminuye constantemente
- Cuando llega a 0, el juego termina automáticamente

## 🚀 Características Futuras Potenciales

- [ ] Niveles de dificultad progresivos
- [ ] Modo multijugador
- [ ] Sistema de logros y insignias
- [ ] Guardado de puntuaciones máximas (LocalStorage)
- [ ] Temas visuales personalizables
- [ ] Operaciones más avanzadas (potencias, raíces)
- [ ] Modo infinito sin límite de tiempo
- [ ] Leaderboard global
- [ ] Sonidos y efectos de audio

## 📱 Compatibilidad

- **Web**: Compatible con navegadores modernos
- **Android**: A través de Capacitor
- **iOS**: A través de Capacitor
- **Móviles**: Responsive design para diferentes tamaños

## 🐛 Solución de Problemas

### El juego no inicia
- Verifica que Node.js esté instalado: `node --version`
- Reinstala las dependencias: `npm install`

### Los estilos no se aplican correctamente
- Limpia el caché: `rm -rf node_modules package-lock.json` y vuelve a instalar
- Reinicia el servidor: `npm start`

### Tests fallan
- Asegúrate de tener Chrome instalado (Karma lo necesita)
- Ejecuta: `npm test`

## 👨‍💻 Autor

- Alexander Martinez
- Mateo Villafuete

## 📄 Licencia

Este proyecto es de uso educativo. Para más detalles sobre la licencia, consulta el archivo LICENSE.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💡 Consejos de Uso

- Comienza por la sección de **Teoría** para entender los conceptos
- Practica con una operación a la vez
- Intenta mejorar tu puntuación en sesiones posteriores
- El juego está diseñado para ser educativo y divertido

---

¡Gracias por usar Basic Math Game! 🎓✨
