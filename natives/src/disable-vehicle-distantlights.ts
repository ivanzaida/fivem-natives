/**
 * GRAPHICS:DISABLE_VEHICLE_DISTANTLIGHTS
 *
 * 0x8A427A89051C6578

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function disableVehicleDistantlights(enable: boolean): void {
	const disableVehicleDistantlights_result = Citizen.invokeNative<void>('0x8A427A89051C6578', enable);
	return disableVehicleDistantlights_result;
}