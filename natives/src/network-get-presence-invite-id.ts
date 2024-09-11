/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_ID
 *
 * 0x08BFCB98CBB3ADB9

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {number}  
 */
export function networkGetPresenceInviteId(invite: number): number {
	const networkGetPresenceInviteId_result = Citizen.invokeNative<number>('0x08BFCB98CBB3ADB9', invite);
	return networkGetPresenceInviteId_result;
}