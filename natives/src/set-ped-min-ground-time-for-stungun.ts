import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MIN_GROUND_TIME_FOR_STUNGUN
 *
 * 0xFED960E0DE07E343

 * 
 * Ped will stay on the ground after being stunned for at lest ms time. (in milliseconds)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} minTime
 */
export function setPedMinGroundTimeForStungun(ped: PedIndex, minTime: number): void {
	const setPedMinGroundTimeForStungun_result = Citizen.invokeNative<void>('0xFED960E0DE07E343', ped, minTime);
	return setPedMinGroundTimeForStungun_result;
}