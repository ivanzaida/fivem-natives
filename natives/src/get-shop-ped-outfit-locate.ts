/**
 * FILES:GET_SHOP_PED_OUTFIT_LOCATE
 *
 * 0x1D814CA2350EAA9E

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedOutfitLocate(nameHash: number): number {
	const getShopPedOutfitLocate_result = Citizen.invokeNative<number>('0x1D814CA2350EAA9E', nameHash);
	return getShopPedOutfitLocate_result;
}