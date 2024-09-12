import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_PED_IN_CURRENT_CONVERSATION
 *
 * 0x6B919BD9340E189A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInCurrentConversation(ped: PedIndex): boolean {
	const isPedInCurrentConversation_result = Citizen.invokeNative<boolean>('0x6B919BD9340E189A', ped);
	return isPedInCurrentConversation_result;
}