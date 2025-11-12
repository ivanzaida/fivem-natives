/**
 * CFX:SET_LIGHT_SPECULAR_FADE_DISTANCE
 *
 * 0xC3A35A50

 * Set the specular fade distance for a created light.
 * 
 * ------------------------------------------------------------------
 * @param {number} fadeDistance The distance at which specular highlights fade
 */
export function setLightSpecularFadeDistance(fadeDistance: number): void {
	const setLightSpecularFadeDistance_result = Citizen.invokeNative<void>('0xC3A35A50', fadeDistance);
	return setLightSpecularFadeDistance_result;
}