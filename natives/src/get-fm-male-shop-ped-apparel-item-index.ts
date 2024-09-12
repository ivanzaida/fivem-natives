/**
 * PED:GET_FM_MALE_SHOP_PED_APPAREL_ITEM_INDEX
 *
 * 0x82ADFEA98A0C26DC

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getFmMaleShopPedApparelItemIndex(nameHash: number): number {
	const getFmMaleShopPedApparelItemIndex_result = Citizen.invokeNative<number>('0x82ADFEA98A0C26DC', nameHash);
	return getFmMaleShopPedApparelItemIndex_result;
}