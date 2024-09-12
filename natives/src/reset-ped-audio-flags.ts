import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:RESET_PED_AUDIO_FLAGS
 *
 * 0x4E7D42A9AC9E71EB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedAudioFlags(ped: PedIndex): void {
	const resetPedAudioFlags_result = Citizen.invokeNative<void>('0x4E7D42A9AC9E71EB', ped);
	return resetPedAudioFlags_result;
}