/**
 * NETWORK:GET_NUM_COMMERCE_ITEMS
 *
 * 0x21A5D8255DE6E429

 * 
 * Gets the number of products stored in thin data. Will return 0 in the event of no populated data.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumCommerceItems(): number {
	const getNumCommerceItems_result = Citizen.invokeNative<number>('0x21A5D8255DE6E429', );
	return getNumCommerceItems_result;
}