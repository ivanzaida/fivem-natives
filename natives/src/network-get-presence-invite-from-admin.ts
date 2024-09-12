/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_FROM_ADMIN
 *
 * 0xB73605870CAE4123

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {boolean}  
 */
export function networkGetPresenceInviteFromAdmin(invite: number): boolean {
	const networkGetPresenceInviteFromAdmin_result = Citizen.invokeNative<boolean>('0xB73605870CAE4123', invite);
	return networkGetPresenceInviteFromAdmin_result;
}