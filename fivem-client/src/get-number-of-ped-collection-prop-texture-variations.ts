import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_NUMBER_OF_PED_COLLECTION_PROP_TEXTURE_VARIATIONS
 *
 * 0x75CAF9CC

 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} anchorPoint One of the anchor points from [SET_PED_PROP_INDEX](_0x93376B65A266EB5F)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @param {number} propIndex Local prop index inside the given collection. Refer to [GET_NUMBER_OF_PED_COLLECTION_PROP_DRAWABLE_VARIATIONS](_0x3B6A13E1).
 * @returns {number}  Number of texture variations available for the given prop. Returns 0 if ped or collection does not exist or index is out of bounds.
 */
export function getNumberOfPedCollectionPropTextureVariations(ped: PedIndex, anchorPoint: number, collection: string, propIndex: number): number {
	const getNumberOfPedCollectionPropTextureVariations_result = Citizen.invokeNative<number>('0x75CAF9CC', ped, anchorPoint, collection, propIndex);
	return getNumberOfPedCollectionPropTextureVariations_result;
}