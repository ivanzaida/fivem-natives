import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_PED_PROP
 *
 * 0X2D23D743

 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} position
 */
export function clearPedProp(ped: PedIndex, position: EPedPropPosition | number): void {
	const clearPedProp_result = Citizen.invokeNative<void>('0X2D23D743', ped, position);
	return clearPedProp_result;
}