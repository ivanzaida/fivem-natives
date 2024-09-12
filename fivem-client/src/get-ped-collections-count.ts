import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_COLLECTIONS_COUNT
 *
 * 0x45946359

 * Returns number of variation collections available for the given Ped.Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#_0x310D0271) etc natives for more details on how to work with collections.`GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#_0xFED5D83A) to list all collections attached to Ped.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {number}  Number of Ped variation collections. 0 if Ped is not found.
 */
export function getPedCollectionsCount(ped: PedIndex): number {
	const getPedCollectionsCount_result = Citizen.invokeNative<number>('0x45946359', ped);
	return getPedCollectionsCount_result;
}