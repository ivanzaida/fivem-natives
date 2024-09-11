import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:STOP_CURRENT_PLAYING_SPEECH
 *
 * 0x16DD8628F525A206

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function stopCurrentPlayingSpeech(ped: PedIndex): void {
	const stopCurrentPlayingSpeech_result = Citizen.invokeNative<void>('0x16DD8628F525A206', ped);
	return stopCurrentPlayingSpeech_result;
}