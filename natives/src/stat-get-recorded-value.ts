import { FloatRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_RECORDED_VALUE
 *
 * 0x6975D53533891910

 * 
 * This can be called at anytime. Will retrieve the last recorded value after a stop, or the current value while recording.
 * If no value has been recorded, returns false and the value is unchanged.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {FloatRef} value [Ref]
 * @returns {boolean}  
 */
export function statGetRecordedValue(value: FloatRef /* ptr */): boolean {
	const statGetRecordedValue_result = Citizen.invokeNative<boolean>('0x6975D53533891910', value.dataView);
	return statGetRecordedValue_result;
}