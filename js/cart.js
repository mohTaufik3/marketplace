const localStorageKey = 'cart';

class Cart {
  constructor() {
    this.items = [];
    if (typeof Storage !== 'undefined') {
      this.items = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    }
  }

  save() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.items));
  }

  addItem(product) {
    const existingProduct = this.items.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.save();
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);

    this.save();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getCount() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }
}

export const cart = new Cart();
export default Cart;
