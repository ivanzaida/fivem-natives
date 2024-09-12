/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_CONTENT_ID
 *
 * 0xE533A869F4C34F41

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {string}  
 */
export function networkGetPresenceInviteContentId(invite: number): string {
	const networkGetPresenceInviteContentId_result = Citizen.invokeNative<string>('0xE533A869F4C34F41', invite);
	return networkGetPresenceInviteContentId_result;
}