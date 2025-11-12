/**
 * NETWORK:GET_COMMERCE_ITEM_NUM_CATS
 *
 * 0xA25A07F63AC497BB

 * 
 * Gets the number of categories a specified product is contained in
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {number}  
 */
export function getCommerceItemNumCats(index: number): number {
	const getCommerceItemNumCats_result = Citizen.invokeNative<number>('0xA25A07F63AC497BB', index);
	return getCommerceItemNumCats_result;
}