import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:STOP_PED_SPEAKING_SYNCED
 *
 * 0x8ADC49ACBB4FF0E4

 * 
 * This doesn't stop a piece of dialogue that has been triggered.
 * This stops the ability to force ambient dialogue if set to true - however setting it to false, then triggering a context, then setting it to true again will allow this.
 * The ped will also be prevented from speaking on remote machines. Use STOP_PED_SPEAKING if you just want to affect the local machine.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} shouldDisable
 */
export function stopPedSpeakingSynced(ped: PedIndex, shouldDisable: boolean): void {
	const stopPedSpeakingSynced_result = Citizen.invokeNative<void>('0x8ADC49ACBB4FF0E4', ped, shouldDisable);
	return stopPedSpeakingSynced_result;
}