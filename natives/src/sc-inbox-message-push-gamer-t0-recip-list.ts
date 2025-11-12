import { GamerHandle } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_PUSH_GAMER_T0_RECIP_LIST
 *
 * 0x693B9B4C2F3B9312

 * 
 * Call this function a bunch of times to put together the list, then call
 * an INBOX_SEND function.  The list is cleared each time the list is used
 * to send a message
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 */
export function scInboxMessagePushGamerT0RecipList(gamer: GamerHandle /* ptr */): void {
	const scInboxMessagePushGamerT0RecipList_result = Citizen.invokeNative<void>('0x693B9B4C2F3B9312', gamer.dataView);
	return scInboxMessagePushGamerT0RecipList_result;
}