import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ARE_PLAYERS_IN_SAME_TUTORIAL_SESSION
 *
 * 0xDFAE61B1AEF262C2

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} firstPlayer
 * @param {PlayerIndex} secondPlayer
 * @returns {boolean}  
 */
export function networkArePlayersInSameTutorialSession(firstPlayer: PlayerIndex, secondPlayer: PlayerIndex): boolean {
	const networkArePlayersInSameTutorialSession_result = Citizen.invokeNative<boolean>('0xDFAE61B1AEF262C2', firstPlayer, secondPlayer);
	return networkArePlayersInSameTutorialSession_result;
}