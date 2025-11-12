/**
 * FILES:GET_SHOP_PED_QUERY_PROP_INDEX
 *
 * 0x289EDE99827978AD

 * 
 * Used after calling SETUP_SHOP_PED_APPAREL_QUERY_TU, gets the index within the query results list of the prop with nameHash
 * The returned index can then be passed to GET_SHOP_PED_QUERY_PROP
 * 
 * Returns some sort of index/offset for props.
 * Needs _GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = true and componentId = -1 first, returns -1 otherwise.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getShopPedQueryPropIndex(nameHash: number): number {
	const getShopPedQueryPropIndex_result = Citizen.invokeNative<number>('0x289EDE99827978AD', nameHash);
	return getShopPedQueryPropIndex_result;
}