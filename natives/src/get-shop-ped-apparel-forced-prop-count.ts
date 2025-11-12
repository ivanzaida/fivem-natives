/**
 * FILES:GET_SHOP_PED_APPAREL_FORCED_PROP_COUNT
 *
 * 0xCBBA20766F48DC67

 * 
 * Returns number of possible values of the forcedPropIndex argument of GET_FORCED_PROP.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedApparelForcedPropCount(nameHash: number): number {
	const getShopPedApparelForcedPropCount_result = Citizen.invokeNative<number>('0xCBBA20766F48DC67', nameHash);
	return getShopPedApparelForcedPropCount_result;
}