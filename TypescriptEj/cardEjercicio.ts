type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type Cart = CartItem[];

function addProduct(cart: Cart, product: Product, quantity: number = 1): Cart {
    const index = cart.findIndex(item => item.product.id === product.id);
    if (index >= 0) {
        // Si el producto ya está en el carrito, aumenta la cantidad
        const updatedCart = [...cart];
        updatedCart[index].quantity += quantity;
        return updatedCart;
    }
    // Si no está, lo añade
    return [...cart, { product, quantity }];
}

function removeProduct(cart: Cart, productId: number): Cart {
    return cart.filter(item => item.product.id !== productId);
}

function calculateTotal(cart: Cart): number {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

// Ejemplos
const prod1: Product = { id: 1, name: "Laptop", price: 1200 };
const prod2: Product = { id: 2, name: "Mouse", price: 25 };

let cart: Cart = [];
cart = addProduct(cart, prod1, 2);
cart = addProduct(cart, prod2, 1);
cart = removeProduct(cart, prod1.id);

const total = calculateTotal(cart);
console.log("Total:", total);