/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_INDEX_BY_ID
 *
 * 0x7F36EF28AE77E331

 * 
 * ------------------------------------------------------------------
 * @param {number} inviteID
 * @returns {number}  
 */
export function networkGetPresenceInviteIndexById(inviteID: number): number {
	const networkGetPresenceInviteIndexById_result = Citizen.invokeNative<number>('0x7F36EF28AE77E331', inviteID);
	return networkGetPresenceInviteIndexById_result;
}