import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME
 *
 * 0xBCE0AB63

 * An analogue to [GET_PED_DRAWABLE_VARIATION](#_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#_0x9970386F).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @returns {string}  Collection name to which the current drawable used in the given ped and component belongs to. Returns null if Ped is not found or index is out of bounds.
 */
export function getPedDrawableVariationCollectionName(ped: PedIndex, componentId: number): string {
	const getPedDrawableVariationCollectionName_result = Citizen.invokeNative<string>('0xBCE0AB63', ped, componentId);
	return getPedDrawableVariationCollectionName_result;
}