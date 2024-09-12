import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:ACTIVATE_DAMAGE_TRACKER_ON_PLAYER
 *
 * 0xEB41AFC8A3FF370B

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId
 * @param {boolean} activateTracker
 */
export function activateDamageTrackerOnPlayer(playerId: PlayerIndex, activateTracker: boolean): void {
	const activateDamageTrackerOnPlayer_result = Citizen.invokeNative<void>('0xEB41AFC8A3FF370B', playerId, activateTracker);
	return activateDamageTrackerOnPlayer_result;
}