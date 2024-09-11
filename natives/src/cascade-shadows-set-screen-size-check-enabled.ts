/**
 * GRAPHICS:CASCADE_SHADOWS_SET_SCREEN_SIZE_CHECK_ENABLED
 *
 * 0x029E1B2A8ED6262B

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function cascadeShadowsSetScreenSizeCheckEnabled(enable: boolean): void {
	const cascadeShadowsSetScreenSizeCheckEnabled_result = Citizen.invokeNative<void>('0x029E1B2A8ED6262B', enable);
	return cascadeShadowsSetScreenSizeCheckEnabled_result;
}