import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RANDOM_PROPS
 *
 * 0xB6FA664D27C123AC

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedRandomProps(ped: PedIndex): void {
	const setPedRandomProps_result = Citizen.invokeNative<void>('0xB6FA664D27C123AC', ped);
	return setPedRandomProps_result;
}