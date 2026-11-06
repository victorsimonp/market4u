import { supabase } from '../lib/supabase';
export const demoProducts = [
  { id: 1, name: 'Café Torrado 500g', sku: '7891000100101', category: 'Mercearia', stock: 42, cost_price: 8.9, sale_price: 14.9 },
  { id: 2, name: 'Leite Integral 1L', sku: '7891000100202', category: 'Laticínios', stock: 18, cost_price: 3.8, sale_price: 4.79 },
  { id: 3, name: 'Arroz Tipo 1 5kg', sku: '7891000100303', category: 'Mercearia', stock: 31, cost_price: 21.5, sale_price: 29.9 },
  { id: 4, name: 'Detergente Neutro 500ml', sku: '7891000100404', category: 'Limpeza', stock: 7, cost_price: 1.95, sale_price: 2.49 }
];
export async function listProducts(search='') { if (!supabase) return demoProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase())); const q = supabase.from('products').select('*').order('name'); return (await q.ilike('name', `%${search}%`)).data || []; }
export async function createProduct(product) { if (!supabase) return { ...product, id: Date.now() }; return (await supabase.from('products').insert(product).select().single()).data; }
export async function createSale(sale) { if (!supabase) return sale; return (await supabase.rpc('register_sale', { p_product_id: sale.product_id, p_quantity: sale.quantity })).data; }
