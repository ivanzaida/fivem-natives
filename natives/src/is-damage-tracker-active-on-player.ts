import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_DAMAGE_TRACKER_ACTIVE_ON_PLAYER
 *
 * 0xE29ED67EC061E70B

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @returns {boolean}  
 */
export function isDamageTrackerActiveOnPlayer(playerId: PlayerIndex): boolean {
	const isDamageTrackerActiveOnPlayer_result = Citizen.invokeNative<boolean>('0xE29ED67EC061E70B', playerId);
	return isDamageTrackerActiveOnPlayer_result;
}