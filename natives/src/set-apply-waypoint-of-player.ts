import { PlayerIndex, EHudColours } from '@ivanzaida/structures'

/**
 * PLAYER:SET_APPLY_WAYPOINT_OF_PLAYER
 *
 * 0xC29BDAAD2623309A

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EHudColours} color
 */
export function setApplyWaypointOfPlayer(player: PlayerIndex, color: EHudColours | number = 1): void {
	const setApplyWaypointOfPlayer_result = Citizen.invokeNative<void>('0xC29BDAAD2623309A', player, color);
	return setApplyWaypointOfPlayer_result;
}