interface Product {
    nombre: string;
    precio: number;
    stock: number;
    calcularValorTotal(): number;
}


const producto: Product = {
    nombre: "Laptop",
    precio: 1200,
    stock: 5,
    calcularValorTotal() {
        return this.precio * this.stock;
    }
};