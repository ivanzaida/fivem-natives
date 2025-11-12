import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:DISABLE_PED_PAIN_AUDIO
 *
 * 0xEA65800FC08BB2CB

 * 
 * Disable ped pain audio
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} shouldDisable
 */
export function disablePedPainAudio(ped: PedIndex, shouldDisable: boolean): void {
	const disablePedPainAudio_result = Citizen.invokeNative<void>('0xEA65800FC08BB2CB', ped, shouldDisable);
	return disablePedPainAudio_result;
}