/**
 * GRAPHICS:CASCADE_SHADOWS_SET_CASCADE_BOUNDS_SCALE
 *
 * 0xD1EDF428E9679161

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function cascadeShadowsSetCascadeBoundsScale(scale: number): void {
	const cascadeShadowsSetCascadeBoundsScale_result = Citizen.invokeNative<void>('0xD1EDF428E9679161', scale);
	return cascadeShadowsSetCascadeBoundsScale_result;
}