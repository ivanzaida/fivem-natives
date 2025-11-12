import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR
 *
 * 0xDC198F70124270BE

 * 
 * This function sets the color of the parachute smoke trail for the player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
export function setPlayerParachuteSmokeTrailColor(player: PlayerIndex, red: number, green: number, blue: number): void {
	const setPlayerParachuteSmokeTrailColor_result = Citizen.invokeNative<void>('0xDC198F70124270BE', player, red, green, blue);
	return setPlayerParachuteSmokeTrailColor_result;
}