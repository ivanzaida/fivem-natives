import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DESIRED_HEADING
 *
 * 0xFBF90D96AEB26BCF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} desiredHeading
 */
export function setPedDesiredHeading(ped: PedIndex, desiredHeading: number): void {
	const setPedDesiredHeading_result = Citizen.invokeNative<void>('0xFBF90D96AEB26BCF', ped, desiredHeading);
	return setPedDesiredHeading_result;
}