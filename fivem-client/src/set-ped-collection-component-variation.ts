import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_COLLECTION_COMPONENT_VARIATION
 *
 * 0x88711BBA

 * An alternative to [SET_PED_COMPONENT_VARIATION](#_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#_0x94EB1FE4) natives.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @param {number} drawableId Local drawable Id inside the given collection. Refer to [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](_0x310D0271).
 * @param {number} textureId The texture id of the drawable. Refer to [GET_NUMBER_OF_PED_COLLECTION_TEXTURE_VARIATIONS](_0xD2C15D7).
 * @param {number} paletteId 0 to 3.
 */
export function setPedCollectionComponentVariation(ped: PedIndex, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void {
	const setPedCollectionComponentVariation_result = Citizen.invokeNative<void>('0x88711BBA', ped, componentId, collection, drawableId, textureId, paletteId);
	return setPedCollectionComponentVariation_result;
}