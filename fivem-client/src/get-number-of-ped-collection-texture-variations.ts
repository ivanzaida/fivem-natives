import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_NUMBER_OF_PED_COLLECTION_TEXTURE_VARIATIONS
 *
 * 0XD2C15D7

 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @param {number} drawableId Local drawable Id inside the given collection. Refer to [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](_0x310D0271).
 * @returns {number}  Number of texture variations available for the given drawable component. Returns 0 if ped or collection does not exist or index is out of bounds.
 */
export function getNumberOfPedCollectionTextureVariations(ped: PedIndex, componentId: number, collection: string, drawableId: number): number {
	const getNumberOfPedCollectionTextureVariations_result = Citizen.invokeNative<number>('0XD2C15D7', ped, componentId, collection, drawableId);
	return getNumberOfPedCollectionTextureVariations_result;
}