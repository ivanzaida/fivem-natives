import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:GET_PED_PROP_TEXTURE_INDEX
 *
 * 0x0DC23FA727759F9F

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} position
 * @returns {number}  
 */
export function getPedPropTextureIndex(ped: PedIndex, position: EPedPropPosition | number): number {
	const getPedPropTextureIndex_result = Citizen.invokeNative<number>('0x0DC23FA727759F9F', ped, position);
	return getPedPropTextureIndex_result;
}