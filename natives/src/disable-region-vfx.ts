/**
 * GRAPHICS:DISABLE_REGION_VFX
 *
 * 0x45059C350D918C38

 * 
 * ------------------------------------------------------------------
 * @param {boolean} disable
 */
export function disableRegionVfx(disable: boolean): void {
	const disableRegionVfx_result = Citizen.invokeNative<void>('0x45059C350D918C38', disable);
	return disableRegionVfx_result;
}