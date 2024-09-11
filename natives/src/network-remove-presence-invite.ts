/**
 * NETWORK:NETWORK_REMOVE_PRESENCE_INVITE
 *
 * 0x97F5F6E518D1ADB5

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {boolean}  
 */
export function networkRemovePresenceInvite(invite: number): boolean {
	const networkRemovePresenceInvite_result = Citizen.invokeNative<boolean>('0x97F5F6E518D1ADB5', invite);
	return networkRemovePresenceInvite_result;
}