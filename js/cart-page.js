import { cart } from './cart.js';
import { priceFormat } from './utils.js';

const cartContainer = document.getElementById('cart-container');
const cartTotal = document.getElementById('cart-total');
const subTotal = document.getElementById('subTotal');
const shipping = document.getElementById('shipping');
const tax = document.getElementById('tax');

// Buat function untuk generate options
const generateOptions = (max, currentQty) => {
  let options = '';
  for (let i = 1; i <= max; i++) {
    options += `<option value="${i}" ${i === currentQty ? 'selected' : ''}>${i}</option>`;
  }
  return options;
};

const renderCart = () => {
  const html = cart.items
    .map(
      (item) =>
        `
<div class="border-t border-gray-200 mb-6"></div>
          <div class="card flex items-start sm:items-center gap-6 pb-6 border-b border-gray-200">
            <img src="${item.image}" alt="${item.image}" class="w-32 h-32 object-contain bg-gray-100 rounded-lg shrink-0" />
            <div class="flex flex-1 flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div class="info flex flex-col gap-1">
                <p class="font-bold text-gray-800 text-lg">${item.name}</p>
                <div class="text-sm text-gray-500 flex gap-2">
                  <span>Category</span>
                  <span class="border-l border-gray-300 pl-2">${item.category}</span>
                </div>
                <p class="font-medium text-gray-900 mt-1">${priceFormat(item.price)}</p>
                <p class="text-sm text-green-600 flex items-center gap-1 mt-2"><span>✓</span> In stock</p>
              </div>

              <div class="flex items-center gap-6">
                <div class="quantity">
                  <select name="qty" id="option" class="border border-gray-300 bg-white rounded-xl py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    ${generateOptions(10, item.quantity)}
                  </select>
                </div>
                <button class="btn-remove text-gray-400 hover:text-gray-600 transition-colors" data-id=${item.id}>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>
          </div>
`,
    )
    .join('');
  cartContainer.innerHTML = html;
};

const updateTotal = () => {
  const subTotalValue = cart.getTotal();
  const taxValue = (12 / 100) * subTotalValue;
  const shippingCost = 15000;
  const totalValue = subTotalValue + shippingCost + taxValue;

  subTotal.innerText = priceFormat(subTotalValue);
  tax.innerText = priceFormat(taxValue);
  shipping.innerText = priceFormat(shippingCost);
  cartTotal.innerText = priceFormat(totalValue);
};

renderCart();
updateTotal();

const updateCartBadge = () => {
  const cartBadge = document.querySelector('.cart-badge');
  cartBadge.innerHTML = cart.getCount();
};

updateCartBadge(); // panggil saat halaman load

cartContainer.addEventListener('click', (event) => {
  const removeBtn = event.target.closest('.btn-remove');
  if (removeBtn) {
    const productId = Number(removeBtn.dataset.id);
    cart.removeItem(productId);
    updateTotal();

    renderCart();
  }
});

// const generateSubTotal = () => {
//     cart.
// };

// const shippingCost = () => {
//   const cost = priceFormat(15000);
//   shipping.innerText = cost;
//   return cost;
// };

// shippingCost();
