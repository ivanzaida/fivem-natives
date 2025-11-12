/**
 * NETWORK:GET_COMMERCE_ITEM_ID
 *
 * 0x57C238FEAF0677E0

 * 
 * Gets the identifier for a product
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {string}  
 */
export function getCommerceItemId(index: number): string {
	const getCommerceItemId_result = Citizen.invokeNative<string>('0x57C238FEAF0677E0', index);
	return getCommerceItemId_result;
}