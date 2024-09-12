import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_ANY_SPEECH_PLAYING
 *
 * 0x75E315E7679F4F24

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isAnySpeechPlaying(ped: PedIndex): boolean {
	const isAnySpeechPlaying_result = Citizen.invokeNative<boolean>('0x75E315E7679F4F24', ped);
	return isAnySpeechPlaying_result;
}