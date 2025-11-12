/**
 * CFX:SET_LIGHT_SHADOW_FADE_DISTANCE
 *
 * 0x3C54C2A8

 * Set the fade distance for the shadows of a created light.
 * 
 * ------------------------------------------------------------------
 * @param {number} fadeDistance The distance at which the shadow fades
 */
export function setLightShadowFadeDistance(fadeDistance: number): void {
	const setLightShadowFadeDistance_result = Citizen.invokeNative<void>('0x3C54C2A8', fadeDistance);
	return setLightShadowFadeDistance_result;
}