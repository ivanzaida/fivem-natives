/**
 * NETWORK:GET_COMMERCE_PRODUCT_PRICE
 *
 * 0x3682CE8F11C793D4

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {string}  
 */
export function getCommerceProductPrice(index: number): string {
	const getCommerceProductPrice_result = Citizen.invokeNative<string>('0x3682CE8F11C793D4', index);
	return getCommerceProductPrice_result;
}