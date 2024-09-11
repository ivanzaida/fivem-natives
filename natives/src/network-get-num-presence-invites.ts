/**
 * NETWORK:NETWORK_GET_NUM_PRESENCE_INVITES
 *
 * 0xA21ED22C344748B0

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetNumPresenceInvites(): number {
	const networkGetNumPresenceInvites_result = Citizen.invokeNative<number>('0xA21ED22C344748B0', );
	return networkGetNumPresenceInvites_result;
}