/**
 * GRAPHICS:CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER
 *
 * 0x70F19143E4E40117

 * 
 * When this is set to ON, shadows only draw as you get nearer.
 * 
 * When OFF, they draw from a further distance.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} scale
 */
export function cascadeShadowsEnableEntityTracker(scale: boolean): void {
	const cascadeShadowsEnableEntityTracker_result = Citizen.invokeNative<void>('0x70F19143E4E40117', scale);
	return cascadeShadowsEnableEntityTracker_result;
}