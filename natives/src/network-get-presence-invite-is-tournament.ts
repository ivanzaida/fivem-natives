/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_IS_TOURNAMENT
 *
 * 0x5CAC0C9085C92014

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {boolean}  
 */
export function networkGetPresenceInviteIsTournament(invite: number): boolean {
	const networkGetPresenceInviteIsTournament_result = Citizen.invokeNative<boolean>('0x5CAC0C9085C92014', invite);
	return networkGetPresenceInviteIsTournament_result;
}