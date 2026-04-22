import products from '../data/products.js';

const container = document.getElementById('product-container');
const html = products
  .map(
    (product) => `
      <div class="group relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
        <!-- Image -->
        <div class="aspect-square w-full rounded-xl overflow-hidden mb-6 bg-gray-50 group-hover:bg-gray-100">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <!-- Content - SPACING KONSISTEN -->
        <div class="space-y-4">
          <!-- Product Name - WEBKIT LINE CLAMP 1 -->
          <h3 class="text-lg md:text-xl font-bold text-gray-900 leading-tight h-7 flex items-center overflow-hidden">
            <a href="#" class="hover:text-gray-700 transition-colors block w-full h-full">
              <div class="line-clamp-1 block h-full display:-webkit-box [-webkit-box-orient:vertical] [-webkit-line-clamp:1] overflow-hidden">
                ${product.name}
              </div>
            </a>
          </h3>
          
          <!-- Category -->
          <p class="text-sm text-gray-500 h-5 flex items-center overflow-hidden">
            ${product.category}
          </p>
          
          <!-- Price & Button -->
          <div class="pt-2 border-t border-gray-100 flex justify-between items-center">
            <p class="text-2xl font-bold text-gray-900">Rp ${product.price.toLocaleString('id-ID')}</p>
            <button class="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-md">
              Beli
            </button>
          </div>
        </div>
      </div>
    `,
  )
  .join('');

container.innerHTML = html;
