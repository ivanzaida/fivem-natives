import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_CONVERSATION_PED_DEAD
 *
 * 0xBE65C2DD27AEFD7B

 * 
 * Checks that the ped is dead, using the same check as the audio conversation system.  This can be used to avoid asserts regarding
 * conversations failing to play due to dead peds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isConversationPedDead(ped: PedIndex): boolean {
	const isConversationPedDead_result = Citizen.invokeNative<boolean>('0xBE65C2DD27AEFD7B', ped);
	return isConversationPedDead_result;
}