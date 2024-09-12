import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_HANDLE
 *
 * 0x9533853565DED3F7

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkGetPresenceInviteHandle(invite: number, gamer: GamerHandle /* ptr */): boolean {
	const networkGetPresenceInviteHandle_result = Citizen.invokeNative<boolean>('0x9533853565DED3F7', invite, gamer.dataView);
	return networkGetPresenceInviteHandle_result;
}