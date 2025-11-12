/**
 * CFX:GET_PLAYER_KILL_FALL_HEIGHT
 *
 * 0xBFB2990C

 * A getter for [SET_PLAYER_KILL_FALL_HEIGHT](#_0xAEF2C6A4).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the height from which the player will instantly die due to fall damage.  
The default value is `15.0`.
 */
export function getPlayerKillFallHeight(): number {
	const getPlayerKillFallHeight_result = Citizen.invokeNative<number>('0xBFB2990C', );
	return getPlayerKillFallHeight_result;
}