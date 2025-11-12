/**
 * CFX:SET_PLAYER_KILL_FALL_HEIGHT
 *
 * 0x86BD5722

 * A setter for [GET_PLAYER_KILL_FALL_HEIGHT](#_0x13BC2C63).
 * 
 * ------------------------------------------------------------------
 * @param {number} height height from which the player peds will instantly die from fall damage. Default value is 15.0.
 */
export function setPlayerKillFallHeight(height: number): void {
	const setPlayerKillFallHeight_result = Citizen.invokeNative<void>('0x86BD5722', height);
	return setPlayerKillFallHeight_result;
}