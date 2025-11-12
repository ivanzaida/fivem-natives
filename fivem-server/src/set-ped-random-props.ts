import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_RANDOM_PROPS
 *
 * 0xE3318E0E

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped handle.
 */
export function setPedRandomProps(ped: PedIndex): void {
	const setPedRandomProps_result = Citizen.invokeNative<void>('0xE3318E0E', ped);
	return setPedRandomProps_result;
}