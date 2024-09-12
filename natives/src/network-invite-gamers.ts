import { SessionInvite } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_INVITE_GAMERS
 *
 * 0xAE84E9DFB523207B

 * 
 * ------------------------------------------------------------------
 * @param {SessionInvite} invite [Ref]
 * @param {number} numGamers
 * @param {string} szSubject
 * @param {string} szMessage
 * @returns {boolean}  
 */
export function networkInviteGamers(invite: SessionInvite /* ptr */, numGamers: number, szSubject: string = null!, szMessage: string = null!): boolean {
	const networkInviteGamers_result = Citizen.invokeNative<boolean>('0xAE84E9DFB523207B', invite.dataView, numGamers, szSubject, szMessage);
	return networkInviteGamers_result;
}