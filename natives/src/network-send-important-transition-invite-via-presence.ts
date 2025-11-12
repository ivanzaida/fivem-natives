import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SEND_IMPORTANT_TRANSITION_INVITE_VIA_PRESENCE
 *
 * 0xA8778038A42EA249

 * 
 * Contains the string "NETWORK_SEND_PRESENCE_TRANSITION_INVITE" but so does 0xC116FF9B4D488291; seems to fit alphabetically here, tho.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @param {string} szContentID
 * @param {number} playlistLength
 * @param {number} playlistCurrent
 * @returns {boolean}  
 */
export function networkSendImportantTransitionInviteViaPresence(gamer: GamerHandle /* ptr */, szContentID: string, playlistLength: number, playlistCurrent: number): boolean {
	const networkSendImportantTransitionInviteViaPresence_result = Citizen.invokeNative<boolean>('0xA8778038A42EA249', gamer.dataView, szContentID, playlistLength, playlistCurrent);
	return networkSendImportantTransitionInviteViaPresence_result;
}