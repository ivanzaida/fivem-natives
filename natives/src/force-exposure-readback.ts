/**
 * GRAPHICS:FORCE_EXPOSURE_READBACK
 *
 * 0xCB373F25B2EAB622

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function forceExposureReadback(onOff: boolean): void {
	const forceExposureReadback_result = Citizen.invokeNative<void>('0xCB373F25B2EAB622', onOff);
	return forceExposureReadback_result;
}