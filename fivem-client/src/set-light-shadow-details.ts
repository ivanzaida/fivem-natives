/**
 * CFX:SET_LIGHT_SHADOW_DETAILS
 *
 * 0xA40EAC1A

 * Set the shadow details for a created light.
 * 
 * ------------------------------------------------------------------
 * @param {number} shadowFlags Flags controlling shadow behavior
 * @param {number} shadowDistance The distance at which shadows are rendered
 * @param {number} shadowFade The fade distance for shadows
 * @param {number} shadowDepthBiasScale The depth bias scale
 */
export function setLightShadowDetails(shadowFlags: number, shadowDistance: number, shadowFade: number, shadowDepthBiasScale: number): void {
	const setLightShadowDetails_result = Citizen.invokeNative<void>('0xA40EAC1A', shadowFlags, shadowDistance, shadowFade, shadowDepthBiasScale);
	return setLightShadowDetails_result;
}