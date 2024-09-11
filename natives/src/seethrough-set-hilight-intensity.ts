/**
 * GRAPHICS:SEETHROUGH_SET_HILIGHT_INTENSITY
 *
 * 0xEE38FB77BB7A9700

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function seethroughSetHilightIntensity(param: number): void {
	const seethroughSetHilightIntensity_result = Citizen.invokeNative<void>('0xEE38FB77BB7A9700', param);
	return seethroughSetHilightIntensity_result;
}