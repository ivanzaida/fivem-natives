/**
 * GRAPHICS:CASCADE_SHADOWS_SET_SPLIT_Z_EXP_WEIGHT
 *
 * 0x76C8F25CE400DBC9

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function cascadeShadowsSetSplitZExpWeight(scale: number): void {
	const cascadeShadowsSetSplitZExpWeight_result = Citizen.invokeNative<void>('0x76C8F25CE400DBC9', scale);
	return cascadeShadowsSetSplitZExpWeight_result;
}