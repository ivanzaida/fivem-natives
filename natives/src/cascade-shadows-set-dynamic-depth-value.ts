/**
 * GRAPHICS:CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_VALUE
 *
 * 0x4FC2C77501EDCC1A

 * 
 * ------------------------------------------------------------------
 * @param {number} distance
 */
export function cascadeShadowsSetDynamicDepthValue(distance: number): void {
	const cascadeShadowsSetDynamicDepthValue_result = Citizen.invokeNative<void>('0x4FC2C77501EDCC1A', distance);
	return cascadeShadowsSetDynamicDepthValue_result;
}