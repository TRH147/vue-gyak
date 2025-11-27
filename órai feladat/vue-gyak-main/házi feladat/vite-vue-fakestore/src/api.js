const API_URL = 'https://fakestoreapi.com/products'


export async function fetchProducts() {
try {
const res = await fetch(API_URL)
if (!res.ok) throw new Error('Network response was not ok')
return await res.json()
} catch (e) {
console.warn('API fetch failed, falling back to local data:', e.message)
const local = await import('./data/products.json')
return local.default
}
}


export async function fetchProductById(id) {
try {
const res = await fetch(`${API_URL}/${id}`)
if (!res.ok) throw new Error('Network response was not ok')
return await res.json()
} catch (e) {
console.warn('API fetch failed, falling back to local data:', e.message)
const local = await import('./data/products.json')
return local.default.find(p => p.id === Number(id))
}
}