import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_USE_AUTO_CONVERSATION_LOOKAT
 *
 * 0x26C12212366CBF6E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowAutoConversationLookAts
 */
export function setPedCanUseAutoConversationLookat(ped: PedIndex, allowAutoConversationLookAts: boolean): void {
	const setPedCanUseAutoConversationLookat_result = Citizen.invokeNative<void>('0x26C12212366CBF6E', ped, allowAutoConversationLookAts);
	return setPedCanUseAutoConversationLookat_result;
}