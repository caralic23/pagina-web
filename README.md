# Joyas Elegantes - Tienda de Bisutería

Una página web profesional para una tienda de bisutería con carrito de compras funcional, diseñada con HTML, Tailwind CSS y JavaScript.

## 🎯 Características

### ✨ Diseño y UX
- **Diseño Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: Utiliza Tailwind CSS para un diseño limpio y profesional
- **Animaciones Suaves**: Efectos de hover y transiciones para una mejor experiencia de usuario
- **Gradientes Dinámicos**: Hero section con gradiente animado
- **Iconografía**: Font Awesome para iconos consistentes

### 🛒 Funcionalidades del Carrito
- **Agregar Productos**: Botón "Agregar" en cada producto
- **Gestión de Cantidades**: Incrementar/decrementar cantidades
- **Eliminar Productos**: Botón de eliminar individual
- **Cálculo Automático**: Total actualizado en tiempo real
- **Persistencia**: Los datos se guardan en localStorage
- **Notificaciones**: Feedback visual al agregar productos

### 📱 Navegación
- **Header Sticky**: Navegación siempre visible
- **Scroll Suave**: Navegación entre secciones
- **Menú Responsive**: Adaptado para móviles
- **Búsqueda**: Botón de búsqueda (preparado para futuras implementaciones)

### 🎨 Secciones
1. **Hero Section**: Presentación principal con call-to-action
2. **Categorías**: Iconos interactivos para diferentes tipos de bisutería
3. **Productos**: Grid responsive con productos destacados
4. **Footer**: Información de contacto y enlaces sociales

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de utilidades CSS
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconos
- **LocalStorage**: Persistencia de datos del carrito

## 📁 Estructura del Proyecto

```
pagina web/
├── index.html          # Página principal
├── script.js           # Funcionalidad JavaScript
├── styles.css          # Estilos personalizados
└── README.md           # Documentación
```

## 🛠️ Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en tu navegador web
3. **¡Listo!** La página está completamente funcional

No se requieren dependencias adicionales ya que utilizamos CDNs para Tailwind CSS y Font Awesome.

## 🎨 Personalización

### Colores
Los colores principales están definidos en la configuración de Tailwind:
- **Primary**: `#8B5CF6` (Púrpura)
- **Secondary**: `#F59E0B` (Ámbar)
- **Accent**: `#EC4899` (Rosa)

### Productos
Para agregar o modificar productos, edita el array `products` en `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Nombre del Producto",
        price: 85000, // Precio en pesos colombianos (COP)
        image: "URL_de_la_imagen",
        category: "categoria",
        description: "Descripción del producto"
    }
    // ... más productos
];
```

**Nota:** Los precios están en pesos colombianos (COP) y se formatean automáticamente con separadores de miles.

### Estilos
Los estilos personalizados están en `styles.css` e incluyen:
- Animaciones personalizadas
- Efectos hover
- Gradientes dinámicos
- Scrollbar personalizada

## 📱 Responsive Design

La página está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Funcionalidades Técnicas

### Carrito de Compras
- **Gestión de Estado**: Array de productos en memoria
- **Persistencia**: LocalStorage para mantener el carrito entre sesiones
- **Validaciones**: Verificación de cantidades y productos existentes
- **Cálculos**: Total automático con formato de moneda colombiana (COP)

### Interacciones
- **Event Listeners**: Para botones del carrito y navegación
- **DOM Manipulation**: Actualización dinámica del contenido
- **Smooth Scrolling**: Navegación suave entre secciones

## 🎯 Próximas Mejoras

- [ ] Filtros por categoría
- [ ] Búsqueda de productos
- [ ] Galería de imágenes por producto
- [ ] Sistema de reseñas
- [ ] Integración con pasarela de pagos
- [ ] Panel de administración
- [ ] Base de datos para productos

## 📞 Contacto

Para soporte o consultas sobre el proyecto, puedes contactar a través de:
- **Email**: info@joyaselegantes.com
- **Teléfono**: +1 234 567 890

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales y comerciales.

---

**Desarrollado con ❤️ para Joyas Elegantes** 