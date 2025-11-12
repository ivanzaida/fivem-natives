import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:ADD_PED_TO_CONVERSATION
 *
 * 0x302B7D91564CDE7F

 * 
 * 4 calls in the b617d scripts. The only one with p0 and p2 in clear text:
 * 
 * AUDIO::ADD_PED_TO_CONVERSATION(5, l_AF, "DINAPOLI");
 * 
 * =================================================
 * One of the 2 calls in dialogue_handler.c p0 is in a while-loop, and so is determined to also possibly be 0 - 15.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} speakerConversation
 * @param {PedIndex} speakerPed
 * @param {string} voiceName
 */
export function addPedToConversation(speakerConversation: number, speakerPed: PedIndex, voiceName: string): void {
	const addPedToConversation_result = Citizen.invokeNative<void>('0x302B7D91564CDE7F', speakerConversation, speakerPed, voiceName);
	return addPedToConversation_result;
}