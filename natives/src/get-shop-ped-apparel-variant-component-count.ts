/**
 * FILES:GET_SHOP_PED_APPAREL_VARIANT_COMPONENT_COUNT
 *
 * 0x5A3F0A3B7ECCBD32

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedApparelVariantComponentCount(nameHash: number): number {
	const getShopPedApparelVariantComponentCount_result = Citizen.invokeNative<number>('0x5A3F0A3B7ECCBD32', nameHash);
	return getShopPedApparelVariantComponentCount_result;
}