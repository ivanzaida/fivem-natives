import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ENVEFF_COLOR_MODULATOR
 *
 * 0xA681A230BE3E4A24

 * 
 * Something related to the environmental effects natives.
 * In the "agency_heist3b" script, p1 - p3 are always under 100 - usually they are {87, 81, 68}. If SET_PED_ENVEFF_SCALE is set to 0.65 (instead of the usual 1.0), they use {74, 69, 60}
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setPedEnveffColorModulator(ped: PedIndex, red: number, green: number, blue: number): void {
	const setPedEnveffColorModulator_result = Citizen.invokeNative<void>('0xA681A230BE3E4A24', ped, red, green, blue);
	return setPedEnveffColorModulator_result;
}