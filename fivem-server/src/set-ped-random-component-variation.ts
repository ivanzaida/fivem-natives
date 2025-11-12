import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_RANDOM_COMPONENT_VARIATION
 *
 * 0x4111BA46

 * 
 * Ensures that any skin tones which appear in different textures will be consistent for a characte
 * 
 * p1 is always 0 in R scripts.
 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} p1
 */
export function setPedRandomComponentVariation(ped: PedIndex, p1: number): void {
	const setPedRandomComponentVariation_result = Citizen.invokeNative<void>('0x4111BA46', ped, p1);
	return setPedRandomComponentVariation_result;
}