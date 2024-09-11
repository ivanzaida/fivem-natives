import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_SCRIPTED_SPEECH_PLAYING
 *
 * 0xAD0D2187C5FE447D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isScriptedSpeechPlaying(ped: PedIndex): boolean {
	const isScriptedSpeechPlaying_result = Citizen.invokeNative<boolean>('0xAD0D2187C5FE447D', ped);
	return isScriptedSpeechPlaying_result;
}