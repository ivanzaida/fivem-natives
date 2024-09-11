import { FloatRef, IntRef } from '@ivanzaida/structures'

/**
 * AUDIO:GET_NEXT_AUDIBLE_BEAT
 *
 * 0x604E6C2DCB4B137F

 * 
 * ------------------------------------------------------------------
 * @param {FloatRef} timeS [Ref]
 * @param {FloatRef} bpm [Ref]
 * @param {IntRef} beatNum [Ref]
 * @returns {boolean}  
 */
export function getNextAudibleBeat(timeS: FloatRef /* ptr */, bpm: FloatRef /* ptr */, beatNum: IntRef /* ptr */): boolean {
	const getNextAudibleBeat_result = Citizen.invokeNative<boolean>('0x604E6C2DCB4B137F', timeS.dataView, bpm.dataView, beatNum.dataView);
	return getNextAudibleBeat_result;
}