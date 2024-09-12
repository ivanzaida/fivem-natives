import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_RECEIVE_LOCAL_INVITE
 *
 * 0x2879B51C18AEF948

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanReceiveLocalInvite(gamer: GamerHandle /* ptr */): boolean {
	const networkCanReceiveLocalInvite_result = Citizen.invokeNative<boolean>('0x2879B51C18AEF948', gamer.dataView);
	return networkCanReceiveLocalInvite_result;
}