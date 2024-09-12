/**
 * GRAPHICS:CASCADE_SHADOWS_SET_CASCADE_BOUNDS
 *
 * 0xA4D68014F63795B7

 * 
 * ------------------------------------------------------------------
 * @param {number} cascade
 * @param {boolean} enabled
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radiusScale
 * @param {boolean} interpolateToDisabled
 * @param {number} interpolationTime
 */
export function cascadeShadowsSetCascadeBounds(cascade: number, enabled: boolean, x: number, y: number, z: number, radiusScale: number, interpolateToDisabled: boolean = false, interpolationTime: number = 0): void {
	const cascadeShadowsSetCascadeBounds_result = Citizen.invokeNative<void>('0xA4D68014F63795B7', cascade, enabled, x, y, z, radiusScale, interpolateToDisabled, interpolationTime);
	return cascadeShadowsSetCascadeBounds_result;
}