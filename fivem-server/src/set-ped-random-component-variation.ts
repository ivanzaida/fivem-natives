import { PedIndex, EPedRaceType } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_RANDOM_COMPONENT_VARIATION
 *
 * 0X4111BA46

 * Ensures that any skin tones which appear in different textures will be consistent for a characte
 * p1 is always 0 in R scripts.
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedRaceType} race
 */
export function setPedRandomComponentVariation(ped: PedIndex, race: EPedRaceType | number = 0): void {
	const setPedRandomComponentVariation_result = Citizen.invokeNative<void>('0X4111BA46', ped, race);
	return setPedRandomComponentVariation_result;
}