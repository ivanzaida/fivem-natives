/**
 * GRAPHICS:DISABLE_IN_WATER_PTFX
 *
 * 0xA9EDD0FB09620618

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function disableInWaterPtfx(enable: boolean): void {
	const disableInWaterPtfx_result = Citizen.invokeNative<void>('0xA9EDD0FB09620618', enable);
	return disableInWaterPtfx_result;
}