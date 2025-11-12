/**
 * MISC:SET_WIND
 *
 * 0x65D8EA648927792B

 * 
 * Sets the the normalized wind speed value. The wind speed clamps always at 12.0, SET_WIND sets the wind in a percentage, 0.0 is 0 and 1.0 is 12.0. Setting this value to a negative number resumes the random wind speed changes provided by the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} windVal
 */
export function setWind(windVal: number): void {
	const setWind_result = Citizen.invokeNative<void>('0x65D8EA648927792B', windVal);
	return setWind_result;
}