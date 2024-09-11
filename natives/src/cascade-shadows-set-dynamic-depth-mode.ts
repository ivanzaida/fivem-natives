/**
 * GRAPHICS:CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_MODE
 *
 * 0x89ACA8B99257E016

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function cascadeShadowsSetDynamicDepthMode(enable: boolean): void {
	const cascadeShadowsSetDynamicDepthMode_result = Citizen.invokeNative<void>('0x89ACA8B99257E016', enable);
	return cascadeShadowsSetDynamicDepthMode_result;
}