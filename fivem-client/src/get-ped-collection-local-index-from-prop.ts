import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP
 *
 * 0xFBDB885F

 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#_0x75240BCB).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} anchorPoint One of the anchor points from [SET_PED_PROP_INDEX](_0x93376B65A266EB5F)
 * @param {number} propIndex Global prop index. Same as set by drawableId in [SET_PED_PROP_INDEX](_0x93376B65A266EB5F). Global prop index points to prop as if props from all collections for the given component are placed into one continuous array.
 * @returns {number}  Local index inside a collection that the given global prop index corresponds to. Returns -1 if Ped is not found or the global index is out of bounds.
 */
export function getPedCollectionLocalIndexFromProp(ped: PedIndex, anchorPoint: number, propIndex: number): number {
	const getPedCollectionLocalIndexFromProp_result = Citizen.invokeNative<number>('0xFBDB885F', ped, anchorPoint, propIndex);
	return getPedCollectionLocalIndexFromProp_result;
}