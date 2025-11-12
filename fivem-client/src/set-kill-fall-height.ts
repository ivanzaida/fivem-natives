/**
 * CFX:SET_KILL_FALL_HEIGHT
 *
 * 0x24091E09

 * A setter for [GET_KILL_FALL_HEIGHT](#_0x884C8B5A).
 * 
 * ------------------------------------------------------------------
 * @param {number} height height from which the nonplayer peds will instantly die from fall damage. Default value is 10.0.
 */
export function setKillFallHeight(height: number): void {
	const setKillFallHeight_result = Citizen.invokeNative<void>('0x24091E09', height);
	return setKillFallHeight_result;
}