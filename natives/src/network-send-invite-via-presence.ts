import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SEND_INVITE_VIA_PRESENCE
 *
 * 0xBB7F9D4FB57B4FFA

 * 
 * Send session invite via presence
 * Pass NULL to content ID to indicate freemode invite
 * Pass 0 to nPlaylistLength to indicate no playlist
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @param {string} szContentID
 * @param {number} playlistLength
 * @param {number} playlistCurrent
 * @returns {boolean}  
 */
export function networkSendInviteViaPresence(gamer: GamerHandle /* ptr */, szContentID: string, playlistLength: number, playlistCurrent: number): boolean {
	const networkSendInviteViaPresence_result = Citizen.invokeNative<boolean>('0xBB7F9D4FB57B4FFA', gamer.dataView, szContentID, playlistLength, playlistCurrent);
	return networkSendInviteViaPresence_result;
}