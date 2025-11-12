/**
 * FILES:GET_SHOP_PED_APPAREL_FORCED_COMPONENT_COUNT
 *
 * 0x9FB2D71D9CEC8B5A

 * 
 * Returns number of possible values of the forcedComponentIndex argument of GET_FORCED_COMPONENT.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedApparelForcedComponentCount(nameHash: number): number {
	const getShopPedApparelForcedComponentCount_result = Citizen.invokeNative<number>('0x9FB2D71D9CEC8B5A', nameHash);
	return getShopPedApparelForcedComponentCount_result;
}