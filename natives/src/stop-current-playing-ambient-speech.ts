import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:STOP_CURRENT_PLAYING_AMBIENT_SPEECH
 *
 * 0xDCD95AE65EFC28CE

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function stopCurrentPlayingAmbientSpeech(ped: PedIndex): void {
	const stopCurrentPlayingAmbientSpeech_result = Citizen.invokeNative<void>('0xDCD95AE65EFC28CE', ped);
	return stopCurrentPlayingAmbientSpeech_result;
}