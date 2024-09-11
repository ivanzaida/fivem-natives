import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_OWNS_WAYPOINT
 *
 * 0xB039D40188E991D1

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkGetPlayerOwnsWaypoint(player: PlayerIndex): boolean {
	const networkGetPlayerOwnsWaypoint_result = Citizen.invokeNative<boolean>('0xB039D40188E991D1', player);
	return networkGetPlayerOwnsWaypoint_result;
}