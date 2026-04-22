## JavaScript waktu salah styling card buat product

import products from '../data/products.js';

// console.log(products);
const container = document.getElementById('product-container');
const html = products.map((product) => {
const card = document.createElement('div');
card.className = 'bg-gray-200 hover: bg-gray-100 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8';

const outerCard = document.createElement('div');
outerCard.className = 'group relative';

const productImg = document.createElement('img');
productImg.src = product.image;
productImg.className = 'aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80';

const innerCard = document.createElement('div');
innerCard.className = 'mt-4 flex justify-between';

const divCard = document.createElement('div');

const headingName = document.createElement('h3');
headingName.className = 'text-sm text-gray-800';

const linkName = document.createElement('a');
linkName.href = '#';
linkName.innerText = product.name;

const spanName = document.createElement('span');
spanName.setAttribute('aria-hidden', 'true');
spanName.className = 'absolute inset-0';

const productDesc = document.createElement('p');
productDesc.className = 'mt-1 text-sm text-gray-500';
productDesc.innerHTML = product.description;

const productRate = document.createElement('p');
productRate.className = 'text-sm font-medium text-gray-900';
productRate.innerText = product.rating;

const productPrice = document.createElement('p');
productPrice.className = 'text-sm font-medium text-gray-900';
productPrice.innerHTML = product.price;

linkName.appendChild(spanName);
headingName.appendChild(linkName);
divCard.appendChild(headingName);
divCard.appendChild(productDesc);
divCard.appendChild(productRate);
innerCard.appendChild(divCard);
innerCard.appendChild(productPrice);
outerCard.appendChild(innerCard);
outerCard.appendChild(productImg);
card.appendChild(outerCard);

return card;
});

container.append(...html);
