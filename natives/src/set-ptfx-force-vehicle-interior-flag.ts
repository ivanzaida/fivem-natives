/**
 * GRAPHICS:SET_PTFX_FORCE_VEHICLE_INTERIOR_FLAG
 *
 * 0x081A40A40A77958E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function setPtfxForceVehicleInteriorFlag(val: boolean): void {
	const setPtfxForceVehicleInteriorFlag_result = Citizen.invokeNative<void>('0x081A40A40A77958E', val);
	return setPtfxForceVehicleInteriorFlag_result;
}