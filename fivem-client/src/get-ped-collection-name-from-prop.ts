import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_COLLECTION_NAME_FROM_PROP
 *
 * 0x8ED0C17

 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#_0x75240BCB).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} anchorPoint One of the anchor points from [SET_PED_PROP_INDEX](_0x93376B65A266EB5F)
 * @param {number} propIndex Global prop index. Same as set by drawableId in [SET_PED_PROP_INDEX](_0x93376B65A266EB5F). Global prop index points to prop as if props from all collections for the given component are placed into one continuous array.
 * @returns {string}  Name of the collection that the given global drawable ID corresponds to. Base game collection is an empty string. Returns null if Ped is not found or the global index is out of bounds.
 */
export function getPedCollectionNameFromProp(ped: PedIndex, anchorPoint: number, propIndex: number): string {
	const getPedCollectionNameFromProp_result = Citizen.invokeNative<string>('0x8ED0C17', ped, anchorPoint, propIndex);
	return getPedCollectionNameFromProp_result;
}