/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_INVITER
 *
 * 0x4886DE678C2CE4D2

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {string}  
 */
export function networkGetPresenceInviteInviter(invite: number): string {
	const networkGetPresenceInviteInviter_result = Citizen.invokeNative<string>('0x4886DE678C2CE4D2', invite);
	return networkGetPresenceInviteInviter_result;
}