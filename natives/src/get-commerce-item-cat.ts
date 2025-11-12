/**
 * NETWORK:GET_COMMERCE_ITEM_CAT
 *
 * 0x8553FB74D3BF41C8

 * 
 * Retrieve the category text ID for a specific product and cat index
 * 
 * index2 is unused
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} item
 * @param {number} cat
 * @returns {string}  
 */
export function getCommerceItemCat(item: number, cat: number): string {
	const getCommerceItemCat_result = Citizen.invokeNative<string>('0x8553FB74D3BF41C8', item, cat);
	return getCommerceItemCat_result;
}