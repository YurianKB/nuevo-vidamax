# Prueba Técnica - Nuevo Vidamax

Proyecto desarrollado con React + TypeScript + Vite + Bootstrap + SCSS.

## Estructura
- /components: Navbar, SubNavbar, etc.
- /views: Descripción, Siniestro, Planes, Condiciones
- /styles: Variables y estilos globales
- /routes: Configuración de rutas internas

### Arquitectura del Proyecto
```plaintext
src
├── assets           # Imágenes, íconos y recursos estáticos
│   └── images/
├── components       # Componentes reutilizables de la aplicación
│   ├── Accordion.tsx
│   ├── Banner.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── SubNavbar.tsx
├── views            # Vistas principales de la sección Nuevo Vidamax
│   ├── Condiciones.tsx
│   ├── Descripcion.tsx
│   ├── Planes.tsx
│   └── Siniestro.tsx
├── styles           # Archivos SCSS
│   ├── _variables.scss  # Variables de color, tipografía y tamaños
│   └── global.scss      # Estilos globales
├── index.tsx         # Punto de entrada de la aplicación
└── App.tsx           # Componente principal con layout y navegación

## Cómo correr el proyecto
1.  Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nuevo-vidamax.git

2.  Entrar al directorio del proyecto:
    cd nuevo-vidamax

3.	Instalar dependencias:
    npm install

4.  Ejecutar el entorno de desarrollo
    npm run dev

5.	Abrir en el navegador la URL del localhost: http://localhost:5173

👩‍💻 Desarrollado por
Yurián Castañeda
Frontend Developer