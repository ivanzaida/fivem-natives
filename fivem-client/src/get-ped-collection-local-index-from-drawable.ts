import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE
 *
 * 0X94EB1FE4

 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#_0x88711BBA).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @param {number} drawableId Global drawable ID. Same as set in [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80). Global drawable ID points to drawables as if drawables from all collections for the given component are placed into one continuous array.
 * @returns {number}  Local index inside a collection that the given global drawable ID corresponds to. Returns -1 if Ped is not found or the global index is out of bounds.
 */
export function getPedCollectionLocalIndexFromDrawable(ped: PedIndex, componentId: number, drawableId: number): number {
	const getPedCollectionLocalIndexFromDrawable_result = Citizen.invokeNative<number>('0X94EB1FE4', ped, componentId, drawableId);
	return getPedCollectionLocalIndexFromDrawable_result;
}