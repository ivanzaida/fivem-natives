import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:INTERRUPT_CONVERSATION
 *
 * 0x695EDD4AD352F831

 * 
 * Handles conversation interrupts, using the code-side system for improved timing and to minimize
 * unfriendly logic interactions.
 * 
 * Example from carsteal3.c: AUDIO::INTERRUPT_CONVERSATION(PLAYER::PLAYER_PED_ID(), "CST4_CFAA", "FRANKLIN");
 * Voicelines can be found in GTAV\x64\audio\sfx in files starting with "SS_" which seems to mean scripted speech.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} interrupter
 * @param {string} context
 * @param {string} voiceName The voicename for the audio asset
 */
export function interruptConversation(interrupter: PedIndex, context: string, voiceName: string = null!): void {
	const interruptConversation_result = Citizen.invokeNative<void>('0x695EDD4AD352F831', interrupter, context, voiceName);
	return interruptConversation_result;
}