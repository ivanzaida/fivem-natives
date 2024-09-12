import { CoverpointIndex } from '@ivanzaida/structures'

/**
 * TASK:REMOVE_COVER_POINT
 *
 * 0x2115305B42B198D2

 * 
 * ------------------------------------------------------------------
 * @param {CoverpointIndex} index
 */
export function removeCoverPoint(index: CoverpointIndex): void {
	const removeCoverPoint_result = Citizen.invokeNative<void>('0x2115305B42B198D2', index);
	return removeCoverPoint_result;
}