/**
 * MISC:SET_WIND_DIRECTION
 *
 * 0x0A9D04B4275939F5

 * 
 * The wind direction in radians
 * 180 degrees (PI), wind will blow from the south. Setting this value to a negative number resumes the random wind direction changes provided by the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} windDir
 */
export function setWindDirection(windDir: number): void {
	const setWindDirection_result = Citizen.invokeNative<void>('0x0A9D04B4275939F5', windDir);
	return setWindDirection_result;
}