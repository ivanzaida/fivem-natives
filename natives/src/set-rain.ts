/**
 * MISC:SET_RAIN
 *
 * 0x3AC92E39007E1D09

 * 
 * With an `intensity` higher than `0.5f`, only the creation of puddles gets faster, rain and rain sound won't increase after that.
 * With an `intensity` of `0.0f` rain and rain sounds are disabled and there won't be any new puddles.
 * To use the rain intensity of the current weather, call this native with `-1f` as `intensity`.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} rainVal
 */
export function setRain(rainVal: number): void {
	const setRain_result = Citizen.invokeNative<void>('0x3AC92E39007E1D09', rainVal);
	return setRain_result;
}