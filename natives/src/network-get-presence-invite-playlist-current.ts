/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_PLAYLIST_CURRENT
 *
 * 0x0A9FDF40CD06A05D

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {number}  
 */
export function networkGetPresenceInvitePlaylistCurrent(invite: number): number {
	const networkGetPresenceInvitePlaylistCurrent_result = Citizen.invokeNative<number>('0x0A9FDF40CD06A05D', invite);
	return networkGetPresenceInvitePlaylistCurrent_result;
}