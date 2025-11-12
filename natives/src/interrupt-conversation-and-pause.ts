import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:INTERRUPT_CONVERSATION_AND_PAUSE
 *
 * 0xEEC6E2199CA0A2FC

 * 
 * Handles conversation interrupts and pauses, using the code-side system for improved timing and to minimize
 * unfriendly logic interactions.
 * 
 * One call found in the b617d scripts:
 * 
 * AUDIO::INTERRUPT_CONVERSATION_AND_PAUSE(NETWORK::NET_TO_PED(l_3989._f26F[0/1/]), "CONV_INTERRUPT_QUIT_IT", "LESTER");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} interrupter
 * @param {string} context
 * @param {string} voiceName The voicename for the audio asset
 */
export function interruptConversationAndPause(interrupter: PedIndex, context: string, voiceName: string = null!): void {
	const interruptConversationAndPause_result = Citizen.invokeNative<void>('0xEEC6E2199CA0A2FC', interrupter, context, voiceName);
	return interruptConversationAndPause_result;
}