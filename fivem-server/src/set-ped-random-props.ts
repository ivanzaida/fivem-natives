import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_RANDOM_PROPS
 *
 * 0XE3318E0E

 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedRandomProps(ped: PedIndex): void {
	const setPedRandomProps_result = Citizen.invokeNative<void>('0XE3318E0E', ped);
	return setPedRandomProps_result;
}