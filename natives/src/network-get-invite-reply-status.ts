import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_INVITE_REPLY_STATUS
 *
 * 0xEAC3CA6CF6C9EB8C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {number}  
 */
export function networkGetInviteReplyStatus(gamerHandle: GamerHandle /* ptr */): number {
	const networkGetInviteReplyStatus_result = Citizen.invokeNative<number>('0xEAC3CA6CF6C9EB8C', gamerHandle.dataView);
	return networkGetInviteReplyStatus_result;
}