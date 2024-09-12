import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_COLLECTION_PRELOAD_PROP_DATA
 *
 * 0X14B5BBE0

 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#_0xFBDB885F) natives.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} anchorPoint One of the anchor points from [SET_PED_PROP_INDEX](_0x93376B65A266EB5F)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @param {number} propIndex Local prop index inside the given collection. Refer to [GET_NUMBER_OF_PED_COLLECTION_PROP_DRAWABLE_VARIATIONS](_0x3B6A13E1).
 * @param {number} textureId The texture id of the drawable. Refer to [GET_NUMBER_OF_PED_COLLECTION_PROP_TEXTURE_VARIATIONS](_0x75CAF9CC).
 */
export function setPedCollectionPreloadPropData(ped: PedIndex, anchorPoint: number, collection: string, propIndex: number, textureId: number): void {
	const setPedCollectionPreloadPropData_result = Citizen.invokeNative<void>('0X14B5BBE0', ped, anchorPoint, collection, propIndex, textureId);
	return setPedCollectionPreloadPropData_result;
}