import { EGreatestMoment } from '@ivanzaida/structures'

/**
 * RECORDING:RECORD_GREATEST_MOMENT
 *
 * 0x5CFA0003D667CD0F

 * 
 * Record a greatest moment
 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EGreatestMoment} greatestMoment
 * @param {number} startTime
 * @param {number} duration
 */
export function recordGreatestMoment(greatestMoment: EGreatestMoment | number, startTime: number, duration: number): void {
	const recordGreatestMoment_result = Citizen.invokeNative<void>('0x5CFA0003D667CD0F', greatestMoment, startTime, duration);
	return recordGreatestMoment_result;
}