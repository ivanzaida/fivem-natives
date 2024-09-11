/**
 * NETWORK:NETWORK_GET_PRESENCE_INVITE_PLAYLIST_LENGTH
 *
 * 0x06B43310DD2DEF12

 * 
 * ------------------------------------------------------------------
 * @param {number} invite
 * @returns {number}  
 */
export function networkGetPresenceInvitePlaylistLength(invite: number): number {
	const networkGetPresenceInvitePlaylistLength_result = Citizen.invokeNative<number>('0x06B43310DD2DEF12', invite);
	return networkGetPresenceInvitePlaylistLength_result;
}