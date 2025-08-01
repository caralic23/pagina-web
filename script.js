// Productos de la tienda
const products = [
    {
        id: 1,
        name: "Anillo de Plata con Zirconia",
        price: 85000,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
        category: "anillos",
        description: "Elegante anillo de plata con zirconia cúbica"
    },
    {
        id: 2,
        name: "Collar de Perlas Naturales",
        price: 125000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
        category: "collares",
        description: "Collar elegante con perlas naturales de alta calidad"
    },
    {
        id: 3,
        name: "Pendientes de Cristal Swarovski",
        price: 95000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
        category: "pendientes",
        description: "Pendientes brillantes con cristales Swarovski"
    },
    {
        id: 4,
        name: "Pulsera de Cuero y Plata",
        price: 65000,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop",
        category: "pulseras",
        description: "Pulsera elegante de cuero con detalles en plata"
    },
    {
        id: 5,
        name: "Set de Anillos Combinables",
        price: 110000,
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&h=300&fit=crop",
        category: "anillos",
        description: "Set de 3 anillos que se pueden combinar"
    },
    {
        id: 6,
        name: "Collar de Cadena Dorada",
        price: 145000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
        category: "collares",
        description: "Collar de cadena dorada con colgante elegante"
    },
    {
        id: 7,
        name: "Pendientes de Aro Plateado",
        price: 55000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
        category: "pendientes",
        description: "Pendientes de aro en plata de ley"
    },
    {
        id: 8,
        name: "Pulsera de Cristales Multicolor",
        price: 75000,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop",
        category: "pulseras",
        description: "Pulsera con cristales de colores vibrantes"
    }
];

// Carrito de compras
let cart = [];

// Elementos del DOM
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const productsGrid = document.getElementById('productsGrid');

// Funciones del carrito
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCartToLocalStorage();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCartToLocalStorage();
        }
    }
}

function updateCartDisplay() {
    // Actualizar contador del carrito
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar items del carrito
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0.00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">${item.name}</h4>
                    <p class="text-gray-600">$${item.price.toLocaleString('es-CO')}</p>
                    <div class="flex items-center space-x-2 mt-2">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-6 h-6 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors">
                            <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-6 h-6 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors">
                            <i class="fas fa-plus text-xs"></i>
                        </button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 transition-colors">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        // Calcular total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toLocaleString('es-CO')}`;
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function showNotification(message) {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Ocultar notificación
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Funciones de productos
function displayProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="${product.image}" alt="${product.name}" class="product-image w-full h-48 object-cover">
            <div class="p-4">
                <h4 class="font-semibold text-gray-800 mb-2">${product.name}</h4>
                <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-primary">$${product.price.toLocaleString('es-CO')}</span>
                    <button onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})" 
                            class="btn-primary text-white px-4 py-2 rounded-lg transition-colors">
                        <i class="fas fa-cart-plus mr-2"></i>Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Event listeners
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
    cartOverlay.classList.remove('hidden');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
});

cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Total a pagar: $${total.toLocaleString('es-CO')}\n\nGracias por tu compra!`);
    
    // Limpiar carrito
    cart = [];
    updateCartDisplay();
    saveCartToLocalStorage();
    
    // Cerrar carrito
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
});

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    loadCartFromLocalStorage();
    
    // Animación de entrada para productos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('#productsGrid > div').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}); 