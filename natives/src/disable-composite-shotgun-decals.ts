/**
 * GRAPHICS:DISABLE_COMPOSITE_SHOTGUN_DECALS
 *
 * 0x30046CB0BDCE65EF

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function disableCompositeShotgunDecals(val: boolean): void {
	const disableCompositeShotgunDecals_result = Citizen.invokeNative<void>('0x30046CB0BDCE65EF', val);
	return disableCompositeShotgunDecals_result;
}