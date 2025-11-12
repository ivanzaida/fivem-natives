/**
 * NETWORK:GET_COMMERCE_ITEM_NAME
 *
 * 0xDD21D41AD9E54549

 * 
 * Gets the name for a product
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {string}  
 */
export function getCommerceItemName(index: number): string {
	const getCommerceItemName_result = Citizen.invokeNative<string>('0xDD21D41AD9E54549', index);
	return getCommerceItemName_result;
}