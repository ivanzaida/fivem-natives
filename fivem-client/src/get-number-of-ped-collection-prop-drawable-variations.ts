import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_NUMBER_OF_PED_COLLECTION_PROP_DRAWABLE_VARIATIONS
 *
 * 0x3B6A13E1

 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} anchorPoint One of the anchor points from [SET_PED_PROP_INDEX](_0x93376B65A266EB5F)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @returns {number}  Number of props available in the given collection. Returns 0 if ped or collection does not exist.
 */
export function getNumberOfPedCollectionPropDrawableVariations(ped: PedIndex, anchorPoint: number, collection: string): number {
	const getNumberOfPedCollectionPropDrawableVariations_result = Citizen.invokeNative<number>('0x3B6A13E1', ped, anchorPoint, collection);
	return getNumberOfPedCollectionPropDrawableVariations_result;
}