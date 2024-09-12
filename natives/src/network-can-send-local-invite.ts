import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_SEND_LOCAL_INVITE
 *
 * 0x75AC04DC09B758E5

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanSendLocalInvite(gamer: GamerHandle /* ptr */): boolean {
	const networkCanSendLocalInvite_result = Citizen.invokeNative<boolean>('0x75AC04DC09B758E5', gamer.dataView);
	return networkCanSendLocalInvite_result;
}