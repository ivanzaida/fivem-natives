import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_INVITE_FAILED_MESSAGE_FOR_INVITE_MENU
 *
 * 0x8EBBDA7981838F74

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {string} failedInviteMessage
 */
export function networkSetInviteFailedMessageForInviteMenu(gamerHandle: GamerHandle /* ptr */, failedInviteMessage: string): void {
	const networkSetInviteFailedMessageForInviteMenu_result = Citizen.invokeNative<void>('0x8EBBDA7981838F74', gamerHandle.dataView, failedInviteMessage);
	return networkSetInviteFailedMessageForInviteMenu_result;
}