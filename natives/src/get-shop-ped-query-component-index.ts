/**
 * FILES:GET_SHOP_PED_QUERY_COMPONENT_INDEX
 *
 * 0x55FF07D3A2FE8317

 * 
 * Used after calling SETUP_SHOP_PED_APPAREL_QUERY_TU, gets the index within the query results list of the component with nameHash
 * The returned index can then be passed to GET_SHOP_PED_QUERY_COMPONENT
 * 
 * Returns some sort of index/offset for components.
 * Needs _GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = false and componentId with the drawable's component slot first, returns -1 otherwise.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedQueryComponentIndex(nameHash: number): number {
	const getShopPedQueryComponentIndex_result = Citizen.invokeNative<number>('0x55FF07D3A2FE8317', nameHash);
	return getShopPedQueryComponentIndex_result;
}