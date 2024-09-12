/**
 * NETWORK:NETWORK_ACCEPT_PRESENCE_INVITE
 *
 * 0xA69636D9FC46B96C

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {boolean}  
 */
export function networkAcceptPresenceInvite(invite: number): boolean {
	const networkAcceptPresenceInvite_result = Citizen.invokeNative<boolean>('0xA69636D9FC46B96C', invite);
	return networkAcceptPresenceInvite_result;
}