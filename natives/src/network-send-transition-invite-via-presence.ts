import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SEND_TRANSITION_INVITE_VIA_PRESENCE
 *
 * 0x6651FAED711991F0

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @param {string} szContentID
 * @param {number} playlistLength
 * @param {number} playlistCurrent
 * @returns {boolean}  
 */
export function networkSendTransitionInviteViaPresence(gamer: GamerHandle /* ptr */, szContentID: string, playlistLength: number, playlistCurrent: number): boolean {
	const networkSendTransitionInviteViaPresence_result = Citizen.invokeNative<boolean>('0x6651FAED711991F0', gamer.dataView, szContentID, playlistLength, playlistCurrent);
	return networkSendTransitionInviteViaPresence_result;
}