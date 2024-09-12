/**
 * GRAPHICS:CASCADE_SHADOWS_ENABLE_FREEZER
 *
 * 0x9EFA902715EB835D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function cascadeShadowsEnableFreezer(enable: boolean): void {
	const cascadeShadowsEnableFreezer_result = Citizen.invokeNative<void>('0x9EFA902715EB835D', enable);
	return cascadeShadowsEnableFreezer_result;
}