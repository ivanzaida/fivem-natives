import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_STREAM_FROM_PED
 *
 * 0xF60A7646F4B460F7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function playStreamFromPed(ped: PedIndex): void {
	const playStreamFromPed_result = Citizen.invokeNative<void>('0xF60A7646F4B460F7', ped);
	return playStreamFromPed_result;
}