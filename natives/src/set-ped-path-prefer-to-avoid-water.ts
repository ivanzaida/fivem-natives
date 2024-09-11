import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_PREFER_TO_AVOID_WATER
 *
 * 0xF24ADF73381B85C1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} preferToAvoid
 */
export function setPedPathPreferToAvoidWater(ped: PedIndex, preferToAvoid: boolean): void {
	const setPedPathPreferToAvoidWater_result = Citizen.invokeNative<void>('0xF24ADF73381B85C1', ped, preferToAvoid);
	return setPedPathPreferToAvoidWater_result;
}