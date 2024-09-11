/**
 * FILES:SETUP_SHOP_PED_APPAREL_QUERY
 *
 * 0xD9B1BDDEA510CD90

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @param {number} shop
 * @param {number} locate
 * @param {number} apparelType
 * @returns {number}  
 */
export function setupShopPedApparelQuery(character: number, shop: number, locate: number, apparelType: number): number {
	const setupShopPedApparelQuery_result = Citizen.invokeNative<number>('0xD9B1BDDEA510CD90', character, shop, locate, apparelType);
	return setupShopPedApparelQuery_result;
}