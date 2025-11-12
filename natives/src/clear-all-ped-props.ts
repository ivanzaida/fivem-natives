import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_ALL_PED_PROPS
 *
 * 0x445E7F949766A0C7

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearAllPedProps(ped: PedIndex): void {
	const clearAllPedProps_result = Citizen.invokeNative<void>('0x445E7F949766A0C7', ped);
	return clearAllPedProps_result;
}