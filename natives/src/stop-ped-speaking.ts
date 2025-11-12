import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:STOP_PED_SPEAKING
 *
 * 0xFD61BB3B8F1CDB6D

 * 
 * This doesn't stop a piece of dialogue that has been triggered.
 * This stops the ability to force ambient dialogue if set to true - however setting it to false, then triggering a context, then setting it to true again will allow this.
 * Nb. This does not sync over the network, it will only affect peds locally. Use STOP_PED_SPEAKING_SYNCED if you need to affect peds on other machines too.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} shouldDisable
 */
export function stopPedSpeaking(ped: PedIndex, shouldDisable: boolean): void {
	const stopPedSpeaking_result = Citizen.invokeNative<void>('0xFD61BB3B8F1CDB6D', ped, shouldDisable);
	return stopPedSpeaking_result;
}