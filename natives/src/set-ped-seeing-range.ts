import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SEEING_RANGE
 *
 * 0x25DBF9F9C6BDFFEA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} seeingRange
 */
export function setPedSeeingRange(ped: PedIndex, seeingRange: number): void {
	const setPedSeeingRange_result = Citizen.invokeNative<void>('0x25DBF9F9C6BDFFEA', ped, seeingRange);
	return setPedSeeingRange_result;
}