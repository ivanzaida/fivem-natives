import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:GET_PED_PROP_INDEX
 *
 * 0xB204F40D393426B6

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
export function getPedPropIndex(ped: PedIndex, position: EPedPropPosition | number): number {
	const getPedPropIndex_result = Citizen.invokeNative<number>('0xB204F40D393426B6', ped, position);
	return getPedPropIndex_result;
}