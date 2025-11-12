import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_PROP
 *
 * 0x09397806857F5DFB

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} position
 */
export function clearPedProp(ped: PedIndex, position: EPedPropPosition | number): void {
	const clearPedProp_result = Citizen.invokeNative<void>('0x09397806857F5DFB', ped, position);
	return clearPedProp_result;
}