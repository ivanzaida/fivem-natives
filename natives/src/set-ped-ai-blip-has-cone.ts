import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_AI_BLIP_HAS_CONE
 *
 * 0x2A253D5DC7CA1CEC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} hasCone
 */
export function setPedAiBlipHasCone(ped: PedIndex, hasCone: boolean): void {
	const setPedAiBlipHasCone_result = Citizen.invokeNative<void>('0x2A253D5DC7CA1CEC', ped, hasCone);
	return setPedAiBlipHasCone_result;
}