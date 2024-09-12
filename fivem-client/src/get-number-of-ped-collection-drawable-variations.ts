import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS
 *
 * 0X310D0271

 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @returns {number}  Number of drawables available in the given collection. Returns 0 if ped or collection does not exist.
 */
export function getNumberOfPedCollectionDrawableVariations(ped: PedIndex, componentId: number, collection: string): number {
	const getNumberOfPedCollectionDrawableVariations_result = Citizen.invokeNative<number>('0X310D0271', ped, componentId, collection);
	return getNumberOfPedCollectionDrawableVariations_result;
}