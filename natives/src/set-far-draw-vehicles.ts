/**
 * VEHICLE:SET_FAR_DRAW_VEHICLES
 *
 * 0x00AB2F24F67F293F

 * 
 * Activate / deactivate the far draw
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function setFarDrawVehicles(val: boolean): void {
	const setFarDrawVehicles_result = Citizen.invokeNative<void>('0x00AB2F24F67F293F', val);
	return setFarDrawVehicles_result;
}