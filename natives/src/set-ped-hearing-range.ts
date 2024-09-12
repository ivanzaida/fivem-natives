import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HEARING_RANGE
 *
 * 0x35365D1E3ADB7109

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} hearingRange
 */
export function setPedHearingRange(ped: PedIndex, hearingRange: number): void {
	const setPedHearingRange_result = Citizen.invokeNative<void>('0x35365D1E3ADB7109', ped, hearingRange);
	return setPedHearingRange_result;
}