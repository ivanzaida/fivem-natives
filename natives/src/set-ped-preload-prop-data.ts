import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PRELOAD_PROP_DATA
 *
 * 0xEC129CEFDDA0A303

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} anchor
 * @param {number} propId
 * @param {number} texId
 * @returns {number}  
 */
export function setPedPreloadPropData(ped: PedIndex, anchor: EPedPropPosition | number, propId: number, texId: number = 0): number {
	const setPedPreloadPropData_result = Citizen.invokeNative<number>('0xEC129CEFDDA0A303', ped, anchor, propId, texId);
	return setPedPreloadPropData_result;
}