/**
 * CFX:SET_LIGHT_FADE_DISTANCE
 *
 * 0xFA46714D

 * Set the fade distance.
 * 
 * ------------------------------------------------------------------
 * @param {number} fadeDistance Maximum distance
 */
export function setLightFadeDistance(fadeDistance: number): void {
	const setLightFadeDistance_result = Citizen.invokeNative<void>('0xFA46714D', fadeDistance);
	return setLightFadeDistance_result;
}