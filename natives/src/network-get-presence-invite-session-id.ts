/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_SESSION_ID
 *
 * 0x32FF25F8A134DEC8

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {number}  
 */
export function networkGetPresenceInviteSessionId(invite: number): number {
	const networkGetPresenceInviteSessionId_result = Citizen.invokeNative<number>('0x32FF25F8A134DEC8', invite);
	return networkGetPresenceInviteSessionId_result;
}