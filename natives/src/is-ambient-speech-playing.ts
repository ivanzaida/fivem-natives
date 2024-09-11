import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_AMBIENT_SPEECH_PLAYING
 *
 * 0x912159A05BE6B52E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isAmbientSpeechPlaying(ped: PedIndex): boolean {
	const isAmbientSpeechPlaying_result = Citizen.invokeNative<boolean>('0x912159A05BE6B52E', ped);
	return isAmbientSpeechPlaying_result;
}