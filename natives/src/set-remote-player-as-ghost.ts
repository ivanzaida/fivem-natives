import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_REMOTE_PLAYER_AS_GHOST
 *
 * 0xBF798C4E54C2B4E1

 * 
 * Enables ghosting between specific players
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @param {boolean} set
 */
export function setRemotePlayerAsGhost(playerId: PlayerIndex, set: boolean): void {
	const setRemotePlayerAsGhost_result = Citizen.invokeNative<void>('0xBF798C4E54C2B4E1', playerId, set);
	return setRemotePlayerAsGhost_result;
}