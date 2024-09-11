import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MAX_TIME_IN_WATER
 *
 * 0xABA0B084615631D7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} maxTime
 */
export function setPedMaxTimeInWater(ped: PedIndex, maxTime: number): void {
	const setPedMaxTimeInWater_result = Citizen.invokeNative<void>('0xABA0B084615631D7', ped, maxTime);
	return setPedMaxTimeInWater_result;
}