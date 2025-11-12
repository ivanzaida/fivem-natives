import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR
 *
 * 0xA74429530D79E338

 * 
 * This function gets the color of the parachute smoke trail for the player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getPlayerParachuteSmokeTrailColor(player: PlayerIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getPlayerParachuteSmokeTrailColor_result = Citizen.invokeNative<void>('0xA74429530D79E338', player, red.dataView, green.dataView, blue.dataView);
	return getPlayerParachuteSmokeTrailColor_result;
}