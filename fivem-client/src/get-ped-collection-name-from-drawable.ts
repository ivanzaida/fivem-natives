import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_COLLECTION_NAME_FROM_DRAWABLE
 *
 * 0XD6BBA48B

 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#_0x88711BBA).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @param {number} drawableId Global drawable ID. Same as set in [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80). Global drawable ID points to drawables as if drawables from all collections for the given component are placed into one continuous array.
 * @returns {string}  Name of the collection that the given global drawable ID corresponds to. Base game collection is an empty string. Returns null if Ped is not found or the global index is out of bounds.
 */
export function getPedCollectionNameFromDrawable(ped: PedIndex, componentId: number, drawableId: number): string {
	const getPedCollectionNameFromDrawable_result = Citizen.invokeNative<string>('0XD6BBA48B', ped, componentId, drawableId);
	return getPedCollectionNameFromDrawable_result;
}