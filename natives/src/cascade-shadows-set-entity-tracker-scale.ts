/**
 * GRAPHICS:CASCADE_SHADOWS_SET_ENTITY_TRACKER_SCALE
 *
 * 0xA38ACCBA88BEF30D

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function cascadeShadowsSetEntityTrackerScale(scale: number): void {
	const cascadeShadowsSetEntityTrackerScale_result = Citizen.invokeNative<void>('0xA38ACCBA88BEF30D', scale);
	return cascadeShadowsSetEntityTrackerScale_result;
}