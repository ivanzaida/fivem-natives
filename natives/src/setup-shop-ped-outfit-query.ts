/**
 * FILES:SETUP_SHOP_PED_OUTFIT_QUERY
 *
 * 0xF2DDA7CE028AB9CB

 * 
 * Sets up a query of the scrShopPedOutfit based on the character and shop
 * PLEASE CONSIDER USING SETUP_SHOP_PED_APPAREL_QUERY WITH OUTFIT TYPE AND LOC_ANY(-1) FOR LOCATION INSTEAD
 * 
 * characters
 * 
 * 0: Michael
 * 1: Franklin
 * 2: Trevor
 * 3: MPMale
 * 4: MPFemale
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @param {number} shop
 * @returns {number}  
 */
export function setupShopPedOutfitQuery(character: number, shop: number): number {
	const setupShopPedOutfitQuery_result = Citizen.invokeNative<number>('0xF2DDA7CE028AB9CB', character, shop);
	return setupShopPedOutfitQuery_result;
}