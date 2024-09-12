import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX
 *
 * 0x9970386F

 * An analogue to [GET_PED_DRAWABLE_VARIATION](#_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#_0xBCE0AB63) collection) instead of the global drawable index.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} componentId One of the components from [SET_PED_COMPONENT_VARIATION](_0x262B14F48D29DE80)
 * @returns {number}  Local drawable index of the drawable that is currently used in the given ped and component.
 */
export function getPedDrawableVariationCollectionLocalIndex(ped: PedIndex, componentId: number): number {
	const getPedDrawableVariationCollectionLocalIndex_result = Citizen.invokeNative<number>('0x9970386F', ped, componentId);
	return getPedDrawableVariationCollectionLocalIndex_result;
}