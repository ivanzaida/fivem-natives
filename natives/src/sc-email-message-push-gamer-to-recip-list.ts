import { GamerHandle } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_EMAIL_MESSAGE_PUSH_GAMER_TO_RECIP_LIST
 *
 * 0xCF62A74234A425DB

 * 
 * Call this function a bunch of times to put together the list, then call
 * an SC_EMAIL_SEND_EMAIL function.  The list is cleared each time the list is used
 * to send a message
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 */
export function scEmailMessagePushGamerToRecipList(gamer: GamerHandle /* ptr */): void {
	const scEmailMessagePushGamerToRecipList_result = Citizen.invokeNative<void>('0xCF62A74234A425DB', gamer.dataView);
	return scEmailMessagePushGamerToRecipList_result;
}