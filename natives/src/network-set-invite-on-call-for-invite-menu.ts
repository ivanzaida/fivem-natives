import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_INVITE_ON_CALL_FOR_INVITE_MENU
 *
 * 0x36BA6B20E222965C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 */
export function networkSetInviteOnCallForInviteMenu(gamerHandle: GamerHandle /* ptr */): void {
	const networkSetInviteOnCallForInviteMenu_result = Citizen.invokeNative<void>('0x36BA6B20E222965C', gamerHandle.dataView);
	return networkSetInviteOnCallForInviteMenu_result;
}