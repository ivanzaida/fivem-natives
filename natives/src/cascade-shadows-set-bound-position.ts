/**
 * GRAPHICS:CASCADE_SHADOWS_SET_BOUND_POSITION
 *
 * 0x33DE7FF46025FB11

 * 
 * ------------------------------------------------------------------
 * @param {number} dist
 */
export function cascadeShadowsSetBoundPosition(dist: number): void {
	const cascadeShadowsSetBoundPosition_result = Citizen.invokeNative<void>('0x33DE7FF46025FB11', dist);
	return cascadeShadowsSetBoundPosition_result;
}