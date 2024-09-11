import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_COLLECTION_COMPONENT_VARIATION_GEN9_EXCLUSIVE
 *
 * 0X33B2AFA2

 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9_EXCLUSIVE](#_0xC767B581) that uses local collection indexing instead of the global one.The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#_0x94EB1FE4) natives.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @param {string} collection Name of the collection. Empty string for the base game collection. See [GET_PED_COLLECTION_NAME](_0xFED5D83A) in order to list all available collections.
 * @param {number} drawableId Local drawable Id inside the given collection. Refer to [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](_0x310D0271).
 * @returns {boolean}  Whether or not the ped component variation is a gen9 exclusive (stub assets).
 */
export function isPedCollectionComponentVariationGen9Exclusive(ped: PedIndex, componentId: number, collection: string, drawableId: number): boolean {
	const isPedCollectionComponentVariationGen9Exclusive_result = Citizen.invokeNative<boolean>('0X33B2AFA2', ped, componentId, collection, drawableId);
	return isPedCollectionComponentVariationGen9Exclusive_result;
}