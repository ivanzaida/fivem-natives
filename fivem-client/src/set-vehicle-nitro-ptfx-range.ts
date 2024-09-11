/**
 * CFX:SET_VEHICLE_NITRO_PTFX_RANGE
 *
 * 0XA40CB822

 * Sets the maximum distance in which [_SET_VEHICLE_NITRO_ENABLED](#_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 * 
 * ------------------------------------------------------------------
 * @param {number} range The visible distance. Default is 50.0f.
 */
export function setVehicleNitroPtfxRange(range: number): void {
	const setVehicleNitroPtfxRange_result = Citizen.invokeNative<void>('0XA40CB822', range);
	return setVehicleNitroPtfxRange_result;
}