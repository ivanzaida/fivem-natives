/**
 * FILES:GET_SHOP_PED_APPAREL_VARIANT_PROP_COUNT
 *
 * 0xCD6EB4A3CCA20602

 * 
 * `propHash`: Ped helmet prop hash?
 * This native returns 1 when the player helmet has a visor (there is another prop index for the same helmet with closed/opened visor variant) that can be toggled. 0 if there's no alternative version with a visor for this helmet prop.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedApparelVariantPropCount(nameHash: number): number {
	const getShopPedApparelVariantPropCount_result = Citizen.invokeNative<number>('0xCD6EB4A3CCA20602', nameHash);
	return getShopPedApparelVariantPropCount_result;
}