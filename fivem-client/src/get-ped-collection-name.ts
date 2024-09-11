import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_COLLECTION_NAME
 *
 * 0XFED5D83A

 * Returns name of collection under given index for the given Ped.Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#_0x310D0271) etc natives for more details on how to work with collections.`GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#_0x45946359) to list all collections attached to Ped.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} index The target collection index
 * @returns {string}  Name of the collection with given index. Base game collection (always stored with index 0) is an empty string. Returns null if Ped is not found or index is out of bounds.
 */
export function getPedCollectionName(ped: PedIndex, index: number): string {
	const getPedCollectionName_result = Citizen.invokeNative<string>('0XFED5D83A', ped, index);
	return getPedCollectionName_result;
}