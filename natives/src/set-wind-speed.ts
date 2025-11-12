/**
 * MISC:SET_WIND_SPEED
 *
 * 0xF9CA39E1CCB8EA1D

 * 
 * Using this native will set the absolute wind speed value. The wind speed clamps to a range of 0.0- 12.0. Setting this value to a negative number resumes the random wind speed changes provided by the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} windSpeed
 */
export function setWindSpeed(windSpeed: number): void {
	const setWindSpeed_result = Citizen.invokeNative<void>('0xF9CA39E1CCB8EA1D', windSpeed);
	return setWindSpeed_result;
}